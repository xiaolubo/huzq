package com.chapter1.t12;

public class Run {
	public static void main(String[] args) throws InterruptedException {
		try {
			MyThread thread = new MyThread("DEXTER");
			thread.start();
//			Thread.interrupted();
//			thread.interrupt();
			Thread.sleep(1000);
			thread.interrupt();
//			Thread.currentThread().interrupt();
			System.out.println("是否停止1="+Thread.currentThread().getName()+":"+Thread.interrupted());
			System.out.println("是否停止2="+Thread.currentThread().getName()+":"+Thread.interrupted());
		} catch (InterruptedException e) {
			System.out.println("main catch");
			e.printStackTrace();
		}
		System.out.println("end!");

	}
}

