package com.mrkj.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.mrkj.data.Appsdks;
import com.mrkj.model.Appsdkset;
import com.mrkj.model.Province;
import com.mrkj.model.Sdk;
import com.mrkj.util.HqlCallBack;

@Repository
public class AppsdksetDao extends BaseHibernateDao{

	
	public List<Appsdks> getAllAppsdks(int start,int pageSize,String hql){
		List<Appsdks> app  = this.getHibernateTemplate().executeFind(
				new HqlCallBack(hql.toString(), start, pageSize));
		return app;
	}
	
	public Long countAppsdks(String hql){
		return ((Long)this.getHibernateTemplate().find(hql).listIterator().next()).longValue();  
	}
	
	public Appsdkset getAppsdkset(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<Appsdkset> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct.get(0);
			 } 
		}
		session.close();
		return null;
	}
	
	public List<Sdk> getSdk(String hql){
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
