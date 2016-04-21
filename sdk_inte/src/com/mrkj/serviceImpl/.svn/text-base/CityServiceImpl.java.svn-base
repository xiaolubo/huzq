package com.mrkj.serviceImpl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mrkj.dao.CityDao;
import com.mrkj.model.City;
import com.mrkj.service.CityService;

@Service
public class CityServiceImpl implements CityService {

	@Resource
	private CityDao cDao;
	
	public City getCity(String code) {
		String hql = "from City c where c.code='"+code+"'";
		City c = cDao.getCityBycode(hql);
		return c;
	}

}
