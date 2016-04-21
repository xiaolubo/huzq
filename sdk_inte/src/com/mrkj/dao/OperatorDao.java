package com.mrkj.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import com.mrkj.model.Operator;
import com.mrkj.model.Sdk;
import com.mrkj.util.HqlCallBack;

@Repository
public class OperatorDao extends BaseHibernateDao{

	public List<Operator> getOperator(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<Operator> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct;
			 } 
		}
		session.close();
		return null;
	}
	
	public List<Operator> getOperator(int start,int pageSize,String hql){
		List<Operator> o  = this.getHibernateTemplate().executeFind(
				new HqlCallBack(hql.toString(), start, pageSize));
		return o;
	}
	
	public Long countOperator(String hql){
		return ((Long)this.getHibernateTemplate().find(hql).listIterator().next()).longValue();  
	}
	
	public Operator getOperatorByname(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<Operator> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct.get(0);
			 } 
		}
		session.close();
		return null;
	}
}
