package com.mrkj.action;

import java.sql.Date;
import java.text.SimpleDateFormat;
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
import org.springframework.web.bind.annotation.RequestMapping;
import com.mrkj.model.User;
import com.mrkj.service.UserService;
import com.mrkj.util.CosUtil;

@Controller
public class UserAction {
	private final Log logger = LogFactory.getLog(UserAction.class);
	@Resource 
	private UserService userService;
	

	@RequestMapping("/user/getUser")
	public void gerUser(HttpServletRequest request, HttpServletResponse response, HttpSession session){
		String username = request.getParameter("username");
		String pwd = request.getParameter("password");
		User user = userService.getUser(username,pwd);
		JSONObject jo = new JSONObject ();
		if(null == user){
			jo.put("success", false);
			CosUtil.sendStr(response, jo.toString());
			return ;
		}
		session.setAttribute("admin", username);
		jo.put("success", true);
		CosUtil.sendStr(response, jo.toString());
	}
	
}

