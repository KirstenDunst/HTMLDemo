function MyClick(){
	//获取当前计算机的时间
	var mDate = new Date();
	
	//得到年（不用再加1，这个年显示就是真是的年份）
//	alert(mDate.getFullYear());

//得到月份（计算机内部是从0开始的，而我们的月份是从1开始的。即实际的月份是6月，而这个方法得到的是5.我们可以写成mDate.getMonth()+1，来显示我们正常的月份观念）
//alert(mDate.getMonth());
	
	//获取到日（这个也不用加1）
//	alert(mDate.getDate());
	
	//获取到小时
//	alert(mDate.getHours());
	
	//获取到分钟
//	alert(mDate.getMinutes());
	
	//获取到秒。
	alert(mDate.getSeconds());
}
