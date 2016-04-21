package com.mrkj.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.mrkj.data.RequestData;
import com.mrkj.model.Requestlog;

@Repository
public class RequestlogDao extends BaseHibernateDao{

	public List<RequestData> getRequeslog(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<RequestData> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct;
			 } 
		}
		session.close();
		return null;
	}
}
