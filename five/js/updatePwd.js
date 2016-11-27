$(function(){
	$("#head").load("userCommonHead.html");
	$("#foot").load("footer.html");
	$(".content-left").load("userCommonLeftMenu.html");
	var myPwd = "myPwd";
	var pwd = getCookie(myPwd);
	$(".confirmBtn").on("click",function(){
		var oldPwd = $(".oldPwd").val();
		var newPwd = $(".newPwd").val();
		var confirm_newPwd = $(".confirm-newPwd").val();
		console.log(pwd);
		console.log(oldPwd);
		if(oldPwd == ""){
			$('<div class="prompt">请输入原密码</div>').appendTo($("body")).fadeIn(300).delay(1000).fadeOut(300,function(){$(this).remove();});
			return;
		}else if(newPwd == ""){
			$('<div class="prompt">请输入新密码</div>').appendTo($("body")).fadeIn(300).delay(1000).fadeOut(300,function(){$(this).remove();});
			return;
		}else if(confirm_newPwd == ""){
			$('<div class="prompt">请再次输入新密码</div>').appendTo($("body")).fadeIn(300).delay(1000).fadeOut(300,function(){$(this).remove();});
			return;
		}
		if(oldPwd != pwd){
			$('<div class="prompt">当前密码输入有误，请输入正确密码</div>').appendTo($("body")).fadeIn(300).delay(1000).fadeOut(300,function(){$(this).remove();});
			return;
		}else if(newPwd != confirm_newPwd){
			$('<div class="prompt">两次新密码输入不一致</div>').appendTo($("body")).fadeIn(300).delay(1000).fadeOut(300,function(){$(this).remove();});
			return;
		}else{
			updateCookie(myPwd,newPwd,5);
			alert("您的密码修改成功，请重新登录")
			window.location = "login.html";
		}
	})
});
