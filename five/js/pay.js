$(function(){
	$("#head").load("header.html");
	$("#foot").load("footer.html");
	var myorderStatus = "myorderStatus";
	var myOrderId = "myOrderId";
	var productPrice = getCookie("myproductprise");
	var productCount = getCookie("myproductcount");
	var payType = getCookie("myPayType");
	var orderId = Math.round(Math.random()*10000000)+100000000
	$(".orderId").html(orderId);
	$(".orderMoney").html(parseFloat(productPrice)*parseFloat(productCount));
	var $img = '<img src="'+payType+'"style="width:103px;height:31px;" />'
	$(".payTypePic").html($img)
	
	$(".toPayBtn").on("click",function(){
		window.location = "paySuccess.html";
		updateCookie(myorderStatus,3,5);
		addCookie(myOrderId,orderId,5)
	})
});
