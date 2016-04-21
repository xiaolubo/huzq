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

import com.mrkj.model.Channel;
import com.mrkj.model.Operator;
import com.mrkj.model.Sdk;
import com.mrkj.model.Shieldsdk;
import com.mrkj.service.ChannelService;
import com.mrkj.util.CosUtil;

@Controller
public class ChannelAction {
	private final Log logger = LogFactory.getLog(ChannelAction.class);
	
	@Resource 
	private ChannelService chaService;
	
	@RequestMapping("/channel/getChannelTotal")
	public void getChannelTotal(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		List<Channel> chalist = chaService.getChannels();
		Long count = chaService.countChannel();
		JSONObject jo = new JSONObject ();
		jo.put("rows", chalist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	@RequestMapping("/channel/getChannel")
	public void getChannel(HttpServletRequest request, HttpServletResponse response, HttpSession session,
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
		List<Channel> chalist = chaService.getChannels(currentPage, pageSize);
		Long count = chaService.countChannel();
		JSONObject jo = new JSONObject ();
		jo.put("rows", chalist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	@RequestMapping("/channel/addChannel")
	public void addChannel(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String channelname = request.getParameter("channelname");
		Channel o = new Channel();
		o.setChannelname(channelname);
		Integer id = chaService.addChannel(o);
		JSONObject jo = new JSONObject ();
		if(id > 0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	@RequestMapping("/channel/updateChannel")
	public void updateChannel(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id = request.getParameter("id");
		String channelname = request.getParameter("channelname");
		Channel o = chaService.getChannelByid(Integer.valueOf(id));
		JSONObject jo = new JSONObject ();
		if(o != null){
			o.setChannelname(channelname);
			chaService.updateChannel(o);
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 删除
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/channel/delChannel")
	public void delChannel(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=chaService.deleteChannel(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 渠道屏蔽的SDK
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/channel/getShidldSdk")
	public void getShidldSdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
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
		List<Shieldsdk> chalist = chaService.getShieldSdk(currentPage, pageSize);
		Long count = chaService.countShieldSdk();
		JSONObject jo = new JSONObject ();
		jo.put("rows", chalist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	/**
	 * 增加屏蔽SDK
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/channel/chooseShieldsdk")
	public void chooseShieldsdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String channelid=request.getParameter("channel");
		String id=request.getParameter("sdkid");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		Integer rei = 0;
		for(int i=0;i<uidarr.length;i++){
			Integer sid = Integer.valueOf(uidarr[i]);
			Sdk sdk = new Sdk();
			sdk.setId(sid);
			Channel c = new Channel();
			c.setId(Integer.valueOf(channelid));
			Shieldsdk ss = new Shieldsdk();
			ss.setSdk(sdk);
			ss.setChannel(c);
			rei = chaService.addShieldsdk(ss);
		}
		if(rei > 0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
		
	}
	
	/**
	 * 取消屏蔽
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/channel/cancelshieldSdk")
	public void cancelshieldSdk(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=chaService.deleShieldSdk(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
	
}
