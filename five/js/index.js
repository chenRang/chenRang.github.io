//首页js文件
$(function(){
//	alert()
	$("#header").load("header.html");
	$("#foot").load("footer.html");
	
	//滚动广告开始
	var timer;
	$("#banner").movePic($(".bannerList"),7,1440,timer,2000,$(".banner-list li"),$(".prev-pic"),$(".next-pic"))
	
	//滚动广告结束
	//主题活动开始
	$(".flagshipbrand-list>li>a").hover(function(){
		$(this).children(".flagshipbrand-list-brand").stop().animate({height:144},300);
	},function(){
		$(this).children(".flagshipbrand-list-brand").stop().animate({height:44},300);
	});
	//主题活动结束
	
	//热门旗舰店开始
	var $borderDiv1,$borderDiv2,$borderDiv3,$borderDiv4;
	$(".hotstore-page>ul>li").hover(function(){
		console.log("jinru ")
		$borderDiv1 = $("<div>").insertAfter($(this).children()).stop().css({"width":"1","height":"0","position":"absolute","left":"0","top":"0","background":"#000"})
										.animate({height:$(".hotstore-page>ul>li").eq(0).height()},200);
		$borderDiv2 = $("<div>").insertAfter($(this).children()).stop().css({"width":"0","height":"1","position":"absolute","left":"0","top":"0","background":"#000"})
										.animate({width:$(".hotstore-page>ul>li").eq(0).width()},200);
		$borderDiv3 = $("<div>").insertAfter($(this).children()).stop().css({"width":"1","height":"0","position":"absolute","left":$(".hotstore-page>ul>li").eq(0).width(),"top":$(".hotstore-page>ul>li").eq(0).height(),"background":"#000"})
										.animate({height:$(".hotstore-page>ul>li").eq(0).height(),top:0},200);
		$borderDiv4 = $("<div>").insertAfter($(this).children()).stop().css({"width":"0","height":"1","position":"absolute","left":$(".hotstore-page>ul>li").eq(0).width(),"top":$(".hotstore-page>ul>li").eq(0).height(),"background":"#000"})
										.animate({width:$(".hotstore-page>ul>li").eq(0).width(),left:0},200);
		$(this).children(".hotstore-page-list-pic").stop().fadeOut(200);
		$(this).children(".hotstore-page-list-tit").stop().fadeIn(200);
	},function(){
		$borderDiv1.stop().animate({height:0},200,function(){$(this).remove()});
		$borderDiv2.stop().animate({width:0},200,function(){$(this).remove()});
		$borderDiv3.stop().animate({height:0,top:$(".hotstore-page>ul>li").eq(0).height()},200,function(){$(this).remove()});
		$borderDiv4.stop().animate({width:0,left:$(".hotstore-page>ul>li").eq(0).width()},200,function(){$(this).remove()});
		$(this).children(".hotstore-page-list-pic").stop().fadeIn(200);
		$(this).children(".hotstore-page-list-tit").stop().fadeOut(200);
	});
	//热门旗舰店结束
	
	//商场同款开始
	$(".hotsale-nav>li").eq(0).css("background","#000");
	$(".hotsale-nav>li").hover(function(){
		$(this).siblings().css("background","#999");
		$(this).css("background","#000");
		$(".hotsale-content-box").stop().animate({left:-$(this).index()*$(".hotsale-content").width()},200);
	},function(){});
	
	$(".hotsale-content .hotsale-content1-list li").hover(function(){
		$(this).children("div").css("position","relative").stop().animate({left:-20},200);
		$(this).find("img").css("position","relative").stop().animate({left:20},200);
	},function(){
		$(this).children("div").css("position","relative").stop().animate({left:0},200);
		$(this).find("img").css("position","relative").stop().animate({left:0},200);
	});
	
	$(".hotsale-content3-left,.hotsale-content3-right>ul>li").hover(function(){
		$(this).children(".hotsale-content3-model").css("display","block");
	},function(){
		$(this).children(".hotsale-content3-model").css("display","none");
	});
	//商场同款结束
	
	//购物中心导航开始
	$(".shoppingmall-nav>li").hover(function(){
		$(this).children(".shoppingmall-box").stop().animate({top:-50},200);
	},function(){
		$(this).children(".shoppingmall-box").stop().animate({top:0},200);
	});
	//购物中心导航结束
	
	//购物中心开始
	$(".mall-left-bottom>.mall-left-bottom-list").each(function(){
		$(this).css({"left":$(this).index()*$(this).width()});
	});
	var $mall_Click = false;
	var $index = 0
	$(".mall-left-bottom>.mall-left-bottom-btn>.mall-left-bottom-btn-prev").on("click",function(){
		if($(this).parent().prev().position().left == -660){
			$(this).parent().prev().css("left",0);
			$index = 0;
		}
		$index++;
		$(this).parent().prev().animate({left:"-=220"},200,function(){
			if($index>=3){
				$(this).css("left",0);
				$index = 0;
			
			}
			$(this).next().children(".mall-left-bottom-btn-page").css("background","#999");
			$(this).next().children().eq($index+1).css("background","#C69C6D");	
		});
		
	});
	$(".mall-left-bottom>.mall-left-bottom-btn>.mall-left-bottom-btn-next").on("click",function(){
		if($(this).parent().prev().position().left == 0){
			$(this).parent().prev().css("left",-660);
			$index = 3
		}
		$index--;
		$(this).parent().prev().animate({left:"+=220"},200,function(){
			$(this).next().children(".mall-left-bottom-btn-page").css("background","#999");
			$(this).next().children().eq($index+1).css("background","#C69C6D");
			if($index<=0){
				$(this).css("left",-660);
				$index = 3;	
			}
		});
		
	});
	$(".mall-left-bottom>.mall-left-bottom-btn>.mall-left-bottom-btn-page").on("click",function(){
		var $j = $(this).index() - 1;
		var $left = $(this).parent().prev().position().left - ($j - $index) * 220;
		$(this).parent().prev().animate({left:$left},200);
		$index = $j
		$(this).parent(".mall-left-bottom-btn").children(".mall-left-bottom-btn-page").css("background","#999");
		$(this).css("background","#C69C6D");
	});

	//购物中心结束
	
	//主題活動开始
	$(".promotion-bottom-left li").on("mouseenter",function(){
		var $a_index = $(this).index();
		$(".promotion-bottom-right").children("a").eq($a_index).css("display","block").siblings("a").css("display","none");
	})
	//主題活動结束
});













