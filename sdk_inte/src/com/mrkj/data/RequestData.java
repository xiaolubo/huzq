package com.mrkj.data;

public class RequestData {

	private Long addtime;
	private String sdk;
	private String app;
	private String province;
	private String operator;
	private Long usercont;
	private Long requestcount;
	private Integer price;
	
	public RequestData(Long addtime,String sdk,String app,String province,String operator,Integer price,Long requescount,Long usercount){
		this.addtime = addtime;
		this.sdk = sdk;
		this.app = app;
		this.province = province;
		this.operator = operator;
		this.price = price;
		this.requestcount = requescount;
		this.usercont = usercount;
	}
	
//	public RequestData(Long addtime,String sdk,String app,String province,String operator,Long usercount,Long requescount,Integer price){
//		this.addtime = addtime;
//		this.sdk = sdk;
//		this.app = app;
//		this.province = province;
//		this.operator = operator;
//		this.usercont = usercount;
//		this.requestcount = requescount;
//		this.price = price;
//	}
	
	public Long getAddtime() {
		return addtime;
	}
	public void setAddtime(Long addtime) {
		this.addtime = addtime;
	}
	public String getSdk() {
		return sdk;
	}
	public void setSdk(String sdk) {
		this.sdk = sdk;
	}
	public String getApp() {
		return app;
	}
	public void setApp(String app) {
		this.app = app;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getOperator() {
		return operator;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	public Long getUsercont() {
		return usercont;
	}
	public void setUsercont(Long usercont) {
		this.usercont = usercont;
	}
	public Long getRequestcount() {
		return requestcount;
	}
	public void setRequestcount(Long requestcount) {
		this.requestcount = requestcount;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	
	
}
