package com.mrkj.service;

import java.util.List;

import com.mrkj.data.App;
import com.mrkj.data.Appsdks;
import com.mrkj.model.Appprice;
import com.mrkj.model.Appsdkset;
import com.mrkj.model.Sdk;

public interface AppService {

	List<App> getAllApp(int currentPage,int pageSize);
	
	Long countAppprice();
	
	List<Appsdks> getAppsdk(int currentPage,int pageSize);
	
	Long countAppsdkset();
	
	List<com.mrkj.model.App> getSingleApp(int currentPage,int pageSize);
	
	Long countApp();
	
	Integer saveApp(com.mrkj.model.App app);
	
	com.mrkj.model.App getApp(String name);
	
	com.mrkj.model.App getAppByid(Integer id);
	
	Integer deleApp(List<Integer> idlist);
	
	Integer deleAppprice(List<Integer> idlist);
	
	void updateApp(com.mrkj.model.App app);
	
	Integer saveAppprice(Appprice ap);
	
	Appprice getApppriceByid(Integer id);
	
	void updateAppprice(Appprice ap);
	
	Integer addAppsdkset(Appsdkset a);
	
	Integer deleAppsdk(List<Integer> idlist);
	
	List<Sdk> getAppsdk(Integer appid);
	
	
	Appsdkset getAppsdkset(int appid,int sdkid);
}
