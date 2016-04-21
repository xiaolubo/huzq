package com.mrkj.model;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_requestlog" , catalog = "sdk_inte" )
public class Requestlog {

	private int id;
	private App app;
	private Sdkprice sdkprice;
	private Long addtime;
	private String imsi;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "appid")
	public App getApp() {
		return app;
	}
	public void setApp(App app) {
		this.app = app;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "sdkpriceid")
	public Sdkprice getSdkprice() {
		return sdkprice;
	}
	public void setSdkprice(Sdkprice sdkprice) {
		this.sdkprice = sdkprice;
	}
	@Column(name = "addtime")
	public Long getAddtime() {
		return addtime;
	}
	public void setAddtime(Long addtime) {
		this.addtime = addtime;
	}
	
	@Column(name = "imsi")
	public String getImsi() {
		return imsi;
	}
	public void setImsi(String imsi) {
		this.imsi = imsi;
	}
	
	
	
}
