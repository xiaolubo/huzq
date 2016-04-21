package com.mrkj.util;

import java.sql.SQLException;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;

public class HqlCallBack implements HibernateCallback{
	private String hql = "";
	  private int first = 0;
	  private int max = 0;

	  public HqlCallBack(String hql, int first, int max) {
	    this.hql = hql;
	    this.first = first;
	    this.max = max;
	  }

	  public Object doInHibernate(Session s)
	    throws HibernateException, SQLException
	  {
	    Query q = s.createQuery(this.hql);
	    q.setFirstResult(this.first);
	    q.setMaxResults(this.max);
	    List list = q.list();
	    return list;
	  }
}
