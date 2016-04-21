package com.chapter1.t7;

public class Run {
	public static void main(String[] args) throws InterruptedException {
		MyThread mythread = new MyThread();
		System.out.println("begin ==" + mythread.isAlive());
		mythread.start();
		Thread.sleep(1);//增加这个后下面打印false，因为MyThread已执行完毕
		System.out.println("end ==" + mythread.isAlive());
	}
}
