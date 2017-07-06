
function MyClick(){
	var iNum1 = 10;
	var iNum2 = 4;
	var iNum3 = 0;
//  alert(iNum1/iNum2);//除法
//  alert(iNum1%iNum2);//取余
	
	if(iNum1>iNum2){
		alert("第一个数大于第二个数");
	}else{
		alert("第一个数小于等于第二个数")
	}
	
	iNum3=iNum1>iNum2?iNum1:iNum2;
}



//等于的区别，逻辑运算符
function MyClick1(){
	//一个=号的意思是赋值
	
	//两个等于号==表示判断是否相等
	
	//三个等于号===表示不仅值相等，还要变量的类型也相等（恒等于）。
	
	
	
//	逻辑运算符 与(&&)、或(||)、非(!)

}



//循环
function MyClick2(){
	//1+2+3+....+100
	var i = 0;
	var iSum = 0;
	
	//while循环
//	while(i<=100){
//		iSum +=i;
//		i++;
//	}
	
	//for循环
	for(var i = 0;i<101;i++){
		iSum+=i;
	}
	
	
	//do..while循环
//	do{
//		iSum +=i;
//		i++;
//	}while(i<=100)

}



//for循环的嵌套
function MyClick3(){
	//列出一个乘法表
	var sHtml = "";
	sHtml = "<table>";
	for (var i = 1;i<=9;i++){
		sHtml+="<tr>";
		for(var j = 1;j<=i;j++){
			sHtml += "<td>" +i+"*"+j+"="+i*j+"</td>";
		}
		sHtml += "</tr>";
	}
	sHtml+="</table>";
	//显示在页面中，浏览器做一个解析
	document.write(sHtml);
	
	
	//冒泡排序
	var aNumber = [10,2,3,67,45,36,12,89,30,24,71,55];
	var iNum = 0;
	for(var i = 0; i<aNumber.length-1; i++){
		for(var j = i+1; j<aNumber.length;j++){
			if(aNumber[i]>aNumber[j]){
				iNum = aNumber[i];
				aNumber[i] = aNumber[j];
				aNumber[j] = iNum;
			}
		}
	}
	alert(aNumber);
}



//switch的使用
function MyClick4(){
	//这个调用的一个弹出的一个输入框，我们在里面输入的所有内容返回的都是字符串类型
	var sInput = prompt("请输入一个1～7之间的一个整数");
	
	try{
		if(sInput == parseInt(sInput)){
		      //那么就是一个整数
		      if(parseInt(sInput)>7||parseInt(sInput)<1){
		      	alert("输入的整数不在1～7之间");
		      }else{
		      	//使用switch来判断是那个值
		      	switch (parseInt(sInput)){
		      		case 1:
		      		alert("星期一");
		      			break;//break跳出switch
		      			case 2:
		      		alert("星期二");
		      			break;
		      			case 3:
		      		alert("星期三");
		      			break;
		      			case 4:
		      		alert("星期四");
		      			break;
		      			case 5:
		      		alert("星期五");
		      			break;
		      			case 6:
		      		alert("星期六");
		      			break;
		      			case 7:
		      		alert("星期日");
		      			break;
		      		default://default就是指的是除上面以外的。
		      			break;
		      	}
		      }
	    }else{
		      //输入的不是一个整数
	    }
	}catch(e){
		alert("输入的不是一个数字，通过不了 parseInt()处理，错误原因：" + e);
	}	
}

