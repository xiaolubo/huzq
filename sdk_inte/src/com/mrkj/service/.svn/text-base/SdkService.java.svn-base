package com.mrkj.service;

import java.util.List;
import java.util.Map;

import com.mrkj.model.Appprice;
import com.mrkj.model.Channel;
import com.mrkj.model.Province;
import com.mrkj.model.Sdk;
import com.mrkj.model.Sdkprice;
import com.mrkj.model.Shieldsdk;

public interface SdkService {

	List<Appprice> getAppprice(Integer appid);
	
	Province getProvince(String provincename);
	
	Channel getChannel(String channelname);
	
	List<Sdkprice> getSdkprice(Map<String,Object> map);
	
	List<Sdkprice> getSdkpriceBysdkOpepri(Map<String,Object> map);
	
	List<Shieldsdk> getShieldsdk(Integer channelid);
	
	List<com.mrkj.data.Sdkprice> getSdkprice(int currentPage,int pageSize,Map<String,String> map);
	
	Long countSdkprice();
	
	List<Sdk> getSdk(int currentPage,int pageSize);
	
	Long countSdk();
	
	Integer addSdk(Sdk sdk);
	
	Sdk getSdk(String sdkid);
	
	 Sdk getSdkByname(String name);
	
	Sdk getSdkByid(Integer id);
	
	void updateSdk(Sdk sdk);
	
	Integer deleteSdk(List<Integer> idlist);
	
	Integer saveSdkprice(Sdkprice sp);
	
	Sdkprice getSdkpriceByid(Integer id);
	
	void updateSdkpirce(Sdkprice s);
	
	Integer deleSdkprice(List<Integer> idlist);
	
	Sdkprice getSingleSdkprice(Map<String,Object> map);
	
	List<Sdk> getAllSdk();
}
