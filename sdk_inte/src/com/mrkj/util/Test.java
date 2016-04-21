package com.mrkj.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;

public class Test {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
//		List<Integer> list1= new ArrayList<Integer>();
//		list1.add(1);
//		list1.add(3);
//		List<Integer> list2= new ArrayList<Integer>();
//		list2.add(33);
//		list1.add(3);
//		list1.addAll(list2);
//		for(Integer i : list1){
//			 System.out.println(i);
//		}
//		Map<String,String> map = new HashMap<String,String>();
//		map.put("sdkname", "aa");
//		map.put("operator", "bbb");
//		map.put("price", "s");
//		if(map != null && !StringUtils.isEmpty(map.get("price"))){
//			System.out.println("aa");
//		}else{
//			System.out.println("dd");
//		}
		
//		String aa = "";
//		 if(StringUtils.isEmpty(aa) || !(aa.contains("{") && aa.contains("}"))){
//
//			System.out.println("null");
//		}else{
//			System.out.println("aa");
//		}
//		if(1==1){
//			System.out.println(Integer.valueOf("0"));
//		}
		
		Date as = new Date(new Date().getTime()-24*60*60*1000);
		  SimpleDateFormat matter1 = new SimpleDateFormat("yyyy-MM-dd");
		  String time = matter1.format(as);
		  System.out.println(time);
		
	}

}
