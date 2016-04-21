package com.chapter1.t12;

public class TestRunnable2 implements Runnable{   
    public void run(){   
    	try{   
            Thread.sleep(1000000); //这个线程将被阻塞1000秒   
            }catch(InterruptedException e){   
                e.printStackTrace();   
                //do more work and return.   
     }   
    }

}
