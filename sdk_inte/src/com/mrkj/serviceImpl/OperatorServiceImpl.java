package com.mrkj.serviceImpl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Service;

import com.mrkj.dao.OperatorDao;
import com.mrkj.model.Operator;
import com.mrkj.model.Province;
import com.mrkj.service.OperatorService;

@Service
public class OperatorServiceImpl implements OperatorService {

	@Resource
	private OperatorDao oDao;
	
	public Long countOperator() {
		String hql = "select count(*) from Operator";
		Long count = oDao.countOperator(hql);
		return count;
	}

	public Operator getOperator(String name) {
		String hql = "from Operator where operatorName = '"+name+"'";
		Operator o = oDao.getOperatorByname(hql);
		return o;
	}

	public List<Operator> getOperators() {
		String hql = "from Operator";
		List<Operator> olist = oDao.getOperator(hql);
		return olist;
	}
	
	public List<Operator> getOperators(Integer currentPage ,Integer pageSize){
		String hql = " from Operator s ";
		List<Operator> plist = this.oDao.getOperator( (currentPage - 1) * pageSize, pageSize,hql);
		return plist;
	}
	
	public Integer addOperator(Operator o){
		return (Integer)oDao.getHibernateTemplate().save(o);
	}
	
	public void updateOperator(Operator o){
		oDao.getHibernateTemplate().update(o);
	}
	
	public Operator getOperatorByid(Integer id){
		String hql = "from Operator where id = "+id;
		Operator o = oDao.getOperatorByname(hql);
		return o;
	}
	
	
	public Integer deleteOperator(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =oDao.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from Operator where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}

}
