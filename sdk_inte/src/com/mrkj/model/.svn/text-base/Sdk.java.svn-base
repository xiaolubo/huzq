package com.mrkj.model;

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_sdk" , catalog = "sdk_inte" )
public class Sdk  implements Serializable{

	private Integer id;
	private String sdkid;
	private String sdkName;
	private Integer isOpen;
	
	public Sdk(){
		
	}
	
	public Sdk(Integer id,String sdkid,String sdkName,Integer isOpen){
		this.id= id;
		this.sdkid = sdkid;
		this.sdkName = sdkName;
		this.isOpen = isOpen;
		
	}
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name = "sdkId")
	public String getSdkid() {
		return sdkid;
	}
	public void setSdkid(String sdkid) {
		this.sdkid = sdkid;
	}
	
	@Column(name = "sdkName")
	public String getSdkName() {
		return sdkName;
	}
	public void setSdkName(String sdkName) {
		this.sdkName = sdkName;
	}
	
	@Column(name = "isOpen")
	public Integer getIsOpen() {
		return isOpen;
	}
	public void setIsOpen(Integer isOpen) {
		this.isOpen = isOpen;
	}
	
	
	
}
