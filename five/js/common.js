//公共js文件
//头部顶导航开始
$(function(){
//	alert("common");
	//判断用户是否登录开始
	var myUserName = "myUserName";
	var isLogin = "isLogin";
	if(getCookie(isLogin) == 1){
		$(".login").html('<a href="userCenter.html">'+getCookie(myUserName)+'</a><b>|</b>');
		$(".topnav-right-register").html('<a class="exit" href="index.html">退出</a><b>|</b>')
	}
	$(".exit").css("margin-left","5px").on("click",function(){
		updateCookie(isLogin,0,5);
		updateCookie("backTo",0,1);
	})
	//判断用户是否登录结束
	$(".topnav-right-mine").hover(function(){
		$(this).css({"outline":"1px solid #F2F2F2","background":"#fff"});
		$(this).find("span").css("background","url(img/brandstore_share.png) no-repeat -349px -476px");
		$(".topnav-right-mine-list").css("display","block");
	},function(){
		$(this).css({"outline":"0","background":"#F2F2F2"});
		$(this).find("span").css("background","url(img/brandstore_share.png) no-repeat -349px -448px");
		$(".topnav-right-mine-list").css("display","none");
	})
	
	$(".topnav-right-app").hover(function(){
		$(this).css({"background":"#fff"});
		$(this).find("span").css("background","url(img/brandstore_share.png) no-repeat -283px -413px");
		$(".two-dimension-code").css({"display":"block","z-index":"1000"});
	},function(){
		$(this).css({"background":"#F2F2F2"});
		$(this).find("span").css("background","url(img/brandstore_share.png) no-repeat -283px -378px");
		$(".two-dimension-code").css("display","none");
	})
	
	$(".search-shoppingcar").hover(function(){
		$(this).css("border-bottom-color","transparent");
		$(".shoppingcar").css("display","block");
	},function(){
		$(this).css("border-bottom-color","#ccc");
		$(".shoppingcar").css("display","none");
	})
	
	$(".mainnav-list li").not(".goods").hover(function(){
		$(this).children("a").css("color","#fff");
		if($(this).attr("class") == "arrivestore"){
			$(this).find("i").css("background","url(img/share02.png) no-repeat -364px -259px");
		}
	},function(){
		$(this).children("a").css("color","#C8A985")
		if($(this).attr("class") == "arrivestore"){
			$(this).find("i").css("background","url(img/share02.png) no-repeat -56px -176px");
		}
	});
	
	$(".goods-list>ul>li").hover(function(){
		$(this).css("background","rgba(256,256,256,1)").find("i").css("background-image","url(img/brand_category2.png)");
		$(this).children("div").css("display","block");
	},function(){
		$(this).css("background","rgba(256,256,256,0.85)").find("i").css("background-image","url(img/brand_category1.png)");
		$(this).children("div").css("display","none");
	});
	
	$(".mainnav-texting li").hover(function(){
		$(this).parent().stop().animate({width:249,left:1050});
		$(this).stop().animate({width:147});
		$(this).find("span").stop().animate({width:120});	
	},function(){
		$(this).parent().stop().animate({width:129,left:1170});
		$(this).stop().animate({width:27});
		$(this).find("span").stop().animate({width:0});
	});
	
	var $modalDiv ;
	$(".goods").hover(function(){
		$(".goods-list").css("display","block");
		$modalDiv = $("<div>")
						.insertAfter($("#foot"))
						.css({"width":"100%","height":"2000px","position":"absolute","top":$("#banner").offset().top,"left":"0","background":"#000","opacity":"0.2"});
	},function(event){
		event.stopPropagation();
		$(".goods-list").css("display","none");
		$modalDiv.remove();
	});
	
	$(".goods-list>ul>li").hover(function(){},function(){})
});
//头部顶导航结束
