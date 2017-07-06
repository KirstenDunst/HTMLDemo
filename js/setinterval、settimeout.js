
//点击按钮之后让div里面间隔1秒数字随着改变
function MyClick(){
	
	var i= 0;
	//setInterval(,)表示间隔多少时间（参数二）（这里单位是毫秒）去执行这个方法（参数一），反复执行。详单于NSTimer(定时器)
	var timmer = setInterval(function(){
		i++;
		document.getElementById("d1").innerText = i;
		
		if(i == 6){
			//毁灭定时器
			clearInterval(timmer);
		}
		
	},1000);
	
	
	//setTimeout（,）意思同上，只是不会反复执行，相当于延时了（参数二）的时间去执行（参数一的）方法
//	setTimeout(function(){
//		i++;
//		document.getElementById("d1").innerText = i;
//	},1000);

}
