$(function(){
	$("#head").load("userCommonHead.html");
	$("#foot").load("footer.html");
	$(".content-left").load("userCommonLeftMenu.html");
	
	if(getCookie("mycollectname")){
		var collectName = getCookie("mycollectname");
		var collectImg = getCookie("mycollectimg");
		var collectPrise = getCookie("mycollectprise");
		var collectColor = getCookie("mycollectcolor");
		var collectType = getCookie("mycollecttype");
		console.log(collectName)
		var $img = '<img src="' + collectImg + '" />';
		var $name = '<a href="Vacheron Constantin.html">' + collectName + '</a>'
		$(".collectTable tbody tr").eq(0).children("td").eq(1).html($img + $name);
		
		var $type = '<span>' + collectColor + '/' + collectType + '</span>';
		$(".collectTable tbody tr").eq(0).children("td").eq(2).html($type);
		
		var $prise = '<span>￥' + collectPrise + '</span>';
		$(".collectTable tbody tr").eq(0).children("td").eq(3).html($prise);
		
		//删除收藏
		$(".delete").on("click",function(){
			$(this).parent().parent().remove();
			deleteCookie("mycollectname");
			deleteCookie("mycollectimg");
			deleteCookie("mycollectprise");
			deleteCookie("mycollectcolor");
			deleteCookie("mycollecttype");
			if($("tbody tr").length<1){
				$(".collectTable tbody").html("");
				$(".none").css("display","block");
			}
		});
		
		//加入购物车
		$(".addToCar").on("click",function(){
			addCookie("myproductname",collectName,5);
			addCookie("myproductimg",collectImg,5);
			addCookie("myproductprise",collectPrise,5);
			addCookie("myproductcolor",collectColor,5);
			addCookie("myproducttype",collectType,5);
			addCookie("myproductcount",1,5);
		})
	}else{
		$(".collectTable tbody").html("");
		$(".none").css("display","block");
	}
});
