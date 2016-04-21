package com.mrkj.data;

public class ChshieldSdk {

	private Integer id;
	private String channelname;
	private String sdkid;
	private String sdkname;
	
	public ChshieldSdk(Integer id,String ch,String sk,String sdkname){
		this.id = id;
		this.channelname =ch;
		this.sdkid = sk;
		this.sdkname = sdkname;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getChannelname() {
		return channelname;
	}
	public void setChannelname(String channelname) {
		this.channelname = channelname;
	}
	
	public String getSdkid() {
		return sdkid;
	}

	public void setSdkid(String sdkid) {
		this.sdkid = sdkid;
	}

	public String getSdkname() {
		return sdkname;
	}
	public void setSdkname(String sdkname) {
		this.sdkname = sdkname;
	}
	
	
}
