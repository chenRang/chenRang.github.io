$(function(){
	$("#header").load("header.html");
	$("#foot").load("footer.html");
	var myProductName = "myproductname";
	var myProductImg = "myproductimg";
	var myProductPrise = "myproductprise";
	var myProductColor = "myproductcolor";
	var myProductType = "myproducttype";
	var myProductCount = "myproductcount";
	var myorderStatus = "myorderStatus";
	if(checkCookie(myProductName)&&checkCookie(myProductImg)&&checkCookie(myProductPrise)&&checkCookie(myProductColor)&&checkCookie(myProductType)&&checkCookie(myProductCount)){
		$(".none").css("display","none").siblings().css("display","block");
		var productName = getCookie(myProductName);
		var productImg = getCookie(myProductImg);
		var productPrice = getCookie(myProductPrise);
		var productColor = getCookie(myProductColor);
		var productType = getCookie(myProductType);
		var productCount = getCookie(myProductCount);	
		var $tr = '<tr class="tr"><td><input type="checkbox" checked="checked" /></td>'+
						'<td><img class="img" src="'+productImg+'"/></td>'+
						'<td>'+productName+'</td>'+
						'<td>'+productColor+'/'+productType+'</td>'+
						'<td>'+productPrice+'</td>'+
						'<td><input class="number" type="number" min="1" max="5" value="'+productCount+'"/></td>'+
						'<td></td>'+
						'<td class="addPrise">'+parseFloat(productPrice)*parseFloat(productCount)+'</td>'+
						'<td><a class="removeGood" href="javascript:void(0)">删除</a><a href="javascript:void(0)">移入收藏夹</a><a class="orderPackage" href="javascript:void(0)"><b></b><span>定制包装</span></a></td></tr>'
		$("tbody").append($tr);
		$(".count").html($(".number").val());
		$(".money").html('￥'+$(".tr").children("td").eq(7).html());
		$(".number").on('change',function(){
			if($(this).val()>5){
				alert("最多只能购买5件");
				$(".number").val(5);
			}
			$(".count").html($(".number").val());
			$(this).parent().next().next().html(parseFloat($(this).parent().prev().html())*parseFloat($(this).val()));
			$(".money").html('￥'+$(this).parent().next().next().html());
		});
		$(".goToPayBtn").on("click",function(){
			updateCookie(myProductCount,$(".number").val());
			updateCookie(myorderStatus,1,5);
		});
	}else{
		$(".none").css("display","block").siblings().css("display","none");
	}
	$(".removeGood").on("click",function(){
		$(this).parent().parent().remove();
		deleteCookie(myProductName);
		deleteCookie(myProductImg);
		deleteCookie(myProductPrise);
		deleteCookie(myProductColor);
		deleteCookie(myProductType);
		deleteCookie(myProductCount);
		if($("tbody tr").length<1){
			$(".none").css("display","block").siblings().css("display","none");
		}
	})
});
