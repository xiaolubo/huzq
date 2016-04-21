package com.chapter3.TwoThreadTransData;

public class ThreadA extends Thread {

	private MyList list;

	public ThreadA(MyList list) {
		super();
		this.list = list;
	}

	@Override
	public void run() {
		try {
			for (int i = 0; i < 10; i++) {
				list.add();
				System.out.println("添加了" + (list.size()) + "个元素");
				Thread.sleep(1000);
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}
