package com.mrkj.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.mrkj.model.Sdk;

@Repository
public class SdkDao extends BaseHibernateDao{

	public Integer addSdk(Sdk sdk){
		return (Integer)this.getHibernateTemplate().save(sdk);
	}
	
	public Sdk getSdk(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<Sdk> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct.get(0);
			 } 
		}
		session.close();
		return null;
	}
	
	public List<Sdk> getALLSdk(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<Sdk> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct;
			 } 
		}
		session.close();
		return null;
	}
}
