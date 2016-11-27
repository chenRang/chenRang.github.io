$(function(){
	$("#foot").load("footer.html");
	var temp = true;
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
	var div = $("<div>").insertAfter($("#phonenumber")).css({"width":"210px","height":"20px","background":"pink","border":"1px solid red","margin":"2px 0 0 74px","display":"none"}) ;
	var divPwd = $("<div>密码不能为空</div>").insertAfter($("#password")).css({"width":"210px","height":"20px","background":"pink","border":"1px solid red","margin":"2px 0 0 74px","display":"none"});
	var $div = $("<div>两次输入的密码不一致</div>").insertAfter($("#password_confirm")).css({"width":"210px","height":"20px","background":"pink","border":"1px solid red","margin":"2px 0 0 74px","display":"none"});
	$("#phonenumber").on("blur",function(){
		textPhoneNumber($(this));
	});
	
	$("#password").on("blur",function(){
		testPassword($(this));
	});
	
	$("#password_confirm").on("blur",function(){
		testPasswordConfirm($(this));
	});
	
	$("#submit-btn").on("click",function(){
		textPhoneNumber($("#phonenumber"));
		testPasswordConfirm($("#password_confirm"));
		if(temp){
			addCookie(myUserName,textPhoneNumber($("#phonenumber")),5);
			addCookie(myPwd,testPasswordConfirm($("#password_confirm")),5);
			addCookie(isLogin,0,5);
			window.location = "login.html";
			return;	
		}
	});
	
	function textPhoneNumber($ele){
		var $phoneNumber = $ele.val();
		temp = /^1[3|5|6|7|8]\d{9}$/.test($phoneNumber);
		if(!temp){
			div.css({"display":"block"});
			div.html("您输入的手机号不合法")
			return;
		}else if(getCookie(myUserName) == $phoneNumber){
				div.css({"display":"block"});
				div.html("您的手机号已经注册，请直接登录");
				return;
		}else{
			div.css({"display":"none"});
			return $phoneNumber;
		}
	}
	function testPassword($ele){
		var $password = $ele.val();
		if($password==""){
			divPwd.css({"display":"block"});
			temp = false;
			return;
		}else{
			temp = true;
			divPwd.css({"display":"none"});
			return $password;
		}
	}
	function testPasswordConfirm($ele){
		var $password = $ele.parent().prev().children("#password").val();
		var $password_confirm = $ele.val();
		if($password_confirm == "" || $password_confirm != $password){
			$div.css({"display":"block"});
			temp = false;
			return;
		}else{
			temp = true;
			$div.css({"display":"none"});
			return $password;
		}
	}
});
