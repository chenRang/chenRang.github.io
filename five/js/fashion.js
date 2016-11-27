$(function(){
	$("#topNav").load("topnav-0.html");
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
	
	var timer;
	$("#banner").movePic($(".banner-pic"),4,1000,timer,2000)


	

});
