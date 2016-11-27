$(function(){
	$("#head").load("header.html");
	$("#foot").load("footer.html");
	var myorderStatus = "myorderStatus";
	$(".subBtn").on("click",function(){
		updateCookie(myorderStatus,4,5);
		$("#content").html('<p style="color:#d00000;font-size:16px;">支付已完成，将为您跳转到主页......</p>');
		setTimeout(function(){
			window.location = "index.html";
		},3000)
	})
});
