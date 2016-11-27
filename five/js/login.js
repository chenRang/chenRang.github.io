$(function(){
	$("#foot").load("footer.html");
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
	$("#login-submit").on("click",function(){
		var username = $("#username").val();
		var password = $("#password").val();
		if(username == ""){
			alert("用户名不能为空");
		}else{
			if(password == ""){
				alert("密码不能为空");
			}else{
				login(username,password);
			}
		}
	})
	function login(username,pwd){
		if(getCookie(myUserName) != username){
			alert("此用户不存在")
		}else if(getCookie(myPwd) != pwd){
			alert("密码不正确")
		}else{
			updateCookie(isLogin,1,5);
			if(getCookie("backTo") == "1"){
				window.location = "Vacheron Constantin.html";
			}else{
				window.location = "index.html";
			}
		}
	}
});
