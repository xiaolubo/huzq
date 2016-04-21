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

import com.mrkj.data.Appsdks;
import com.mrkj.data.SdkBelongtoApp;
import com.mrkj.model.App;
import com.mrkj.model.Appsdkset;
import com.mrkj.model.Sdk;
import com.mrkj.service.AppService;
import com.mrkj.service.SdkService;
import com.mrkj.serviceImpl.SdkServiceImpl;
import com.mrkj.util.CosUtil;

@Controller
public class AppsdksetAction {

	@Resource 
	private AppService appService;
	
	@Resource 
	private SdkService sdkService;
	
	@RequestMapping("/appsdk/getAppsdkset")
	public void getAppsdkset(HttpServletRequest request, HttpServletResponse response, HttpSession session,
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
		Long appcount = appService.countAppsdkset();
		List<Appsdks> applist = appService.getAppsdk(currentPage, pageSize);
		JSONObject jo = new JSONObject ();
		jo.put("rows", applist);
		jo.put("totalCount", appcount);
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	@RequestMapping("/appsdk/changeAppSdkSet")
	public void changeAppSdkSet(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		// 1,2,
		String id=request.getParameter("id");
		String appname=request.getParameter("appname");
		JSONObject jo=new JSONObject();
		if(appname == null || "".equals(appname)){
			jo.put("success", false);
		}
		if(id == null || "".equals(id)){
			id = "0,";
		}
		//所选的sdk
		String ids[] = id.split(",");
		Map<Integer,Integer> idsmap = this.changeSdkidArrayToMap(ids);
		//所有的sdk
		List<Sdk> sdklist = sdkService.getAllSdk();
		if(sdklist == null || sdklist.size() <= 0){
			return;
		}
		App app  = appService.getApp(appname);
		if(app == null){
			return;
		}
		//此app已有的sdk
		List<Sdk> appsdk = appService.getAppsdk(app.getId());
		for(int i=0;i<sdklist.size();i++){
			Sdk s = sdklist.get(i);
			if(s == null){
				continue;
			}
			//已选,增加到用户appsdkset下
			Appsdkset ass = appService.getAppsdkset(app.getId(), s.getId());
			if(idsmap.containsKey(s.getId())){
				if(ass == null){
					ass = new Appsdkset();
					ass.setApp(app);
					ass.setSdk(s);
					appService.addAppsdkset(ass);
				}
			}else{
				//没选择，从appsdkset里删除
				if(ass != null){
					List<Integer> delids = new ArrayList<Integer>();
					delids.add(ass.getId());
					appService.deleAppsdk(delids);
				}
			}
		}
		jo.put("success", true);
		CosUtil.sendStr(response,jo.toString());
	}
	
	private Map<Integer,Integer> changeSdkidArrayToMap(String ids[]){
		Map<Integer,Integer> map = new HashMap<Integer,Integer>();
		if(ids == null || ids.length <= 0){
			return map;
		}
		for(int i=0;i<ids.length;i++){
			map.put(Integer.valueOf(ids[i]), Integer.valueOf(ids[i]));
		}
		return map;
	}
	
	@RequestMapping("/appsdk/getAppsdk")
	public void getAppsdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		//app名称
		String appname = request.getParameter("val");
		Long count = sdkService.countSdk();
		List<Sdk> sdklist = sdkService.getAllSdk();
		if(sdklist == null || sdklist.size() <= 0){
			return;
		}
		
		//根据appname获取此app所选的sdk
		App app  = appService.getApp(appname);
		if(app == null || app.getId() <= 0){
			return;
		}
		List<Sdk> choosesdklist = appService.getAppsdk(app.getId());
		Map<Integer,String> choosesdkmap = this.changeToMap(choosesdklist);
		
		List<SdkBelongtoApp> sbalist = new ArrayList<SdkBelongtoApp>();
		for(int i=0;i<sdklist.size();i++){
			Sdk sdk = sdklist.get(i);
			if(sdk == null){
				continue;
			}
			SdkBelongtoApp sba = new SdkBelongtoApp();
			sba.setId(sdk.getId());
			sba.setSdkname(sdk.getSdkName());
			//判断此sdk是否已被选
			if(choosesdkmap.containsKey(sdk.getId())){
				sba.setCheck(true);
			}else{
				sba.setCheck(false);
			}
			sbalist.add(sba);
		}
		JSONObject jo = new JSONObject ();
		jo.put("rows", sbalist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
		
	}
	
	private Map<Integer,String> changeToMap(List<Sdk> choosesdklist){
		Map<Integer,String> map = new HashMap<Integer,String>();
		if(choosesdklist == null || choosesdklist.size() <= 0){
			return map;
		}
		for(Sdk s : choosesdklist){
			if(s == null){
				continue;
			}
			map.put(s.getId(), s.getSdkName());
		}
		return map;
	}
	
	@RequestMapping("/appsdk/chooseAppsdk")
	public void chooseAppsdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String sdkid = request.getParameter("sdkid");
		String app = request.getParameter("app");
		JSONObject jo = new JSONObject ();
		if(sdkid == null || "".equals(sdkid)){
			jo.put("success", false);
		}
		if(app == null || "".equals(app)){
			jo.put("success", false);
		}
		String ids[] = sdkid.split(",");
		int res = 0;
		for(int i = 0;i<ids.length;i++){
			App a = new App();
			a.setId(Integer.valueOf(app));
			Sdk s =  new Sdk();
			s.setId(Integer.valueOf(ids[i]));
			Appsdkset ass = new Appsdkset();
			ass.setApp(a);
			ass.setSdk(s);
			res = appService.addAppsdkset(ass);
			//addAppsdkset
		}
		if(res > 0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
		
	}
	
	@RequestMapping("/appsdk/delAppsdkset")
	public void delAppsdkset(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=appService.deleAppsdk(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
}
