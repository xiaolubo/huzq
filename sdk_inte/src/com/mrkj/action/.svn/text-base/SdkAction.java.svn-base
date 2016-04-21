package com.mrkj.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mrkj.data.Appsdk;
import com.mrkj.data.SdkBack;
import com.mrkj.data.Sdkjson;
import com.mrkj.model.App;
import com.mrkj.model.Appprice;
import com.mrkj.model.City;
import com.mrkj.model.Operator;
import com.mrkj.model.Province;
import com.mrkj.model.Provincecode;
import com.mrkj.model.Requestlog;
import com.mrkj.model.Sdk;
import com.mrkj.model.Sdkprice;
import com.mrkj.model.Shieldsdk;
import com.mrkj.service.CityService;
import com.mrkj.service.OperatorService;
import com.mrkj.service.ProvinceService;
import com.mrkj.service.ProvincecodeService;
import com.mrkj.service.RequestlogService;
import com.mrkj.serviceImpl.AppServiceImpl;
import com.mrkj.serviceImpl.ProvincecodeServiceImpl;
import com.mrkj.serviceImpl.SdkServiceImpl;
import com.mrkj.util.CosUtil;
import com.mrkj.util.WebUtil;

@Controller
public class SdkAction {
	private final Log logger = LogFactory.getLog(SdkAction.class); 
	
	@Resource 
	private SdkServiceImpl sdkService;
	
	@Resource 
	private OperatorService operService;
	
	@Resource 
	private ProvinceService prorService;
	@Resource 
	private ProvincecodeService pcService;
	@Resource 
	private CityService cityService;
	
	@Resource
	private AppServiceImpl appservice;
	@Resource
	private RequestlogService rService;
	
