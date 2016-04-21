package com.mrkj.serviceImpl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mrkj.dao.ProvincecodeDao;
import com.mrkj.model.Provincecode;
import com.mrkj.service.ProvincecodeService;

@Service
public class ProvincecodeServiceImpl implements ProvincecodeService {

	@Resource
	private ProvincecodeDao pDao;
	
	public Provincecode getProvincecode(String code,String operator){
		String hql = "from Provincecode p where p.code='"+code+"' and p.operator='"+operator+"'";
		Provincecode pc = pDao.getProvincecodeBycode(hql);
		return pc;
	}
}
