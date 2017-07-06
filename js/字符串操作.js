function MyClick(){
	var sString = "hello world";
	//获取到字符串的长度
//	alert(sString.length);

//获取指定位置的字符，位置是从0开始的
//alert(sString.charAt(2));

//字符串的截取 
//第一种方式：
//substring(1,8):表示从第1个字符开始到第8个字符的截取。如果只有一个参数，那么就表示从第几个字符开始截取到最后
//alert(sString.substring(1,8));
//第二种方式：
//substr(1,4):第一个参数表示用第几个字符开始，截取第二个参数个长度得到的字符。
//alert(sString.substr(1,4));

//字符串内某个内容第一次出现的位置获取
//indexOf("l",4),如果只有一个参数“l”，那么表示字符串从左到右第一次出现l的位置。
//如果添加第二个参数，那么表示从（第二个参数）的位置开始往右，查找第一个参数的第一次出现的位置。
alert(sString.indexOf("l",4));

//与之对应的,这个是从右往左查找字符第一次出现的位置
//alert(sString.lastIndexOf("l"));
}
