package com.mrkj.serviceImpl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Service;

import com.mrkj.dao.ProvinceDao;
import com.mrkj.model.Channel;
import com.mrkj.model.Operator;
import com.mrkj.model.Province;
import com.mrkj.service.ProvinceService;

@Service
public class ProvinceServiceImpl implements ProvinceService {

	@Resource
	private ProvinceDao pDao;
	
	public Long countProvince() {
		String hql = "select count(*) from Province";
		Long count = pDao.countProvince(hql);
		return count;
	}

	public Province getProvince(String name) {
		String hql = "from Province where provinceName = '"+name+"'";
		Province o = pDao.getProvinceByname(hql);
		return o;
	}

	public List<Province> getProvinces() {
		String hql = "from Province";
		List<Province> olist = pDao.getProvince(hql);
		return olist;
	}
	
	
	public List<Province> getProvinces(Integer currentPage ,Integer pageSize){
		String hql = " from Province s ";
		List<Province> plist = this.pDao.getOperator( (currentPage - 1) * pageSize, pageSize,hql);
		return plist;
	}
	
	public Integer addProvince(Province o){
		return (Integer)pDao.getHibernateTemplate().save(o);
	}
	
	public void updateProvince(Province o){
		pDao.getHibernateTemplate().update(o);
	}
	
	public Province getProvinceByid(Integer id){
		String hql = "from Province where id = "+id;
		Province o = pDao.getProvinceByname(hql);
		return o;
	}
	
	public Integer deleteProvince(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =pDao.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from Province where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}

}
