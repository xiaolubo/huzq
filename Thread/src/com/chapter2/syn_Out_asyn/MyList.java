package com.chapter2.syn_Out_asyn;

import java.util.ArrayList;
import java.util.List;

public class MyList {

	private List list = new ArrayList();

	synchronized public void add(String username) {
		System.out.println("ThreadName=" + Thread.currentThread().getName()
				+ "执行了add方法！");
		
		list.add(username);
		System.out.println("ThreadName=" + Thread.currentThread().getName()
				+ "退出了add方法！");
//		try {
//			Thread.sleep(1000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
	}

	synchronized public int getSize() {
		System.out.println("ThreadName=" + Thread.currentThread().getName()
				+ "执行了getSize方法！");
		int sizeValue = list.size();
		System.out.println("ThreadName=" + Thread.currentThread().getName()
				+ "退出了getSize方法！");
		return sizeValue;
	}

}
