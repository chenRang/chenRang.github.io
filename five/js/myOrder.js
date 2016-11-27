$(function(){
	$("#head").load("userCommonHead.html");
	$("#foot").load("footer.html");
	$(".content-left").load("userCommonLeftMenu.html");
	
	$(".orderStatusTab>ul>li").on("click",function(){
		$(this).addClass("cleck").siblings().removeClass("cleck");
	})
	//获取cookie
	var myProductName = "myproductname";
	var myProductImg = "myproductimg";
	var myProductPrise = "myproductprise";
	var myProductColor = "myproductcolor";
	var myProductType = "myproducttype";
	var myProductCount = "myproductcount";
	var myorderStatus = "myorderStatus";
	var myOrderId = "myOrderId";
	var productName = getCookie(myProductName);
	var productImg = getCookie(myProductImg);
	var productPrice = getCookie(myProductPrise);
	var productColor = getCookie(myProductColor);
	var productType = getCookie(myProductType);
	var productCount = getCookie(myProductCount);
	var orderId = getCookie(myOrderId);
	console.log(orderId)
	//判断是否有cookie
	if(productName){
		$(".orderId").html(orderId);
		var $img = '<img src="' + productImg + '">';
		var $information = '<span style="width:213px;">' + productName + '&nbsp' + productColor + '&nbsp' + productType + '</span>';
		var $count = '<span>x' + productCount + '</span>';
		$(".orderTableOne tr").eq(0).children("td").eq(0).html($img+$information+$count);
		
		var $money = '<span>￥' + parseFloat(productPrice) * parseFloat(productCount) + '</span>'
		$(".orderTableOne tr").eq(0).children("td").eq(1).html($money);
		
		var orderStatus = getCookie(myorderStatus);
		var $temp = '';
		var $status = '';
		switch (orderStatus){
			case "4": $temp = '交易成功';$status = '已成功';
				break;
			default: $temp = '未付款';$status = '去付款';
				break;
		}
		$(".orderTableOne tr").eq(0).children("td").eq(2).html('<span>'+$temp+'</span>');
		$(".orderTableOne tr").eq(0).children("td").eq(4).html('<span><a href="shoppingcar.html">'+$status+'</a></span>');
	}else{
		$(".none").css("display","block");
		$(".orderTable").css("display","none");
	}
});
