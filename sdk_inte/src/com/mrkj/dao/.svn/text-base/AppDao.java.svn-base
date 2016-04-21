package com.mrkj.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

@Repository
public class AppDao extends BaseHibernateDao{

	public com.mrkj.model.App getApp(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<com.mrkj.model.App> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct.get(0);
			 } 
		}
		session.close();
		return null;
	}
}
