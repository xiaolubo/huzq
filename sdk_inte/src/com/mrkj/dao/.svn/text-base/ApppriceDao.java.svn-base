package com.mrkj.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.mrkj.data.App;
import com.mrkj.model.Appprice;
import com.mrkj.model.Province;
import com.mrkj.util.HqlCallBack;


@Repository
public class ApppriceDao  extends BaseHibernateDao{

	public List<App> getAllAppByAppprice(int start,int pageSize,String hql){
		List<App> app  = this.getHibernateTemplate().executeFind(
				new HqlCallBack(hql.toString(), start, pageSize));
		return app;
	}
	
	public Long countAppprice(String hql){
		return ((Long)this.getHibernateTemplate().find(hql).listIterator().next()).longValue();  
	}
	
	public List<com.mrkj.model.App> getAllApp(int start,int pageSize,String hql){
		List<com.mrkj.model.App> app  = this.getHibernateTemplate().executeFind(
				new HqlCallBack(hql.toString(), start, pageSize));
		return app;
	}
	
	public Integer saveApp(com.mrkj.model.App a){
		return (Integer)this.getHibernateTemplate().save(a);
	}
	
	public Appprice getAppprice(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<Appprice> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct.get(0);
			 } 
		}
		session.close();
		return null;
	}
	
	
}
