
function ShowLoginBox(){
	layer.open({
		//type:1表示弹出的是一个div，也可以设置弹出的是一个视频或者是图片等等
		type:1,
		//设置标题
		title:'登陆',
		
		//设置边框的大小
		area:['395px','300px'],
		
		//设置显示弹出的内容内容
		content:$("#loginbox")
	});
}


function Login(){
	var username = $.trim($("#txtUserName").val());//获取到用户名,, $.trim()是用来去除字符串中的空格;
	var pwd = $.trim($("#txtPwd").val());//获取密码
	if(username == ""||pwd == ""){
//		alert("用户名或密码不能为空");//系统的弹窗
        layer.alert("用户名或密码不能为空",{
        	title:"提示",
        	//表情图片，5表示哭脸，6表示笑脸
        	icon:5
        });
	}else{
		//ajax的一个使用
		//参数一：表示后台的那个界面
		// 参数二：传递给后台的参数
		//参数三：后台返回的数据
		$.post("/Handler1.ashx",{"username":username,"pwd":pwd},function(data){
			if(data == "登陆成功"){
				layer.alert("登陆成功",{
					title: "提示",
					icon:6
				});
			}else{
				layer.alert("用户或密码错误",{
					title: "提示",
					icon:5
				});
			}
		});
	}
}
