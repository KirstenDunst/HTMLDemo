
$(function(){
	//获取本页所有的span标签第三个span标签设置样式（索引值是2）
//	$("span").eq(2).css("color","red");
	//也可以这样写
//	$("span:eq(2)").css("color","red");
	
	//设置本页所有的span标签第三个span标签以后（不包括第三个）的样式设置.(gt只能写在里面)
//	$("span:gt(2)").css("color","red");
	
	//获取到除了第三个以外的所有的span标签(这个属性针对块内部的，对其他块内部的不包括)
//	$("span").eq(2).siblings().css("color","red");
	
	//获取所有的span标签，过滤掉第三个span标签，其他的设置样式。
//	$("span").not(":eq(2)").css("color","red");
	
	//获取所有的input标签，不包括button的
//	$("input"):not(":button");
	
	//获取所有的span标签，筛选出第三个设置样式
//	$("span").filter(":eq(2)").css("color","red")
	
	
	
	
	
	
	
	//设置class等于d1的标签的父标签设置样式
//	$(".d1").parent().css("color","red");
      
     //设置class等于d1的所有父级都设置样式
//   $(".d1").parents().css("color","red");
	
	//设置class等于d1的子元素的样式
//	$(".d1").children().css("color","red");
	
	//设置同一级的前面的最近一个元素样式
//	$(".d1").prev().css("color","red");
	//设置同一级的前面的所有元素样式
//	$(".d1").prevAll().css("color","red");
	
	//设置同一级的下一个元素的样式
//	$(".d1").next().css("color","red");
    //设置同一级的下面所有元素的样式
//	$(".d1").nextAll().css("color","red");
	
	
	
	
	
	
	//用来获取有多少个div标签
//	alert($("div").size());

    //样式的多个属性编写(这里添加的样式权重是在style里面加的，权重是最高的一级)
//  $(".c1").css({"color":"red","font-size":"30px"});
	//另外一种方法(addClass,添加另外一种class名)（这里是做样式展示，相关的代码约束在css里面完成）。
//	$(".c1").addClass("c2 c3");
	
	//移除一种样式（这里针对class标记移除一个）
//	$(".c1").removeClass("c2");
	
	//class等于c1里面查找span标签并设置样式
//	$(".c1").find("span").css("color","red");






//所有的div标签添加（class=c1）的样式，过滤出索引值等于1（即第二个元素）以及属性id等于d3的div标签再加上class=c2的样式。
//$("div").addClass("c1").filter(function(index){
//	return index ==1||$(this).attr("id")=="d3"
//}).addClass("c2");

//在div标签内部找到p标签添加class等于c2的样式再添加class等于c1的样式
//$("div").find("p").addClass("c2").end().addClass("c1");
//.end()获取到当前结果集的上一个结果集。（这里即：$("div").addClass("c1");与$("div").find("p").addClass("c2")的合并）。
//$("div").find("p").addClass("c2").end().addClass("c1");
//.andSelf()表示当前结果集和上一结果集都
//$("div").find("p").addClass("c2").andSelf().addClass("c1");








//获取到id等于d1的title属性的值
//alert($("#d1").attr("title"));

//设置id等于d1的title属性值
//$("#d1").attr("title","aaaaa");
//设置id等于d1的多个属性值
//$("#d1").attr({"title":"bbbb","id":"d2"});

//获取到id等于d1的标签里面的所有内容(包括html标签)
//$("#d1").html();
//获取到id等于d1的标签里面的文本内容
//$("#d1").text();
//设置内容(只能设置文本)
//$("#d1").text("aaaaaaaaaaaa");
//设置内容（html文本）
//$("#d1").html("<span>wiusdbhjb</span>");

//检测是否包含样式class等于c1，返回值是bool类型
//$("#d1").hasClass("c1");
//判断这个结果集是否是一个p标签。返回值是一个bool类型
//alert($("#d1").is("p"));












//内部（子元素）添加一个标签
//$("#d1").append("<p>a</p>");
//另一种写法（加入到，就等于调换位置）
//$("<p>a</p>").appendTo($("#d1"));

//把这个添加到id等于d1标签的后面
//$("<p>a</p>").insertAfter($("#d1"));
//把这个添加到id等于d1标签的前面
//$("<p>a</p>").insertBefore($("#d1"));

//鼠标放在上面处理的方法
//$("#d1").mouseover(function(){
//	alert("鼠标放上了");
//});
//鼠标移走的时候处理的方法
//$("#d1").mouseout(function(){
//	alert("鼠标移走了");
//});
//上面的总和hover，方法一表示鼠标移上去触发的方法，方法二表示鼠标移除触发的方法
$("#d1").hover(function(){
	alert("鼠标放上了");
},function(){
	alert("鼠标移除了");
});




	
})
