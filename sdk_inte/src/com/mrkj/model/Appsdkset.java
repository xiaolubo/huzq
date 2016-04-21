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
@Table(name = "t_appsdkset" , catalog = "sdk_inte" )
public class Appsdkset {

	private Integer id;
	private App app;
	private Sdk sdk;
	

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
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
	@JoinColumn(name = "sdkid")
	public Sdk getSdk() {
		return sdk;
	}
	public void setSdk(Sdk sdk) {
		this.sdk = sdk;
	}

	
}
