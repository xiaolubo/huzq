package com.chapter3.ThreadLocal33;

import java.util.Date;

public class ThreadLocalExt extends ThreadLocal {
	@Override
	protected Object initialValue() {
		return new Date().getTime();
	}
}
