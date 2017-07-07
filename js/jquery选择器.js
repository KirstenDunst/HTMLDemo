
//jquery的页面加载完毕调用的方法，相当于js中的onload = function(){....}
$(function(){
	//一些基本的选择器：
	//id选择器，写法和css的写法是一样的
//	$("#btn").click(function(){
//		
//	});
	
	//标签选择器,写法和css的写法是一样的，这里的input也可以使用body input表示body标签下面的input标签
//	$("input").click(function(){
//		
//	});
	
	//类型选择器，写法和css的写法是一样的
//	$(".a1").click(function(){
//		
//	});
	
	
	
	//其他的一些比较复杂的选择器
	//获取到p标签的偶数行添加css样式
//	$("p:odd").css("color","red");
	//获取到p标签的奇数行添加css样式
//	$("p:even").css("color","green");
	//获取到页面中的第一个p标签添加样式
//	$("p:first").css("color","red");
    //获取到页面中的最后一个p标签添加样式
//	$("p:last").css("color","red");
	
	//这个p标签是属于父标签的子元素里面第一个元素设定样式
//	$("p:first-child").css("color","red");
	//这个p标签是属于父标签的子元素里面最后一个元素设定样式
//	$("p:last-child").css("color","red");
	
	//表示这个p标签是他的父元素的子元素里面第1个标签
//	$("p:nth-child(1)").css("color","red");
	
	//这里表示子元素里面第1个p标签
//	$("p:nth-of-type(1)").css("color","red");
	//这里表示子元素里面倒数第1个p标签
//	$("p:nth-last-of-type(1)").css("color","red");
	
	
	
	
	
	//包含有a标签的div标签设置css样式
//	$("div:has(a)").css("color","red");
	
	//设置了titile属性的的a标签（这里以a标签为例子，其他标签也是一样的）
//	$("a[title]").css("color","red");
	
	//设置了href的a标签，并且href是以www开头的a标签设置样式
//	$("a[href^=www]").css("color","red");
	
	//设置了href的a标签，并且href是以pdf结尾的a标签设置样式
//	$("a[href$=pdf]").css("color","red");

    //设置了href等于www.adsa.doc链接的a标签设置样式
//  $("a[href='www.adsa.doc']").css("color","red");

     //表示href链接字符串里面包含pdf这个字符的a标签设置样式
//  $("a[href*=pdf]").css("color","red");
	
	//设置type=button的一个input标签的属性为禁用（灰色不可点的样式）。
//	$("input[type=button]").attr("disabled","disabled");
    //另外的一种写法(获取所有的按钮)
//  $(":button").attr("disabled","disabled");

     //找到设置禁用的标签，设置css宽度为200px
//   $("input[disabled=disabled]").css("width","200px");
	//另外一种写法(找到所有的被禁用的元素)，设置宽度
//	$(":disabled").css("width","200px");
	
	
	//针对表单元素还有以下几个选择器获取
	//获取到所有可用的元素来设置样式
//	$(":enabled").css();
	
	//获取到所有的文本框
//	$(":text")
    
    //获取所有的表单元素
//  $(":file")

    //h获取所有被选中的元素
//  $(":selected")

    //获取所有的可视元素(显示的元素)
//  $(":visible")

    //获取所有的表单元素提交
    $(":submit")
    
    
});



