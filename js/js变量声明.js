function MyClick(){
	//声明变量
	
	//弱类型：用var声明的变量（就是在声明的时候不去指定他的类型，在赋予值的时候才制定类型）
	var iNum1 = 10;//命名规范一般情况下为了增强代码的可读性（以下不再赘述），声明正数变量名我们以i开头
	var sString = "dasdaa";//声明字符串，我们以s开头
	var bFlag = true;//声明bool类型我们以b开头
	var aNum = [1,2,3,4];//声明数组我们以a开头
	var oObject = {name:"aaa",age:12};//对象类型，以o开头
	var fNumber = 10.23;//声明小数类型我们以f开头
	
	//强类型：事先将类型定义好，后面不可以更改。
	
	
	//也可以一次声明多个
	var iNum2 = 20,sString1 = "casdfds",bFlag = false;
	
	//也可以只做声明，不去赋值。
	var sString2;
	alert(sString2);//这里没有赋值的变量输出的是undefined字样。
	
	
	//变量的命名规范
	//1.变量的第一个内容必须是字母、下划线、$
	//2.其余的内容必须是_、$、 字母、数字
	//3.变量不能是js的关键字
	
	//eg：var s = "12dasasdf";(错误，由于第一个内容是1，不符合第一条)
	//    var s = "_dasdas$fsd22";(正确)
	//    var s = "$fdsfds%543";(错误，由于其余内容有%，不符合第二条规范)
	//    var s = "function";(错误，由于不满足第三条规范)
}



//变量的转换
function MyClick1(){
	var iNum1 = 10;
	var sNum1 = "123";
	//这里“+”不再是运算符的作用，这里做链接的作用，将iNum1转化为字符串和sNum1拼接在一起合成10123;
	//内部实线于alert(iNum1.toString() + sNum1);
//	alert(iNum1 + sNum1);
	
	//如果是减号、乘号、除号的时候就只有一个运算符的效果，会将对象强制转化为数字运算
	//内部实现于alert(iNum1 - Number(sNum1));如果sNum1内部字符不是数字类型的，那么就会爆出NaN.
	
	//parseInt()与parseFloat()是从左往右转，直到不能转为止。而Number()是针对整体的，不是数字类型那么就会爆出NaN.
	
//	parseInt();强制转换为整型，例如：输入“a1b0sdf”,则返回NaN。如果输入“1b0sdf”,则返回1。如果输入“10sdf”,则返回10。如果输入“10.23”,则同样返回10。
alert(parseInt("1bosdf"));

// parseFloat();强制转换为浮点型，例如：输入“10.23”,则返回10.23。输入“a10.23”,则返回NaN。输入“10.1a10.23”,则返回10.1。
}
