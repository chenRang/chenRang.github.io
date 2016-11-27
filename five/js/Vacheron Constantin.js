$(function(){
	$("#header").load("header.html");
	$("#foot").load("footer.html");
	var isLogin = "isLogin";
	//放大镜开始
	$(".detail-pic").on("mousemove",function(e){//鼠标进入事件
		$(".smallpic").css("opacity","0.3");
		var _left = e.pageX - $(".detail-pic").offset().left;//鼠标X坐标 - 小图容器left值
		var _top = e.pageY - $(".detail-pic").offset().top;//鼠标Y坐标 - 小图容器top值
		var $left,$top;//$left放大镜的left值，$top放大镜的top值
		var $smallCurWidth = $(".smallcur").width();
		var $detailPicWidth = $(".detail-pic").width();
		var $case = $("#bigpic").width()/$(".productImg").width();
		var $move = move(_left,_top);
		
		function move(left,top) {//放大镜跟随移动函数
			if (left <= $smallCurWidth / 2) { //$smallCurWidth放大镜的宽度
				$left = 0; //防止放大镜从左边框移出
			} else if (left >= ($detailPicWidth - $smallCurWidth / 2)) {//$detailPicWidth小图容器的宽度
				$left = $detailPicWidth - $smallCurWidth;//防止放大镜从右边移出
			} else {
				$left = left - $smallCurWidth / 2;
			}
			if (top <= $smallCurWidth / 2) {
				$top = 0;//防止放大镜从上边框移出
			} else if (top > ($detailPicWidth - $smallCurWidth / 2)) {
				$top = $detailPicWidth - $smallCurWidth;//防止放大镜从下边框移出
			} else {
				$top = top - $smallCurWidth / 2;
			}
			return [$left, $top];//返回放大镜的left值和top值组成的数组，第1个元素是放大镜的left值，第二个元素是放大镜的top值
		}
		
		var smallLeft = $move[0];//小放大镜left值
		var smallTop = $move[1];//小放大镜top值
		var bigLeft = -1 * smallLeft * $case ;//大图left值
		var bigTop = -1 * smallTop * $case ;//大图top值
		$("#bigpic").attr("src",$(this).children(".smallpic").children("img").attr("src"));//大图路径
		$(".smallcur").css({"left":smallLeft,"top":smallTop,"display":"block"});
		$(".productImg1").attr("src",$(this).children(".smallpic").children("img").attr("src")).css({"left":-1*smallLeft,"top":-1*smallTop,"opacity":"1"});
		$(".bigcur").css("display","block").animate({});
		$("#bigpic").css({"left":bigLeft,"top":bigTop});
	})
	$(".detail-pic").on("mouseout",function(){//鼠标移出事件
		$(".smallpic").css("opacity","1");
		$(".smallcur").css({"display":"none"});
		$(".bigcur").css("display","none");
	})
	//放大镜结束
	
	
	//点击小图换图片开始
	$(".detail-pic-list-content>ul>li").on("click",function(){
		$(".smallpic>img").attr("src",$(this).children("img").attr("src"));
		$(".smallpic>img").css("display","none").fadeIn(300);
	});
	//点击小图换图片结束
	
	//上一张开始
	$(".detail-pic-prev").on("click",function(){
		if($(".detail-pic-list-content>ul").position().left <  $(".detail-pic-list-content").width()){
			$(".detail-pic-list-content>ul").animate({left:"+=20"},500);
		}
	});
	//上一张结束
	
	//下一张开始
	$(".detail-pic-next").on("click",function(){
		if($(".detail-pic-list-content>ul").position().left > - $(".detail-pic-list-content>ul").width()){
			$(".detail-pic-list-content>ul").animate({left:"-=20"},500);
		}
	});
	//下一张结束
	
	//选择颜色款式开始
	$(".detail-type a").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	//选择颜色款式结束
	
	//增加、减少产品数量开始
	$(".reduce").on("click",function(){
		var $num = parseInt($(".count").html());
		if($num>1){
			$(".count").html($num-1);
		}
	});
	$(".add").on("click",function(){
		var $num = parseInt($(".count").html());
		if($num<5){
			$(".count").html($num+1);
		}else{
			alert("最多只能购买5个");
		}
	});
	//增加、减少产品数量结束
	
	//添加到购物车开始
	$(".addToShoppingCar").on("click",function(){
		
		var myorderStatus = "myorderStatus";
		if(getCookie(isLogin) == 1){
			addToCar();
			addCookie(myorderStatus,0,5);
		}else{
			alert("请先登录账号")
			addCookie("backTo",1,1)
			window.location = "login.html";
		}
	})
	
	function checkColor(){//检测选择颜色
		if($(".productColor .active").html() == ""){
			return "";
		}else{
			return $(".productColor .active").html();
		}
	}
	
	function checkType(){//检测选择款式
		if($(".productType .active").html() == ""){
			return "";
		}else{
			return $(".productType .active").html();
		}
	}
	
//	function checkCount(){//判断数量是否大于1
//		if($(".count").val() == 0){
//			return 0;
//		}else{
//			return $(".count").val();
//		}
//	}
//	
	function addToCar(){
		//购物车cookie
		var myProductName = "myproductname";
		var myProductImg = "myproductimg";
		var myProductPrise = "myproductprise";
		var myProductColor = "myproductcolor";
		var myProductType = "myproducttype";
		var myProductCount = "myproductcount";
		var productName = $(".productName").html();
		var productImg = $(".productImg").attr("src");
		var productPrice = $(".productPrice span").eq(0).html();
		var productColor = $(".productColor .active").html();
		var productType = $(".productType .active").html();
		var productCount = $(".count").html();
		if(checkColor() == null){
			$('<div class="prompt">至少选择一种颜色</div>').insertAfter($(".addToShoppingCar")).delay(1000).fadeOut(1000,function(){$(this).remove()});
			return;
		}else if(checkType() == null){
			$('<div class="prompt">至少选择一种款型</div>').insertAfter($(".addToShoppingCar")).delay(1000).fadeOut(1000,function(){$(this).remove()});
			return;
		}else{
			addCookie(myProductName,productName,5);
			addCookie(myProductImg,productImg,5);
			addCookie(myProductPrise,productPrice,5);
			addCookie(myProductColor,productColor,5);
			addCookie(myProductType,productType,5);
			addCookie(myProductCount,productCount,5);
			window.location.href = "shoppingcar.html"
		}
	}
	//添加到购物车结束
	
	//收藏商品开始
	$(".collectBtn").on("click",function(){
//		alert()
		if(getCookie(isLogin) == 1){
			addToCollect();
		}else{
			window.location = "login.html";
		}
	})
	function addToCollect(){
		var myCollectName = "mycollectname";
		var myCollectImg = "mycollectimg";
		var myCollectPrise = "mycollectprise";
		var myCollectColor = "mycollectcolor";
		var myCollectType = "mycollecttype";
		var collectName = $(".productName").html();
		var collectImg = $(".productImg").attr("src");
		var collectPrice = $(".productPrice span").eq(0).html();
		var collectColor = $(".productColor .active").html();
		var collectType = $(".productType .active").html();
		if(checkColor() == null){
			$('<div class="prompt">至少选择一种颜色</div>').insertAfter($(".addToShoppingCar")).delay(1000).fadeOut(1000,function(){$(this).remove()});
			return;
		}else if(checkType() == null){
			$('<div class="prompt">至少选择一种款型</div>').insertAfter($(".addToShoppingCar")).delay(1000).fadeOut(1000,function(){$(this).remove()});
			return;
		}else{
			//存储收藏的商品cookie
			alert("成功添加到收藏夹")
			addCookie(myCollectName,collectName,5);
			addCookie(myCollectImg,collectImg,5);
			addCookie(myCollectPrise,collectPrice,5);
			addCookie(myCollectColor,collectColor,5);
			addCookie(myCollectType,collectType,5);
		}
	}
	
	//吸顶开始
	var top = $("#nav").offset().top;
	$(window).scroll(function(){	
		var $left = ($(window).width()-$("#nav").width())/2;
		if($(window).scrollTop() > top){
			$("#nav").css({"position":"fixed","top":"0","left":$left});
		}else{
			$("#nav").css({"position":"relative","left":"0","top":"0"});
		}
	});
	//吸顶结束
});
