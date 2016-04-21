package com.mrkj.serviceImpl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Service;

import com.mrkj.dao.RequestlogDao;
import com.mrkj.data.RequestData;
import com.mrkj.model.Appprice;
import com.mrkj.model.Requestlog;
import com.mrkj.service.RequestlogService;
import com.mrkj.util.DateUtil;

@Service
public class RequestlogServiceImpl implements RequestlogService{
	@Resource
	private RequestlogDao rDao;
	
	public Integer saveRequestlog(Requestlog r) {
		Integer i = (Integer)rDao.getHibernateTemplate().save(r);
		return i;
	}

	public List<RequestData> getRequestlog(Map<String,String> map) {
//		String presql1 = " select new com.mrkj.data.RequestData(r.addtime,r.sdkprice.sdk.sdkName,r.app.name,r.sdkprice.province.provinceName" +
//		",r.sdkprice.operator.operatorName,r.sdkprice.price,count(*),count(*)) ";
		String presql2 = " select new com.mrkj.data.RequestData(r.addtime,r.sdkprice.sdk.sdkName,r.app.name,r.sdkprice.province.provinceName" +
		",r.sdkprice.operator.operatorName,r.sdkprice.price,count(*),count(Distinct r.imsi)) ";
//		String presql2 = " select new com.mrkj.data.RequestData(r.addtime,r.sdkprice.sdk.sdkName,r.app.name,r.sdkprice.province.provinceName" +
//		",r.sdkprice.operator.operatorName,r.sdkprice.price,select count(rq.imsi) from Requestlog rq,1) ";
		
		String hql = " from Requestlog r where 1=1";
		if(map != null && !StringUtils.isEmpty(map.get("start_addtime"))
				 && !StringUtils.isEmpty(map.get("end_addtime"))){
			String start_timestamp = DateUtil.date2TimeStamp(map.get("start_addtime"), "yyyy-MM-dd HH:mm:ss");
			String end_timestamp = DateUtil.date2TimeStamp(map.get("end_addtime"), "yyyy-MM-dd HH:mm:ss");
			Long et = Long.valueOf(end_timestamp)+86400;
			hql += " and addtime between "+start_timestamp+" and "+et;
		}
		if(map != null && !StringUtils.isEmpty(map.get("sdk")) && !"0".equals(map.get("sdk"))){
			
			hql += " and r.sdkprice.sdk.id = "+map.get("sdk");
		}
		if(map != null && !StringUtils.isEmpty(map.get("app")) && !"0".equals(map.get("app"))){
			hql += " and r.app.id = "+map.get("app");
		}
		if(map != null && !StringUtils.isEmpty(map.get("province")) && !"0".equals(map.get("province"))){
			hql += " and r.sdkprice.province.id = "+map.get("province");
		}
		if(map != null && !StringUtils.isEmpty(map.get("operator")) && !"0".equals(map.get("operator"))){
			hql += " and r.sdkprice.operator.id = "+map.get("operator");
		}
		
		if(map != null && !StringUtils.isEmpty(map.get("filter"))){
			String filter = map.get("filter");
			String filterarr[] = filter.split(",");
			if(filterarr != null && filterarr.length >0){
				hql += " group by ";
			}
			for(int i = 0;i<filterarr.length;i++){
				if("1".equals(filterarr[i])){
					hql += " r.app.id";
				}else if("2".equals(filterarr[i])){
					hql += " r.sdkprice.sdk.id";
				}else if("3".equals(filterarr[i])){
					hql += " r.sdkprice.province.id";
				}else if("4".equals(filterarr[i])){
					hql += " r.sdkprice.operator.id";
				}else{
					hql += " r.sdkprice.price";
				}
				
				if(i < filterarr.length-1){
					hql += ",";
				}
			}
		}else{
//			hql += " group by r.app.id,r.sdkprice.sdk.id,r.sdkprice.province.id,r.sdkprice.operator.id,r.sdkprice.price";
		}
//		if(map != null && !StringUtils.isEmpty(map.get("userfilty"))){
//			if("1".equals(map.get("userfilty"))){
//				hql = presql2+hql;
//			}else{
//				hql = presql1+hql;
//			}
//			
//		}else{
//			hql = presql1+hql;
//		}
		hql = presql2+hql;
		List<RequestData> rllist = rDao.getRequeslog(hql);
		return rllist;
	}

	

}
