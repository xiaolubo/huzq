package com.mrkj.action;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mrkj.data.App;
import com.mrkj.model.Appprice;
import com.mrkj.model.Channel;
import com.mrkj.service.AppService;
import com.mrkj.service.ChannelService;
import com.mrkj.util.CosUtil;

@Controller
public class AppAction {
	private final Log logger = LogFactory.getLog(AppAction.class);
	
	@Resource 
	private AppService appService;
	@Resource 
	private ChannelService chService;
	
	@RequestMapping("/app/getAllApp") 
	public void getApp(HttpServletRequest request, HttpServletResponse response, HttpSession session,
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
		Long appcount = appService.countAppprice();
		List<App> applist = appService.getAllApp(currentPage, pageSize);
		JSONObject jo = new JSONObject ();
		jo.put("rows", applist);
		jo.put("totalCount", appcount);
		CosUtil.sendStr(response,jo.toString());
	}
	
	@RequestMapping("/app/getSingleApp")
	public void getSingleApp(HttpServletRequest request, HttpServletResponse response, HttpSession session,
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
		Long count = appService.countApp();
		List<com.mrkj.model.App> apps = appService.getSingleApp(currentPage, pageSize);
		JSONObject jo = new JSONObject ();
		jo.put("rows", apps);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	@RequestMapping("/app/addApp")
	public void addApp(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		JSONObject jo = new JSONObject ();
		try{
			String appname = request.getParameter("appname");
			com.mrkj.model.App app = null;
			app = appService.getApp(appname);
			
			if(app == null ){
				app = new com.mrkj.model.App();
				app.setName(appname);
				Integer i = appService.saveApp(app);
				if(i > 0){
				   jo.put("success", true);
				   CosUtil.sendStr(response,jo.toString());
				}else{
					jo.put("success", false);
					CosUtil.sendStr(response,jo.toString());
				}
			}else{
				jo.put("success", false);
				jo.put("msg", "app已存在");
				CosUtil.sendStr(response,jo.toString());
			}
			
		}catch(Exception e){
			jo.put("success", false);
			CosUtil.sendStr(response,jo.toString());
			logger.error(CosUtil.getTrace(e));
		}
		
	}
	
	@RequestMapping("/app/delApp")
	public void delApp(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=appService.deleApp(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	@RequestMapping("/app/updateApp")
	public void updateApp(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String name=request.getParameter("appname");
		com.mrkj.model.App app =null;
		app = appService.getAppByid(Integer.valueOf(id));
		app.setName(name);
		appService.updateApp(app);
		JSONObject jo=new JSONObject();
		jo.put("success", true);
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	/**
	 * 增加app计费点
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/app/addAppprice")
	public void addAppprice(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String appid=request.getParameter("app");
		String channelid=request.getParameter("channel");
		String price=request.getParameter("price");
		Appprice ap = new Appprice();
		com.mrkj.model.App app = new com.mrkj.model.App();
		app.setId(Integer.valueOf(appid));
		Channel ch = new Channel();
		ch.setId(Integer.valueOf(channelid));
		ap.setApp(app);
		ap.setChannel(ch);
		ap.setPrice(Integer.valueOf(price));
		Integer i = appService.saveAppprice(ap);
		JSONObject jo=new JSONObject();
		if(i > 0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 更新appprice
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/app/updateAppprice")
	public void updateAppprice(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String app=request.getParameter("app");
		String channel=request.getParameter("channel");
		String price=request.getParameter("price");
		Integer appid = 0;
		Integer channelid = 0;
		if(!CosUtil.isNumeric(app)){
			com.mrkj.model.App a = appService.getApp(app);
			if(a != null){
				appid = a.getId();
			}
		}else{
			appid = Integer.valueOf(app);
		}
		if(!CosUtil.isNumeric(channel)){
			Channel ch = chService.getChannel(channel);
			if(ch != null){
				channelid = ch.getId();
			}
		}else{
			channelid = Integer.valueOf(channel);
		}
		Appprice ap = appService.getApppriceByid(Integer.valueOf(id));
		JSONObject jo=new JSONObject();
		if(ap != null){
			com.mrkj.model.App a = new com.mrkj.model.App();
			a.setId(appid);
			Channel ch = new Channel();
			ch.setId(channelid);
			ap.setApp(a);
			ap.setChannel(ch);
			ap.setPrice(Integer.valueOf(price));
			appService.updateAppprice(ap);
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	@RequestMapping("/app/delAppprice")
	public void delAppprice(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=appService.deleAppprice(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
}
