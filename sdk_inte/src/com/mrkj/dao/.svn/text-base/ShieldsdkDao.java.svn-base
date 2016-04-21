package com.mrkj.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mrkj.model.Shieldsdk;
import com.mrkj.util.HqlCallBack;

@Repository
public class ShieldsdkDao  extends BaseHibernateDao{

	public Long countShieldSdk(String hql){
		return ((Long)this.getHibernateTemplate().find(hql).listIterator().next()).longValue();  
	}
	
	
	public List<Shieldsdk> getAllShieldsdk(int start,int pageSize,String hql){
		List<Shieldsdk> sdk  = this.getHibernateTemplate().executeFind(
				new HqlCallBack(hql.toString(), start, pageSize));
		return sdk;
	}
}
