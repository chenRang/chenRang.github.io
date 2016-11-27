$(function(){
	$("#header").load("header.html");
	$("#foot").load("footer.html");
	
	//收获地址验证开始
	var province,city,region;
	$("#province").on("change",function(){
		province = $(this).find("option:selected").text();
		console.log(province);
	})
	$("#city").on("change",function(){
		city = $(this).find("option:selected").text();
		console.log(city);
	})
	$("#region").on("change",function(){
		region = $(this).find("option:selected").text();
		console.log(region);
	})
	$(".save").on("click",function(){
		var $i = 0
		if($(".consignee").val() == ""){
			$(".consignee").next().css("display","inline-block");
		}else{
			$i++;
			$(".consignee").next().css("display","none");
		};
		if($(".consignee-ad").val() == ""){
			$(".consignee-ad").next().css("display","inline-block");
		}else{
			$i++;
			$(".consignee-ad").next().css("display","none");
		};
		if($(".consignee-phone").val() == ""){
			$(".consignee-phone").next().css("display","inline-block");
		}else{
			$i++;
			$(".consignee-phone").next().css("display","none");
		};
		if(province == "请选择"){
			$(".ad").children(".error").css("display","inline-block").html("请选择省份");
		}else if(city == "请选择"){
			$(".ad").children(".error").css("display","inline-block").html("请选择城市");
		}else if(region == "请选择"){
			$(".ad").children(".error").css("display","inline-block").html("请选择地区");
		}
		if($i == 3){
			$(".detailedAddress-content").html('<p>'+$(".consignee").val()+'</p>'+
												'<p>'+province+city+region+$(".consignee-ad").val()+'</p>'+
												'<p>'+$(".consignee-phone").val()+'</p>');
		}
	})
	//收获地址验证结束
	
	var myProductName = "myproductname";
	var myProductImg = "myproductimg";
	var myProductPrise = "myproductprise";
	var myProductColor = "myproductcolor";
	var myProductType = "myproducttype";
	var myProductCount = "myproductcount";
	var myorderStatus = "myorderStatus";
	var productName = getCookie(myProductName);
	var productImg = getCookie(myProductImg);
	var productPrice = getCookie(myProductPrise);
	var productColor = getCookie(myProductColor);
	var productType = getCookie(myProductType);
	var productCount = getCookie(myProductCount);
	var $tr = '<tr><td><img class="img" src="'+productImg+'"></td>'+
				'<td><a href="Vacheron Constantin.html">'+productName+'</a></td>'+
				'<td>'+productColor+','+productType+'</td>'+
				'<td>x'+productCount+'</td>'+
				'<td></td>'+
				'<td>'+'￥'+parseFloat(productPrice)*parseFloat(productCount)+'</td></tr>'
	$("tbody").append($tr);
	$(".money").html(parseFloat(productPrice)*parseFloat(productCount));
	$(".totalPrices").html(parseFloat($(".money").html()) + parseFloat($(".freight").html()));
	$(".payType-list>li").on("click",function(){
		$(this).find("img").addClass("check");
		$(this).find("i").addClass("check-img");
		$(this).siblings().find("img").removeClass("check");
		$(this).siblings().find("i").removeClass("check-img");
	});
	
	$(".sentType>ul>li").on("click",function(){
		$(this).children("span").addClass("check").children("i").addClass("check-img");
		$(this).siblings().children("span").removeClass("check").children("i").removeClass("check-img");
	});
	
	$(".remarks").on("click",function(){
		if($(".remarkstxt").is(":visible")){
			$(this).find("b").html("+");
			$(".remarkstxt").css("display","none");
		}else{
			$(this).find("b").html("-");
			$(".remarkstxt").css("display","block");
		}
	});
	
	$(".submitBtn").on("click",function(){
		var myPayType = "myPayType";
		addCookie(myPayType,$(".check").attr("src"),5)
		window.location = "pay.html";
		updateCookie(myorderStatus,2,5);
	})
});
