package com.mrkj.service;

import java.util.List;

import com.mrkj.model.Channel;
import com.mrkj.model.Operator;
import com.mrkj.model.Shieldsdk;

public interface ChannelService {

	List<Channel> getChannels();
	
	Long countChannel();
	
	Channel getChannel(String name);
	
	List<Channel> getChannels(Integer start ,Integer limit);
	
	Integer addChannel(Channel o);
	
	void updateChannel(Channel o);
	
	Channel getChannelByid(Integer id);
	
	Integer deleteChannel(List<Integer> idlist);
	
	Long countShieldSdk();
	
	List<Shieldsdk> getShieldSdk(int start,int pageSize);
	
	Integer addShieldsdk(Shieldsdk s);
	
	Integer deleShieldSdk(List<Integer> idlist);
}
