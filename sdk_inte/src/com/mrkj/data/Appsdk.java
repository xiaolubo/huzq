package com.mrkj.data;

import java.util.List;

import com.mrkj.model.Sdk;

public class Appsdk {

	private Integer appid;
	private Integer price;//计费点
	private List<Sdkjson> sdks;
	public Integer getAppid() {
		return appid;
	}
	public void setAppid(Integer appid) {
		this.appid = appid;
	}
	public List<Sdkjson> getSdks() {
		return sdks;
	}
	public void setSdks(List<Sdkjson> sdks) {
		this.sdks = sdks;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	
	
}
