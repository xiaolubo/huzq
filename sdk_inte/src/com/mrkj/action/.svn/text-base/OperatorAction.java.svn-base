package com.mrkj.action;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mrkj.model.Operator;
import com.mrkj.service.OperatorService;
import com.mrkj.util.CosUtil;

@Controller
public class OperatorAction {

	@Resource 
	private OperatorService oService;
	
	@RequestMapping("/operator/getOperator")
	public void getOperator(HttpServletRequest request, HttpServletResponse response, HttpSession session,
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
		List<Operator> olist = oService.getOperators(currentPage, pageSize);
		Long count = oService.countOperator();
		JSONObject jo = new JSONObject ();
		jo.put("rows", olist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	@RequestMapping("/operator/getOperatorTotal")
	public void getOperatorTotal(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		List<Operator> olist = oService.getOperators();
		Long count = oService.countOperator();
		JSONObject jo = new JSONObject ();
		jo.put("rows", olist);
		jo.put("totalCount", count);
		CosUtil.sendStr(response,jo.toString());
	}
	
	
	
	@RequestMapping("/operator/addOperator")
	public void addOperator(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String operatorname = request.getParameter("operatorname");
		Operator o = new Operator();
		o.setOperatorName(operatorname);
		Integer id = oService.addOperator(o);
		JSONObject jo = new JSONObject ();
		if(id > 0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
		
	}
	
	/**
	 * 更新operator
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 */
	@RequestMapping("/operator/updateOperator")
	public void updateOperator(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id = request.getParameter("id");
		String operatorname = request.getParameter("operatorname");
		Operator o = oService.getOperatorByid(Integer.valueOf(id));
		JSONObject jo = new JSONObject ();
		if(o != null){
			o.setOperatorName(operatorname);
			oService.updateOperator(o);
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
	@RequestMapping("/operator/delOperator")
	public void delOperator(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String id=request.getParameter("id");
		String [] uidarr=id.split(",");
		JSONObject jo=new JSONObject();
		List<Integer> ids=new ArrayList<Integer>();
		for(int i=0;i<uidarr.length;i++){
			ids.add(Integer.valueOf(uidarr[i]));
		}
		Integer result=0;
		result=oService.deleteOperator(ids);
		if(result!=0){
			jo.put("success", true);
		}else{
			jo.put("success", false);
		}
		CosUtil.sendStr(response,jo.toString());
	}
}
