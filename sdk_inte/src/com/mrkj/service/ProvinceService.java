package com.mrkj.service;

import java.util.List;

import com.mrkj.model.Channel;
import com.mrkj.model.Province;

public interface ProvinceService {

	
	List<Province> getProvinces();
	
	Long countProvince();
	
	Province getProvince(String name);
	
	List<Province> getProvinces(Integer start ,Integer limit);
	
	Integer addProvince(Province o);
	
	void updateProvince(Province o);
	
	Province getProvinceByid(Integer id);
	
	Integer deleteProvince(List<Integer> idlist);
}
