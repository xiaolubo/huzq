package com.mrkj.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.mrkj.data.RequestData;
import com.mrkj.model.Requestlog;
import com.mrkj.service.RequestlogService;
import com.mrkj.util.CosUtil;

@Controller
public class RequestAction {
	private final Log logger = LogFactory.getLog(RequestAction.class);
	
	@Resource 
	private RequestlogService rService;
	
	@RequestMapping("/request/statisticsRequest") 
	public void statisticsRequest(HttpServletRequest request, HttpServletResponse response, HttpSession session,
			Model model) {
		String start_addtime = request.getParameter("start_addtime");
		String end_addtime = request.getParameter("end_addtime");
		Date as = new Date(new Date().getTime()-24*60*60*1000);
		  SimpleDateFormat matter1 = new SimpleDateFormat("yyyy-MM-dd");
		  String time = matter1.format(as);
		if(start_addtime != null && start_addtime.contains("T")){
			start_addtime = start_addtime.replace("T", " ");
		}else{
			start_addtime = time+" 00:00:00";
		}
		if(end_addtime != null && end_addtime.contains("T")){
			end_addtime = end_addtime.replace("T", " ");
		}else{
			end_addtime = time+" 00:00:00";
		}
		String app = request.getParameter("app");
		String operator = request.getParameter("operator");
		String province = request.getParameter("province");
		String sdk = request.getParameter("sdk");
		String filter = request.getParameter("filter");
		String userfilty  = request.getParameter("userfilty");
		Map<String,String> map = new HashMap<String,String>();
		map.put("start_addtime", start_addtime);
		map.put("end_addtime", end_addtime);
		map.put("app", app);
		map.put("operator", operator);
		map.put("province", province);
		map.put("sdk", sdk);
		map.put("filter", filter);
		map.put("userfilty", userfilty);
		List<RequestData> rllist = rService.getRequestlog(map);
		JSONObject jo = new JSONObject ();
		jo.put("rows", rllist);
		jo.put("totalCount", 2222);
		CosUtil.sendStr(response,jo.toString());
	}
}
