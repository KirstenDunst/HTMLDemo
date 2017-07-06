function MyClick(){
//   第一种方式创建数组
	//数组的声明，new Array(4),如果限定了数量是4个元素，那么就只能定义四个元素，那么索引就只能从0到3，多了就会报错。
	//                        如果不限定数量，那么就只是做初始化一次，索引可以无限添加。
	var aTeam = new Array();
	aTeam[0] = "aaa";
	aTeam[1] = "bbb";
	aTeam[2] = "ccc";
	aTeam[3] = "ddd";
	
	//第二种方式创建数组
//	var aTeam = ["aaa","bbb","ccc","ddd"];
	
	
	//把一个数组变成字符串
//	alert(aTeam.toString());//输出内容就是:aaa,bbb,ccc,ddd
	
	
	//变成字符串，元素之间通过下划线隔开。（可以自定义方式隔开）
//	alert(aTeam.join("_").toString());
	
	
	//反序输出。
//	alert(aTeam.reverse().toString());
	
	
	//用字符串变成数组(这时必须有一个相同的间隔，这里使用的是下划线做间隔)。
	var sString = "dsa_fdd_dfdf";
	var aTeam1 = sString.split("_");//类似于iOS中的[str componentsSeparatedByString:@"_"]; 
	alert(aTeam1[2]);
	
}
