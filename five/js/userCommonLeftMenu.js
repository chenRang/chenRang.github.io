$(function(){
	$(".userList>li>a").on("click",function(){
		$(this).next().slideToggle(300);
	})
});
