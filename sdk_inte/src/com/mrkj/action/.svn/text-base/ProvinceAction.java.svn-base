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

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mrkj.data.CheckProvince;
import com.mrkj.model.Channel;
import com.mrkj.model.Operator;
import com.mrkj.model.Province;
import com.mrkj.model.Sdk;
import com.mrkj.model.Sdkprice;
import com.mrkj.service.OperatorService;
import com.mrkj.service.ProvinceService;
import com.mrkj.service.SdkService;
import com.mrkj.util.CosUtil;

@Controller
public class ProvinceAction {

	@Resource 
	private ProvinceService pService;
	@Resource 
	private SdkService sdkService;
//	@Resource
//	private OperatorService oService;
	
	@RequestMapping("/province/getProvinceToTal")
	public void getProvinceToTal(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		List<Province> olist = pService.getProvinces();
		Long count = pService.countProvince();
		JSONObject jo = new JSONObject ();
		jo.put("rows", olist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	@RequestMapping("/province/getProvinceToTal2")
	public void getProvinceToTal2(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		//如:乐图,联通,400
		String val = request.getParameter("val");
		String pam[] = val.split(",");
		if(pam == null || pam.length <= 0){
			return;
		}
//		Sdk sdk = sdkService.getSdkByname(pam[0]);
//		Operator ope = oService.getOperator(pam[1]);
		Map<String,Object> map  = new HashMap<String,Object>();
		map.put("oName", pam[1]);
		map.put("sdkName", pam[0]);
		map.put("price", pam[2]);
		List<Sdkprice> selectPro = sdkService.getSdkpriceBysdkOpepri(map);
		//key province id,value  权重
		Map<Integer,String> promap = chooseProvince(selectPro);
		List<Province> olist = pService.getProvinces();
		if(promap == null){
			promap =new HashMap<Integer,String>();
		}
		List<CheckProvince> cplist = new ArrayList<CheckProvince>();
		for(int i=0;i<olist.size();i++){
			CheckProvince cp = new CheckProvince();
			Province temp = olist.get(i);
			if(temp == null){
				continue;
			}
			cp.setId(temp.getId());
			cp.setProvinceName(temp.getProvinceName());
			if(promap.containsKey(temp.getId())){
				if(promap.get(temp.getId()) != null && !"".equals(promap.get(temp.getId()))){
					cp.setCheck(true);
					cp.setLevel(Integer.valueOf(promap.get(temp.getId())));
				}else{
					cp.setCheck(false);
					cp.setLevel(0);
				}
			}else{
				cp.setCheck(false);
				cp.setLevel(0);
			}
			
			cplist.add(cp);
		}
		Long count = pService.countProvince();
		JSONObject jo = new JSONObject ();
		jo.put("rows", cplist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	private Map<Integer,String> chooseProvince(List<Sdkprice> selectPro){
		Map<Integer,String> map = new HashMap<Integer,String>();
		if(selectPro == null || selectPro.size() <= 0){
			return null;
		}
		for(Sdkprice sp : selectPro){
			if(sp == null){
				continue;
			}
			Province province = sp.getProvince();
			//开通了才收集
			if(province != null && sp.getIsshield() == 1){
				map.put(province.getId(),String.valueOf(sp.getLevel()));
			}
		}
		return map;
	}
	
	@RequestMapping("/province/getProvince")
	public void getProvince(HttpServletRequest request, HttpServletResponse response, HttpSession session,
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
		List<Province> olist = pService.getProvinces(currentPage, pageSize);
		Long count = pService.countProvince();
		JSONObject jo = new JSONObject ();
		jo.put("rows", olist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 删除
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/province/delProvince")
	public void delProvince(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=pService.deleteProvince(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	@RequestMapping("/province/addProvince")
	public void addProvince(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String provinceName = request.getParameter("provinceName");
		Province o = new Province();
		o.setProvinceName(provinceName);
		Integer id = pService.addProvince(o);
		JSONObject jo = new JSONObject();
		if(id > 0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	
	@RequestMapping("/province/updateProvince")
	public void updateProvince(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id = request.getParameter("id");
		String provinceName = request.getParameter("provinceName");
		Province o = pService.getProvinceByid(Integer.valueOf(id));
		JSONObject jo = new JSONObject ();
		if(o != null){
			o.setProvinceName(provinceName);
			pService.updateProvince(o);
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	
}
