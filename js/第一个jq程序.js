
//页面中的任何内容都只在内容加载完成之后找到对象

$(function(){
	//jquery使用的是click。js使用的是onclick，两者不能不换（除非使用下面的两个方法对调）。
//	$("#btn").click(function(){
//		alert("hello world");
//	});
	
	
	//使用js方法处理
//	document.getElementById("btn").onclick = function(){
//		alert("hello world1234");
//	}
	
	
	//把document对象变成jq方法
//	$(document.getElementById("btn")).click(function(){
//		alert("hello world圈儿");
//	});
	
	
	//把jq对象变成document方法
	$("#btn")[0].onclick = function(){
		alert("hello world啊是否固定舒服");
	}
	
	
});
