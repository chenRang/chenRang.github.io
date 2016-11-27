$(function(){
	$("#header").load("header.html");
	$("#foot").load("footer.html");
	var myUserName = "myUserName";
	var isLogin = "isLogin";
	if(getCookie(isLogin) == 1){
		$(".login").html('<a href="userCenter.html">'+getCookie(myUserName)+'</a><b>|</b>');
		$(".topnav-right-register").html('<a class="exit" href="index.html">退出</a><b>|</b>')
	}
	$(".exit").on("click",function(){
		updateCookie(isLogin,0,5);
	})
//	$(".girl").css("background","red");
	$(".favoriteBrands-pic>ul>li").hover(function(){
		$(this).children("div").css("display","block");
	},function(){
		$(this).children("div").css("display","none");
	})
	
	$(".good-bottom-picList>li").hover(function(){
		$(this).css({"box-shadow":"0px 4px 10px #a7a7a7"});
		$(this).children("div").css("background","#e0e0e0");
	},function(){
		$(this).css({"box-shadow":"none"});
		$(this).children("div").css("background","none");
	})
});
