$(function(){
//header二级菜单
	$('.header_r ul li').hover(function(){
		$(this).find('.dl1').fadeIn('slow')
	},function(){
		$(this).find('.dl1').fadeOut('slow')		
	})
	//nav1二级菜单
	$('.nav1_l ul').find('.nav1_l_last').hover(function(){
		$(this).find('.nav1_l_last1').fadeIn('slow')
	},function(){
		$(this).find('.nav1_l_last1').fadeOut('slow')
	})
	
//	右侧边栏
	$('.rightbox').find('.rightbox_1').hover(function(){
		$(this).css({"background-color":"#EC3E7D"})
		$(this).find('.rightbox_1_left').css({display:'block'})
	},function(){
		$(this).css({"background-color":"#4C4C4C"})
		$(this).find('.rightbox_1_left').css({display:'none'})
	})
	
	$('.rightbox').find('.rightbox_3').click(function(){
		 $('body,html').animate({ scrollTop: 0 }, 200);       
	})
	
})	