	@RequestMapping("/sdk/getSdk")
	public void getSdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String appId = request.getParameter("appId");
		String channelId = request.getParameter("channelId");
		String imsi = request.getParameter("imsi");
		String tel = request.getParameter("tel");
		String iccid = request.getParameter("iccid");
		String province = null;
		try {
			
			JSONObject jo = new JSONObject();
			if(StringUtils.isEmpty(appId) || StringUtils.isEmpty(channelId) 
					|| StringUtils.isEmpty(imsi) ||
					(StringUtils.isEmpty(tel) && StringUtils.isEmpty(iccid))){
				jo.put("sdk", null);
				CosUtil.sendStr(response, jo.toString());
				logger.error("error of paramteter,must not be null:appId="+appId+",channelId="+channelId+",imsi="+imsi+",tel="+tel+",iccid="+iccid);
				return ;
			}
			if(!CosUtil.isNumeric(appId) || !CosUtil.isNumeric(channelId)  ){
				jo.put("sdk", null);
				CosUtil.sendStr(response, jo.toString());
				logger.error("error of paramteter ,must be number:appId="+appId+",channelId="+channelId+",imsi="+imsi+",tel="+tel+",iccid="+iccid);
				return ;
			}
			tel = tel != null ? tel.trim() : null;
			iccid = iccid != null ? iccid.trim() : null;
			//通过iccid查省份
			Provincecode pc = null;
			City c = null;
			 Map<String,String> m = CosUtil.JudgeProvince(iccid);
			 if(m != null && "2".equals(m.get("operator").toString())){
				 c = cityService.getCity(m.get("code").toString());
			 }else if(m != null && ("1".equals(m.get("operator").toString())
					 || "3".equals(m.get("operator").toString()))){
				 pc = pcService.getProvincecode(m.get("code").toString(), m.get("operator").toString());
			 }
			
			if(pc != null){
				province = pc.getName();
			}else if(c != null){
				province = c.getProvince().getProvinceName();
			}
			//如果通过iccid获取不到省份，则通过第三方接口查省份
			if(province == null || "".equals(province)){
				province = WebUtil.getProvince(tel);
			}
			if(province == null || "".equals(province)){
				jo.put("sdk", null);
				CosUtil.sendStr(response, jo.toString());
				logger.error("error->no find province with tel or iccid:appId="+appId+",channelId="+channelId+",imsi="+imsi+",tel="+tel+",iccid="+iccid+",province="+province);
				return;
			}else{
				logger.info("info->appId="+appId+",channelId="+channelId+",imsi="+imsi+",tel="+tel+",iccid="+iccid+",province="+province);
			}
			
			//根据imsi判断用户所属运营商   电信  联通   移动  移动4G  铁通
			String op = CosUtil.judgeOperator(imsi.trim());
			
			//根据appid下的计费点金额，以及从imsi获取的运营商信息，获取对应的sdk
			List<Appprice> alist = sdkService.getAppprice(Integer.valueOf(appId));
			//获取APP下的所有sdk
			List<Sdk> appallsdk =  appservice.getAppsdk(Integer.valueOf(appId));
			List<Sdk> totalSdk = sdkService.getAllSdk();
			//过滤出APP不用的sdk id
			List<Integer> notinappsdk = filterSdkid(appallsdk,totalSdk);
			
			//获取被渠道屏蔽的sdk
			List<Integer> shieldsdk = this.selectShieldsdk(Integer.valueOf(channelId));
			if(shieldsdk == null){
				shieldsdk =  new ArrayList<Integer>();
				shieldsdk.add(0);
			}
			//合并list
			shieldsdk.addAll(notinappsdk);
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("oName", op);
			map.put("pName", province);
			map.put("shieldsdkid", shieldsdk);
			//获取对应的sdk
//			List<Sdkjson> appsdk = this.inteSdkjson(alist,map);
			Map<String,Object> lmap = this.inteSdkjson(alist,map);
			List<Sdkjson> appsdk = (List<Sdkjson>)lmap.get("sdklist");
			List<Integer> apppricelist = (List<Integer>)lmap.get("sdkpricelist");
			//记录请求
			this.addRequestlog(apppricelist,appId,imsi);
			//以json数据返回
			jo.put("sdk", appsdk);
			CosUtil.sendStr(response, jo.toString());
			logger.info(jo.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	private List<Integer> filterSdkid(List<Sdk> appallsdk,List<Sdk> totalSdk){
		List<Integer> idslist = new ArrayList<Integer>();
		if(totalSdk == null || totalSdk.size() <= 0){
			return idslist;
		}
		if((appallsdk == null || appallsdk.size() <= 0)
				&& (totalSdk != null && totalSdk.size() > 0)){
			for(Sdk s : totalSdk){
				idslist.add(s.getId());
			}
			return idslist;
		}
		//把app 对应的sdk放到map
		Map<Integer,String> map = new HashMap<Integer,String>();
		for(Sdk sd : appallsdk){
			map.put(sd.getId(), sd.getSdkName());
		}
		for(Sdk s: totalSdk){
			//如果map里没有,则把它放到list,作为屏蔽sdk
			if(!map.containsKey(s.getId()) ){
				idslist.add(s.getId());
			}
		}
		return idslist;
	}
	
	@RequestMapping("/sdk/getSdk2")
	public void getSdk3(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		logger.error("begin---------");
		String appId = request.getParameter("appId");
		String channelId = request.getParameter("channelId");
		String imsi = request.getParameter("imsi");
		String province = request.getParameter("province");
		JSONObject jo = new JSONObject();
		if(StringUtils.isEmpty(appId) || StringUtils.isEmpty(channelId) 
				|| StringUtils.isEmpty(imsi) || StringUtils.isEmpty(province)){
			jo.put("sdk", "province is null");
			CosUtil.sendStr(response, jo.toString());
			logger.error("parameter error:appId="+appId+",channelId="+channelId+",imsi="+imsi+",province="+province);
			return ;
		}
		if(!CosUtil.isNumeric(appId) || !CosUtil.isNumeric(channelId) ){
			jo.put("sdk", "province is null");
			CosUtil.sendStr(response, jo.toString());
			logger.error("parameter error:appId="+appId+",channelId="+channelId+",imsi="+imsi+",province="+province);
			return ;
		}
		logger.error("test---------");
		logger.info("parameter error:appId="+appId+",channelId="+channelId+",imsi="+imsi+",province="+province);
		//根据imsi判断用户所属运营商   电信  联通   移动  移动4G  铁通
		String op = CosUtil.judgeOperator(imsi.trim());
		
		//根据appid下的计费点金额，以及从imsi获取的运营商信息，获取对应的sdk
		List<Appprice> alist = sdkService.getAppprice(Integer.valueOf(appId));
		//获取被渠道屏蔽的sdk
		List<Integer> shieldsdk = this.selectShieldsdk(Integer.valueOf(channelId));
		if(shieldsdk == null){
			shieldsdk =  new ArrayList<Integer>();
			shieldsdk.add(0);
		}
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("oName", op);
		map.put("pName", province);
		map.put("shieldsdkid", shieldsdk);
		//获取对应的sdk
		SdkBack sdkb = new SdkBack();
		Map<String,Object> lmap = this.inteSdkjson(alist,map);
		List<Sdkjson> appsdk = (List<Sdkjson>)lmap.get("sdklist");
		List<Integer> apppricelist = (List<Integer>)lmap.get("sdkpricelist");
		//记录请求
		this.addRequestlog(apppricelist,appId,imsi);
		sdkb.setAppsdk(appsdk);
		//以json数据返回
		jo.put("sdk", sdkb);
		CosUtil.sendStr(response, jo.toString());
	}
	
	private void addRequestlog(List<Integer> apppricelist,String appId,String imsi){
		if(apppricelist == null || apppricelist.size() <= 0){
			return ;
		}
		Requestlog r = null;
		for(Integer sdkpriceid : apppricelist){
			if(sdkpriceid == null || sdkpriceid == 0){
				continue;
			}
			App a = new App();
			a.setId(Integer.valueOf(appId));
			Sdkprice sp = new Sdkprice();
			sp.setId(sdkpriceid);
			r = new Requestlog();
			r.setApp(a);
			r.setSdkprice(sp);
			r.setAddtime(System.currentTimeMillis()/1000);
			r.setImsi(imsi);
			rService.saveRequestlog(r);
		}
	}
	
	/**
	 *获取sdk各个计费点 ,(后台)
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/getAllSdkPrice")
	public void getAllSdkPrice(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String cp = request.getParameter("page");
		String limit = request.getParameter("limit");
		
		//三个查询条件
		String sdkname = request.getParameter("sdkname");
		String operator = request.getParameter("operator");
		String price = request.getParameter("price");
		if(null == cp || "".equals(cp) || !CosUtil.isNumeric(cp)){
			//当前页码不为数字时
			cp = "1";
		}
		if(null == limit || "".equals(limit) || !CosUtil.isNumeric(limit)){
			limit = "20";
		}
		int currentPage = Integer.valueOf(cp);
		int pageSize = Integer.valueOf(limit);
		Map<String,String> map = new HashMap<String,String>();
		map.put("sdkname", sdkname);
		map.put("operator", operator);
		map.put("price", price);
		Long appcount = sdkService.countSdkprice();
		List<com.mrkj.data.Sdkprice> sdkprice =  sdkService.getSdkprice(currentPage, pageSize,map);
		JSONObject jo = new JSONObject ();
		jo.put("rows", sdkprice);
		jo.put("totalCount", appcount);
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 获取sdk
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/getAllSdk")
	public void getAllSdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String cp = request.getParameter("page");
		String limit = request.getParameter("limit");
		if(null == cp || "".equals(cp) || !CosUtil.isNumeric(cp)){
			//当前页码不为数字时
			cp = "1";
		}
		if(null == limit || "".equals(limit) || !CosUtil.isNumeric(limit)){
			limit = "20";
		}
		int currentPage = Integer.valueOf(cp);
		int pageSize = Integer.valueOf(limit);
		Long count = sdkService.countSdk();
		List<Sdk> sdks = sdkService.getSdk(currentPage, pageSize);
		JSONObject jo = new JSONObject ();
		jo.put("rows", sdks);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 增加sdk(后台)
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/addSdk")
	public void addSdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		JSONObject jo = new JSONObject ();
		try{
			String sdkName = request.getParameter("sdkName");
			String sdkid = request.getParameter("sdkid");
			String isOpen = request.getParameter("isOpen");
			Sdk sdk = null;
			sdk = sdkService.getSdk(sdkid);
			
			if(sdk == null ){
				sdk = new Sdk();
				sdk.setSdkid(sdkid);
				sdk.setSdkName(sdkName);
				sdk.setIsOpen(Integer.valueOf(isOpen));
				Integer i = sdkService.addSdk(sdk);
				if(i > 0){
				   jo.put("success", true);
				   CosUtil.sendStr(response,jo.toString());
				}else{
					jo.put("success", false);
					CosUtil.sendStr(response,jo.toString());
				}
			}else{
				jo.put("success", false);
				jo.put("msg", "sdk已存在");
				CosUtil.sendStr(response,jo.toString());
			}
			
		}catch(Exception e){
			jo.put("success", false);
			CosUtil.sendStr(response,jo.toString());
			logger.error(CosUtil.getTrace(e));
		}
	}
	
	
	
	/**
	 * 删除sdk
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/delSdk")
	public void delSdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=sdkService.deleteSdk(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
	}
	
	/**
	 * 保存修改后的sdkprice
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/updateSdkprice")
	public void updateSdkprice(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String sdk=request.getParameter("sdk");
		String operator=request.getParameter("operator");
		String province=request.getParameter("province");
		String price=request.getParameter("price");
		String level=request.getParameter("level");
		Integer sdkid = 0;
		Integer operatorid = 0;
		Integer provinceid = 0;
		if(!CosUtil.isNumeric(sdk)){
			Sdk s = sdkService.getSdkByname(sdk);
			if(s != null){
				sdkid = s.getId();
			}
		}else{
			sdkid = Integer.valueOf(sdk);
		}
		if(!CosUtil.isNumeric(operator)){
			Operator op = operService.getOperator(operator);
			if(op != null){
				operatorid = op.getId();
			}
		}else{
			operatorid = Integer.valueOf(operator);
		}
		if(!CosUtil.isNumeric(province)){
			Province pro = prorService.getProvince(province);
			if(pro != null){
				provinceid = pro.getId();
			}
		}else{
			provinceid = Integer.valueOf(province);
		}
		Sdkprice sp = sdkService.getSdkpriceByid(Integer.valueOf(id));
		JSONObject jo=new JSONObject();
		if(sp != null){
			Sdk sk = new Sdk();
			sk.setId(sdkid);
			Operator o = new Operator();
			o.setId(operatorid);
			Province p = new Province();
			p.setId(provinceid);
			sp.setSdk(sk);
			sp.setProvince(p);
			sp.setOperator(o);
			sp.setPrice(Integer.valueOf(price));
			sp.setLevel(Integer.valueOf(level));
			sdkService.updateSdkpirce(sp);
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 更新sdk
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/updateSdk")
	public void updateSdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String name=request.getParameter("sdkName");
		String sdkid=request.getParameter("sdkid");
		String isOpen=request.getParameter("isOpen");
		Sdk sdk =null;
		sdk = sdkService.getSdkByid(Integer.valueOf(id));
		sdk.setSdkName(name);
		sdk.setSdkid(sdkid);
		sdk.setIsOpen(Integer.valueOf(isOpen));
		sdkService.updateSdk(sdk);
		JSONObject jo=new JSONObject();
		jo.put("success", true);
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 增加sdkprice
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/addSdkprice")
	public void addSdkprice(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String operator=request.getParameter("operator");
//		String province=request.getParameter("province");
		String sdk=request.getParameter("sdk");
		String price=request.getParameter("price");
//		String level=request.getParameter("level");
		Operator op = operService.getOperatorByid(Integer.valueOf(operator));
		Sdk s = sdkService.getSdkByid(Integer.valueOf(sdk));
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("oName", op.getOperatorName());
		map.put("sdkName", s.getSdkName());
		map.put("price", price);
		JSONObject jo=new JSONObject();
		List<Sdkprice> slist = sdkService.getSdkpriceBysdkOpepri(map);
		if(slist != null && slist.size() > 0){
			jo.put("success", false);
			jo.put("msg", s.getSdkName()+"-"+op.getOperatorName()+"-"+price+"计费点已增加!");
		}else{
			List<Province> plist = prorService.getProvinces();
			Integer i =  0;
			for(Province p :plist){
				Sdkprice sp = new Sdkprice();
				sp.setLevel(0);
				sp.setPrice(Integer.valueOf(price));
				sp.setSdk(s);
				sp.setProvince(p);
				sp.setOperator(op);
				sp.setIsshield(1);
				i = sdkService.saveSdkprice(sp);
			}
			
			
			if(i > 0){
				jo.put("success", true);
			}else{
				jo.put("success", false);
			}
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	@RequestMapping("/sdk/changeIsshield")
	public void changeIsshield(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");

		
		Sdkprice sp = sdkService.getSdkpriceByid(Integer.valueOf(id));
		JSONObject jo=new JSONObject();
		if(sp != null){
			Integer v = sp.getIsshield();
			if(v == 1){
				sp.setIsshield(0);
			}else{
				sp.setIsshield(1);
			}
			sdkService.updateSdkpirce(sp);
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	@RequestMapping("/sdk/changeSdkState")
	public void changeSdkState(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		Sdk s = sdkService.getSdkByid(Integer.valueOf(id));
		JSONObject jo=new JSONObject();
		if(s != null){
			Integer v = s.getIsOpen();
			if(v == 1){
				s.setIsOpen(0);
			}else{
				s.setIsOpen(1);
			}
			sdkService.updateSdk(s);
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	/**
	 * 删除sdkprice
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/delSdkprice")
	public void delSdkprice(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=sdkService.deleSdkprice(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 改变计费点省份与权重
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/sdk/changeSdkpricePro")
	public void changeSdkpricePro(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		//如:1@_@2,2@_@3,33@_@1,     1@_@2 1为省份id,2为权重
		String id=request.getParameter("id");
		//如:乐图,联通,400
		String sp=request.getParameter("sp");
		JSONObject jo=new JSONObject();
		if(sp == null || "".equals(sp)){
			jo.put("success", false);
		}
		if(id == null || "".equals(id)){
			id = "0@_@0,";
		}
		String sparr[] =  sp.split(",");
		String proarr[] = id.split(",");
		if(sparr == null || sparr.length <= 0){
			jo.put("success", false);
			CosUtil.sendStr(response,jo.toString());
			return;
		}
		if(proarr == null || proarr.length <= 0){
			proarr[0] = "0@_@1";
		}
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("sdkName", sparr[0]);
		map.put("oName", sparr[1]);
		map.put("price", sparr[2]);
		//所有省份
		List<Province> prolist = prorService.getProvinces();
		Map<Integer,Integer> idmap = changeToMap(proarr);
		if(idmap == null){
			idmap = new HashMap<Integer,Integer>();
		}
		for(int n=0;n<prolist.size();n++){
			Sdkprice sprice = null;
			Province p = prolist.get(n);
			if(p == null){
				continue;
			}
			Integer pid = p.getId();
			map.put("pName", p.getProvinceName());
			sprice = sdkService.getSingleSdkprice(map);
			if(sprice != null){
				if(idmap.containsKey(pid)){
					//开通该省份，同时进行权重修改
					sprice.setLevel(idmap.get(pid));
					sprice.setIsshield(1);
				}else{
					//屏蔽该省份
					sprice.setIsshield(0);
				}
				//更新sdkprice
				sdkService.updateSdkpirce(sprice);
				jo.put("success", true);
			}else{
				//如果计费点不存在，则增加
				sprice = new Sdkprice();
				sprice.setProvince(p);
				Sdk sdk = sdkService.getSdkByname(sparr[0]);
				Operator oper = operService.getOperator(sparr[1]);
				sprice.setSdk(sdk);
				sprice.setOperator(oper);
				sprice.setPrice(Integer.valueOf(sparr[2]));
				if(idmap.containsKey(pid)){
					//开通该省份，同时进行权重修改
					sprice.setLevel(idmap.get(pid));
					sprice.setIsshield(1);
				}else{
					//屏蔽该省份
					sprice.setLevel(0);
					sprice.setIsshield(0);
				}
				sdkService.saveSdkprice(sprice);
			}
		}
		CosUtil.sendStr(response,jo.toString());
		
	}
	
	
	private Map<Integer,Integer> changeToMap(String proarr[]){
		Map<Integer,Integer> map = new HashMap<Integer,Integer>();
		if(proarr == null || proarr.length <= 0){
			return null;
		}
		for(int i = 0 ;i<proarr.length;i++){
			String ids[] = proarr[i].split("@_@");
			map.put(Integer.valueOf(ids[0]), Integer.valueOf(ids[1]));
		}
		return map;
	}
	
	private List<Appsdk> inteSdk(List<Appprice> alist,Map<String,Object> map){
		List<Appsdk> appsdk = new ArrayList<Appsdk>();
		for(Appprice a : alist){
			if(a == null){
				continue;
			}
			map.put("price", a.getPrice());
			//返回对象
			Appsdk ak = new Appsdk();
			List<Sdkjson> sdks = new ArrayList<Sdkjson>();
			List<Sdkprice> sdkprice = sdkService.getSdkprice(map);
			//如果没有对应价格的sdk，即进行拼凑
			if(sdkprice == null ){
				sdkprice = sdkService.pieceSdkprice(map);
				sdkprice = this.pieceSdk(sdkprice,a.getPrice());
			}
			if(sdkprice == null || sdkprice.size() <= 0){
				continue;
			}
			for(Sdkprice sp : sdkprice){
				//重新对sdk返回对象进行组装
				Sdkjson ss = new Sdkjson();
				ss.setPrice(sp.getPrice());
				ss.setSdkid(Integer.valueOf(sp.getSdk().getSdkid()));
				sdks.add(ss);
			}
			App app = a.getApp();
			ak.setPrice(a.getPrice());
			ak.setAppid(app.getId());
			ak.setSdks(sdks);
			appsdk.add(ak);
		}
		return appsdk;
	}
	
	private Map<String,Object> inteSdkjson(List<Appprice> alist,Map<String,Object> map){
		Map<String,Object> returnmap = new HashMap<String,Object>();
		List<Integer> sdkpriceidlist = new ArrayList<Integer>();
		List<Sdkjson> sdkj = new ArrayList<Sdkjson>();
		if(alist == null){
			return returnmap;
		}
		for(Appprice a : alist){
			if(a == null){
				continue;
			}
			map.put("price", a.getPrice());
			//返回对象
			List<Sdkprice> sdkprice = sdkService.getSdkprice(map);
			//组合
			List<Sdkprice> sdkpricep = null;
			//单个
			Sdkprice bestSdk = null;
			//如果没有对应价格的sdk，即进行拼凑
			if(sdkprice == null || sdkprice.size() <= 0){
				sdkpricep = sdkService.pieceSdkprice(map);
				sdkpricep = this.pieceSdk(sdkprice,a.getPrice());
			}else{
				//根据权重选择最优的
				bestSdk = sdkprice.get(0);
			}
			if(bestSdk == null && (sdkpricep == null || sdkpricep.size() <= 0)){
				continue;
			}
			
			if(sdkpricep != null && sdkpricep.size() >0){
				for(Sdkprice sp : sdkpricep){
					//重新对sdk返回对象进行组装
					Sdkjson ss = new Sdkjson();
					ss.setPrice(sp.getPrice());
					ss.setSdkid(Integer.valueOf(sp.getSdk().getSdkid()));
					sdkj.add(ss);
					sdkpriceidlist.add(sp.getId());
				}
			}
			
			if(bestSdk != null){
				Sdkjson ss = new Sdkjson();
				ss.setPrice(bestSdk.getPrice());
				ss.setSdkid(Integer.valueOf(bestSdk.getSdk().getSdkid()));
				sdkj.add(ss);
				sdkpriceidlist.add(bestSdk.getId());
			}
			
		}
		returnmap.put("sdklist", sdkj);
		returnmap.put("sdkpricelist", sdkpriceidlist);
		return returnmap;
	}
	
	/**
	 * 拼凑sdk
	 * @param sdkprice
	 * @param price
	 * @return
	 */
	private List<Sdkprice> pieceSdk(List<Sdkprice> sdkprice,Integer price){
		if(price <= 0 || sdkprice == null){
			return null;
		}
		List<Sdkprice> splist = new ArrayList<Sdkprice>();
		outfor://外层for 标记
		for(int i = 0; i < sdkprice.size(); i++){
			for(int n = i+1 ; n < sdkprice.size() ; n++){
				if(sdkprice.get(i).getPrice()+sdkprice.get(n).getPrice() == price){
					splist.add(sdkprice.get(i));
					splist.add(sdkprice.get(n));
					break outfor;
				}
			}
		}
		//如果拼凑两个sdk不能达到price值，即拼三
		if(splist.size() <= 0){
			outfor2:
				for(int j = 0; j < sdkprice.size(); j++){
					for(int k = j+1 ; k < sdkprice.size() ; k++){
						for(int l = k+1; l < sdkprice.size(); l++){
							if(sdkprice.get(j).getPrice()+sdkprice.get(k).getPrice()+sdkprice.get(l).getPrice() == price){
								splist.add(sdkprice.get(j));
								splist.add(sdkprice.get(k));
								splist.add(sdkprice.get(l));
								break outfor2;
							}
						}
					}
				}
		}
		return splist;
	}
	
	/**
	 * 获取被屏蔽的sdk id
	 * @param channelid
	 * @return
	 */
	private List<Integer> selectShieldsdk(Integer channelid){
		if(channelid == null || channelid <= 0){
			return null;
		}
		List<Integer> sdkidlist = new ArrayList<Integer>();
		List<Shieldsdk> slist = sdkService.getShieldsdk(channelid);
		if(slist == null){
			return null;
		}
		for(Shieldsdk s : slist){
			if(s == null){
				continue;
			}
			Sdk sdk = s.getSdk();
			if(sdk != null){
				sdkidlist.add(sdk.getId());
			}
		}
		return sdkidlist;
	}
	

}
