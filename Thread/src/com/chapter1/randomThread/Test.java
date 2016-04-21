

package com.chapter1.randomThread;
public class Test {
	public static void main(String[] args) {
		try {

			MyThread thread = new MyThread();
			thread.setName("myThread");
//			thread.start();
			thread.run();
			for (int i = 0; i < 10; i++) {
				int time = (int) (Math.random() * 1000);
				Thread.sleep(time);
				System.out.println("main=" + Thread.currentThread().getName());
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
//		for(int i = 0; i < 100; i++ ){
////			int time = (int) ();
//			System.out.println((int)(Math.random()*1000));	
//		}
		
	}
}
