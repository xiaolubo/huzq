package com.chapter1.t12;

public class ThreadDemo {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		  Runnable r=new TestRunnable();     
          Thread th1=new Thread(r);     
          th1.start();     
          th1.interrupt();              

	}

}
