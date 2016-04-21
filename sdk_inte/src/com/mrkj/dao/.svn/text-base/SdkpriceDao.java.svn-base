package com.mrkj.dao;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.mrkj.data.App;
import com.mrkj.model.Appprice;
import com.mrkj.model.Sdk;
import com.mrkj.model.Sdkprice;
import com.mrkj.util.HqlCallBack;

@Repository
public class SdkpriceDao extends BaseHibernateDao{

	public List<Sdkprice> getSdkprice(String hql , Map<String,Object> map){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(map != null){
			Iterator it = map.entrySet().iterator();
			while (it.hasNext()) {
				   Map.Entry entry = (Map.Entry) it.next();
				   Object key = entry.getKey();
				   Object value = entry.getValue();
				   if(value instanceof List	){
					   query.setParameterList(key.toString(), (List<Integer>)value);
				   }else if(value instanceof String){
					   query.setString(key.toString(), value.toString());
				   }
		    }
		}
		if(null != query){
			List<Sdkprice> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct;
			 } 
		}
		session.close();
		return null;
	}
	
	
	public List<com.mrkj.data.Sdkprice> getAllAppByAppprice(int start,int pageSize,String hql){
		List<com.mrkj.data.Sdkprice> sdk  = this.getHibernateTemplate().executeFind(
				new HqlCallBack(hql.toString(), start, pageSize));
		return sdk;
	}
	
	public Long countSdkprice(String hql){
		return ((Long)this.getHibernateTemplate().find(hql).listIterator().next()).longValue();  
	}
	
	public List<Sdk> getSdk(int start,int pageSize,String hql){
		List<Sdk> sdk  = this.getHibernateTemplate().executeFind(
				new HqlCallBack(hql.toString(), start, pageSize));
		return sdk;
	}
	
	
	
	public Long countSdk(String hql){
		return ((Long)this.getHibernateTemplate().find(hql).listIterator().next()).longValue();  
	}
	
	public Sdkprice getSdkpriceByid(String hql){
		Session session  = this.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<Sdkprice> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct.get(0);
			 } 
		}
		session.close();
		return null;
	}
}
