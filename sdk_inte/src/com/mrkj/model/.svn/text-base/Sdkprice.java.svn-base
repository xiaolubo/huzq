package com.mrkj.model;

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "t_sdkprice" , catalog = "sdk_inte" )
public class Sdkprice implements Serializable{
	
	private Integer id;
	private Sdk sdk;
	private Operator operator;
	private Province province;
	private Integer price;
	private Integer level;
	private Integer isshield;
	
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
	@JoinColumn(name = "sdkId")
	public Sdk getSdk() {
		return sdk;
	}
	public void setSdk(Sdk sdk) {
		this.sdk = sdk;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "operatorId")
	public Operator getOperator() {
		return operator;
	}
	public void setOperator(Operator operator) {
		this.operator = operator;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "provinceId")
	public Province getProvince() {
		return province;
	}
	public void setProvince(Province province) {
		this.province = province;
	}
	
	@Column(name = "price")
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	
	@Column(name = "level")
	public Integer getLevel() {
		return level;
	}
	public void setLevel(Integer level) {
		this.level = level;
	}
	
	@Column(name = "isshield")
	public Integer getIsshield() {
		return isshield;
	}
	public void setIsshield(Integer isshield) {
		this.isshield = isshield;
	}
	
	
	
}
