package com.mrkj.serviceImpl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Service;

import com.mrkj.dao.AppDao;
import com.mrkj.dao.ApppriceDao;
import com.mrkj.dao.AppsdksetDao;
import com.mrkj.data.App;
import com.mrkj.data.Appsdks;
import com.mrkj.model.Appprice;
import com.mrkj.model.Appsdkset;
import com.mrkj.model.Sdk;
import com.mrkj.service.AppService;

@Service
public class AppServiceImpl implements AppService {

	@Resource
	private ApppriceDao apppriceDao;
	@Resource
	private AppDao aDap;
	@Resource
	private AppsdksetDao appsdkDao;
	
	public List<App> getAllApp(int currentPage,int pageSize){
//		String hql = "select a.app.id as id,a.app.name as name,a.channel.channelname as channel,a.price as price from Appprice a";
		String hql = "select new com.mrkj.data.App(a.id,a.app.name,a.channel.channelname,a.price) from Appprice a";
		List<App> ct  = (List<App>)apppriceDao.getAllAppByAppprice( (currentPage - 1) * pageSize, pageSize,hql);
		return ct;
	}
	
	public List<Appsdks> getAppsdk(int currentPage,int pageSize){
		String hql = "select new com.mrkj.data.Appsdks(a.id,a.app.name,a.sdk.sdkName) from Appsdkset a group by a.app.id";
		List<Appsdks> ct  = (List<Appsdks>)appsdkDao.getAllAppsdks( (currentPage - 1) * pageSize, pageSize,hql);
		return ct;
	}
	
	public Appsdkset getAppsdkset(int appid,int sdkid){
		String hql = "from Appsdkset a where a.app.id="+appid+" and a.sdk.id="+sdkid;
		Appsdkset ass = appsdkDao.getAppsdkset(hql);
		return ass;
	}
	
	public Long countAppsdkset(){
		String hql = "select count(*) from Appsdkset";
		return appsdkDao.countAppsdks(hql);
	}
	
	public List<Sdk> getAppsdk(Integer appid){
		String hql = "select new Sdk(a.sdk.id,a.sdk.sdkid,a.sdk.sdkName,a.sdk.isOpen) from Appsdkset a where a.app.id="+appid;
		List<Sdk> ct  = (List<Sdk>)appsdkDao.getSdk( hql);
		return ct;
	}
	
	public Integer addAppsdkset(Appsdkset a){
		return (Integer)appsdkDao.getHibernateTemplate().save(a);
	}
	
	public Long countAppprice(){
		String hql = "select count(*) from Appprice";
		return apppriceDao.countAppprice(hql);
	}
	
	public List<com.mrkj.model.App> getSingleApp(int currentPage,int pageSize){
		String hql = "from com.mrkj.model.App a";
		List<com.mrkj.model.App> ct  = (List<com.mrkj.model.App>)apppriceDao.getAllApp( (currentPage - 1) * pageSize, pageSize,hql);
		return ct;
	}
	
	public Long countApp(){
		String hql = "select count(*) from App";
		return apppriceDao.countAppprice(hql);
	}
	
	public Integer saveApp(com.mrkj.model.App app){
		return (Integer)apppriceDao.saveApp(app);
	}
	
	public com.mrkj.model.App getApp(String name){
		String hql = "from com.mrkj.model.App  where name = '"+name+"'";
		com.mrkj.model.App app = aDap.getApp(hql);
		return app;
	}
	
	public com.mrkj.model.App getAppByid(Integer id){
		String hql = "from com.mrkj.model.App  where id = "+id;
		com.mrkj.model.App app = aDap.getApp(hql);
		return app;
	}
	
	public Integer deleApp(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =aDap.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from App where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}
	
	public Integer deleAppprice(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =apppriceDao.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from Appprice where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}
	
	public Integer deleAppsdk(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =appsdkDao.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from Appsdkset where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}
	
	public void updateApp(com.mrkj.model.App app){
		aDap.getHibernateTemplate().update(app);
	}
	
	public Integer saveAppprice(Appprice ap){
		return (Integer)apppriceDao.getHibernateTemplate().save(ap);
	}
	
	public Appprice getApppriceByid(Integer id){
		String hql = "from Appprice where id = "+id;
		Appprice ap = apppriceDao.getAppprice(hql);
		return ap;
	}
	
	public void updateAppprice(Appprice ap){
		apppriceDao.getHibernateTemplate().update(ap);
	}
}
