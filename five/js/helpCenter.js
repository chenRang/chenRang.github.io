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
	$(".help-left-list>li>.help-left-tit").hover(function(){
		$(this).css({"background":"#fff","color":"#B28247"});
	},function(){
		$(this).css({"background":"#F7F7F7","color":"#D00000"});
	});
	$(".help-left-list>li>.help-left-tit").on("click",function(){
		if($(this).next().is(":visible")){
			$(this).children("i").css("background-position","-464px -324px");
		}else{
			$(this).children("i").css("background-position","-448px -320px");
		}
		$(this).next().slideToggle(500);
	})
});
