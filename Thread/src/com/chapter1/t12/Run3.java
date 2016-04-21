package com.chapter1.t12;

public class Run3 {
	public static void main(String[] args) {
		try {
			MyThread thread = new MyThread();
			thread.start();
			Thread.sleep(3000);
			thread.interrupt();
//			Thread.currentThread().interrupt();
			System.out.println("是否停止1="+Thread.currentThread().getName()+":"+thread.interrupted());
			System.out.println("是否停止2="+Thread.currentThread().getName()+":"+thread.interrupted());
		} catch (InterruptedException e) {
			System.out.println("main catch");
			e.printStackTrace();
		}
		System.out.println("end!");
	}
}

