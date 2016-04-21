package com.mrkj.service;

import java.util.List;
import java.util.Map;

import com.mrkj.data.RequestData;
import com.mrkj.model.Requestlog;

public interface RequestlogService {

	Integer saveRequestlog(Requestlog r);
	
	List<RequestData> getRequestlog(Map<String,String> map);
}
