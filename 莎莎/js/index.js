$(function(){
	// banner轮播
	var picLi=$('.banner .banner_picture .banner_pic');
	var index=0;
	var num=picLi.size();
	function show(){
		picLi.eq(index).fadeIn(300).siblings().fadeOut(300);
		$('.banner_nav ul li').eq(index).addClass('selected').siblings().removeClass('selected');
	}
	show();
	setInterval(lunbo,2000);
	function lunbo(){
		index++;
		if(index==num){
			index=0;
		}
		show();
	}
	
	
	

	//nav2二级菜单
	var  bannerLi=$('.banner_list ul li');
	bannerLi.hover(function(){
		$(this).find('.banner_list_l').css({"background":"white"});
		$(this).find('.banner_list_r').css({display:'block'});
	},function(){
		$(this).find('.banner_list_l').css({"background":"#F9F8F8"});
		$(this).find('.banner_list_r').css({display:'none'});
	})
		
	//limitimg
	$('.limitimgs').find('.limitimgs_pic').hover(function(){
		$(this).children().eq(1).css('display','block')
	},function(){
		$(this).children().eq(1).css('display','none')
	})
	//tab键切换
	
	$('.hotlist_li ul li').mouseover(function(){
		$('.hotlist').find('.hotimg').css('display','none');
		$('.hotlist').find('.hotimg').eq($(this).index()).css('display','block');
	})
	
	$('.hotimg_li').hover(function(){
		$(this).children().eq(0).stop(true).animate({top:-150},200);
		$(this).children().eq(1).stop(true).animate({top:0},200)
	},function(){
		$(this).children().eq(1).stop(true).animate({top:150},200)
		$(this).children().eq(0).stop(true).animate({top:0},200);
	})
})
