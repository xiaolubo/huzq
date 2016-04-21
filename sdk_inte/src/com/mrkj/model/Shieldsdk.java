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
@Table(name = "t_shieldsdk" , catalog = "sdk_inte" )
public class Shieldsdk implements Serializable{

	private Integer id;
	private Channel channel;
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
	@JoinColumn(name = "channelId")
	public Channel getChannel() {
		return channel;
	}
	public void setChannel(Channel channel) {
		this.channel = channel;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "sdkId")
	public Sdk getSdk() {
		return sdk;
	}
	public void setSdk(Sdk sdk) {
		this.sdk = sdk;
	}
	
	
}
