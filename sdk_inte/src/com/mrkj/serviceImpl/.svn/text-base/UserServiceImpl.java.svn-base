package com.mrkj.serviceImpl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Service;

import com.mrkj.dao.UserDao;
import com.mrkj.model.User;
import com.mrkj.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Resource
	private UserDao userDao;
	public User getUser(String name,String pwd){
		String hql = "from User where name =:name and pwd =:pwd";
		Session session = userDao.getSession();
		 Query query = session.createQuery(hql);
		 query.setString("name", name);
		 query.setString("pwd", pwd);
		 if(null != query){
			 List<User> users = query.list();
			 if(null != users && users.size() > 0){
				 session.close();
				 return users.get(0);
			 } 
		 }
		 session.close();
		return null;
	}
}
