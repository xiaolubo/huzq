package com.mrkj.serviceImpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Service;

import com.mrkj.dao.ApppriceDao;
import com.mrkj.dao.SdkDao;
import com.mrkj.dao.SdkpriceDao;
import com.mrkj.model.Appprice;
import com.mrkj.model.Channel;
import com.mrkj.model.Province;
import com.mrkj.model.Sdk;
import com.mrkj.model.Sdkprice;
import com.mrkj.model.Shieldsdk;
import com.mrkj.service.SdkService;

@Service
public class SdkServiceImpl implements SdkService {
	@Resource
	private ApppriceDao apppriceDao;
	@Resource
	private SdkpriceDao sdkpriceDao;
	@Resource
	private SdkDao sdkDao;
	
	public List<Appprice> getAppprice(Integer appid){
		String hql = "from Appprice where appId="+appid;
		Session session  = apppriceDao.getSession();
		Query query = session.createQuery(hql);
		if(null != query){
			List<Appprice> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				 return ct;
			 } 
		}
		session.close();
		return null;
	}
	
	public Province getProvince(String provincename){
		String hql = "from Province where provinceName like :name";
		Session session  = apppriceDao.getSession();
		Query query = session.createQuery(hql);
		query.setString("name", "%" + provincename + "%");
		if(null != query){
			List<Province> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct.get(0);
			 } 
		}
		session.close();
		return null;
	}
	
	public Channel getChannel(String channelname){
		String hql = "from Channel where channelname like :name";
		Session session  = apppriceDao.getSession();
		Query query = session.createQuery(hql);
		query.setString("name", "%" + channelname + "%");
		if(null != query){
			List<Channel> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct.get(0);
			 } 
		}
		session.close();
		return null;
	}
	
	public List<Sdkprice> getSdkprice(Map<String,Object> map){
		//s.isshield = 0 是针对于某个sdk计费点 1为没有屏蔽  0为已屏蔽
		//s.sdk.isOpen = 1 是针对于某个sdk,整个sdk
		String hql = "from Sdkprice s where s.operator.operatorName = :oName and s.province.provinceName like :pName and s.price = :price " +
				" and s.sdk.isOpen = 1 and s.isshield = 1 and s.sdk.id not in (:shieldsdkid)  order by s.level desc";
		Session session  = apppriceDao.getSession();
		Query query = session.createQuery(hql);
		query.setString("oName", map.get("oName").toString());
		query.setString("pName", "%" + map.get("pName").toString() + "%");
		query.setString("price", map.get("price").toString());
		query.setParameterList("shieldsdkid", (List<Integer>)map.get("shieldsdkid"));
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
	
	public List<Shieldsdk> getShieldsdk(Integer channelid){
		String hql = "from Shieldsdk s where s.channel.id = :channelid";
		Session session  = apppriceDao.getSession();
		Query query = session.createQuery(hql);
		query.setInteger("channelid", channelid);
		if(null != query){
			List<Shieldsdk> ct =  query.list();
			if(null != ct && ct.size() > 0){
				session.close();
				return ct;
			 } 
		}
		session.close();
		return null;
	}
	
	public List<Sdkprice> getSdkpriceBysdkOpepri(Map<String,Object> map){
		String hql = "from Sdkprice s where s.operator.operatorName = :oName " +
		" and s.sdk.sdkName = :sdkName and s.price = :price";
		Session session  = apppriceDao.getSession();
		Query query = session.createQuery(hql);
		query.setString("oName", map.get("oName").toString());
		query.setString("sdkName", map.get("sdkName").toString());
		query.setString("price", map.get("price").toString());
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
	
	public Sdkprice getSingleSdkprice(Map<String,Object> map){
		String hql = "from Sdkprice s where s.operator.operatorName = :oName " +
		" and s.sdk.sdkName = :sdkName and s.price = :price and s.province.provinceName = :pName";
		Session session  = apppriceDao.getSession();
		Query query = session.createQuery(hql);
		query.setString("oName", map.get("oName").toString());
		query.setString("sdkName", map.get("sdkName").toString());
		query.setString("price", map.get("price").toString());
		query.setString("pName", map.get("pName").toString());
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
	
	public List<Sdkprice> pieceSdkprice(Map<String,Object> map){
		String hql = "from Sdkprice s where s.operator.operatorName = :oName and s.province.provinceName like :pName " +
				" and s.sdk.isOpen = 1 and s.sdk.id not in (:shieldsdkid) order by s.level desc";
		Session session  = apppriceDao.getSession();
		Query query = session.createQuery(hql);
		query.setString("oName", map.get("oName").toString());
		query.setString("pName", "%" + map.get("pName").toString() + "%");
		query.setParameterList("shieldsdkid", (List<Integer>)map.get("shieldsdkid"));
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
	
	public List<com.mrkj.data.Sdkprice> getSdkprice(int currentPage,int pageSize,Map<String,String> map){
		String hql = "select new com.mrkj.data.Sdkprice(s.id,s.sdk.sdkName,s.operator.operatorName," +
				"s.province.provinceName,s.price,s.level,s.isshield) from Sdkprice s where 1=1";
		if(map != null && !StringUtils.isEmpty(map.get("sdkname"))){
			hql += " and s.sdk.sdkName like '%"+map.get("sdkname")+"%'";
		}
		if(map != null && !StringUtils.isEmpty(map.get("operator"))){
			hql += " and s.operator.id = "+map.get("operator");
		}
		if(map != null && !StringUtils.isEmpty(map.get("price"))){
			hql += " and s.price = "+map.get("price");
		}
		
		hql += " group by s.sdk.sdkName,s.operator.operatorName,s.price";
		List<com.mrkj.data.Sdkprice> sdkprice = this.sdkpriceDao.getAllAppByAppprice( (currentPage - 1) * pageSize, pageSize,hql);
		return sdkprice;
	}
	
	public Long countSdkprice(){
		String hql = "select count(*) from Sdkprice";
		return sdkpriceDao.countSdkprice(hql);
	}
	
	
	public List<Sdk> getSdk(int currentPage,int pageSize){
		String hql = "from Sdk s ";
		List<Sdk> sdks = sdkpriceDao.getSdk((currentPage - 1) * pageSize, pageSize, hql);
		return sdks;
	}
	
	public List<Sdk> getAllSdk(){
		String hql = "from Sdk s ";
		List<Sdk> sdks = sdkDao.getALLSdk(hql);
		return sdks;
	}
	
	
	
	public Long countSdk(){
		String hql = "select count(*) from Sdk";
		return sdkpriceDao.countSdk(hql);
	}
	
	public Integer addSdk(Sdk sdk){
		return (Integer)this.sdkDao.addSdk(sdk);
	}
	
	public Sdk getSdk(String sdkid){
		String hql = "from Sdk  where sdkid = '"+sdkid+"'";
		Sdk sdk = sdkDao.getSdk(hql);
		return sdk;
	}
	
	public Sdk getSdkByname(String name){
		String hql = "from Sdk  where sdkName = '"+name+"'";
		Sdk sdk = sdkDao.getSdk(hql);
		return sdk;
	}
	
	public Integer deleteSdk(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =sdkDao.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from Sdk where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}
	
	
	public Sdk getSdkByid(Integer id){
		String hql = "from Sdk  where id = '"+id+"'";
		Sdk sdk = sdkDao.getSdk(hql);
		return sdk;
	}
	
	public void updateSdk(Sdk sdk){
		sdkDao.getHibernateTemplate().update(sdk);
	}
	
	public Integer saveSdkprice(Sdkprice sp){
		return (Integer)sdkpriceDao.getHibernateTemplate().save(sp);
	}
	
	public Sdkprice getSdkpriceByid(Integer id){
		String hql = "from Sdkprice where id = "+id;
		Sdkprice sp = sdkpriceDao.getSdkpriceByid(hql);
		return sp;
	}
	
	public void updateSdkpirce(Sdkprice s){
		sdkpriceDao.getHibernateTemplate().update(s);
	}
	
	public Integer deleSdkprice(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =sdkpriceDao.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from Sdkprice where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}
}
