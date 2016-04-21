package com.mrkj.serviceImpl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Service;

import com.mrkj.dao.ChannelDao;
import com.mrkj.dao.ShieldsdkDao;
import com.mrkj.model.Channel;
import com.mrkj.model.Operator;
import com.mrkj.model.Shieldsdk;
import com.mrkj.service.ChannelService;

@Service
public class ChannelServiceImpl implements ChannelService {

	@Resource
	private ChannelDao cDao;
	@Resource
	private ShieldsdkDao sDao;
	
	public List<Channel> getChannels(){
		String hql = "from Channel";
		List<Channel> chlist = cDao.getChannel(hql);
		return chlist;
	}

	public Long countChannel() {
		String hql = "select count(*) from Channel";
		return cDao.countChannel(hql);
	}
	
	public Channel getChannel(String name){
		String hql = "from Channel where channelname = '"+name+"'";
		Channel ch = cDao.getChannelByname(hql);
		return ch;
	}
	
	public List<Channel> getChannels(Integer currentPage ,Integer pageSize){
		String hql = " from Channel s ";
		List<Channel> clist = this.cDao.getOperator( (currentPage - 1) * pageSize, pageSize,hql);
		return clist;
	}
	
	public Integer addChannel(Channel o){
		return (Integer) cDao.getHibernateTemplate().save(o);
	}
	
	public void updateChannel(Channel o){
		cDao.getHibernateTemplate().update(o);
	}
	
	public Channel getChannelByid(Integer id){
		String hql = "from Channel where id = "+id;
		Channel ch = cDao.getChannelByname(hql);
		return ch;
	}
	
	public Integer deleteChannel(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =cDao.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from Channel where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}
	
	public Long countShieldSdk(){
		String hql = "select count(*) from Channel";
		return (Long)sDao.countShieldSdk(hql);
	}
	
	public List<Shieldsdk> getShieldSdk(int currentPage,int pageSize){
		String hql = "select new com.mrkj.data.ChshieldSdk(s.id,s.channel.channelname" +
				",s.sdk.sdkid,s.sdk.sdkName) from Shieldsdk s ";
		List<Shieldsdk> clist = this.sDao.getAllShieldsdk( (currentPage - 1) * pageSize, pageSize,hql);
		return clist;
	}
	
	public 	Integer addShieldsdk(Shieldsdk s){
		return (Integer)sDao.getHibernateTemplate().save(s);
	}
	
	public Integer deleShieldSdk(List<Integer> idlist){
		String  hq="";
		for(int i=0;i<idlist.size();i++){
			if(i==0){
				hq = "id="+idlist.get(i);
			}else{
				 hq =hq + " or id="+idlist.get(i);
			}
		}
		final String hql=hq;
		Integer result =cDao.getHibernateTemplate().execute(new HibernateCallback(){
			public Integer doInHibernate(Session session){
				Query query=session.createQuery("delete from Shieldsdk where "+hql);
				return query.executeUpdate();
			}
		});
		return result;	
	}
}
