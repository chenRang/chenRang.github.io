$(function(){
	$("#topNav").load("topnav-0.html");
	$("#foot").load("footer.html");
	
	$(".text-img>img:first-child").hover(function(){
		$(this).stop().animate({top:-5},300);
	},function(){
		$(this).stop().animate({top:0},300);
	})	
});