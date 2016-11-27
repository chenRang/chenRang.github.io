;$(function() {
	$.fn.extend({
		movePic: function($ele,num,width,timer,time,$navBtn,$prev,$next) {
			
			var $index = 0;
			var timer = timer;
			var _width = -width;
			function move() {
				clearInterval(timer);
				timer = setInterval(function() {
					$index++;
					$ele.animate({
						"left": $index * _width
					}, 1000,function(){
						if ($index == num) {
							$index = 0;
							$ele.css("left", 0);	
						}
						if($navBtn){
							$navBtn.eq($index).css("background","#CF0101").siblings().css("background","#ccc");
						}
					})
				}, time)
			}
			move();
			$ele.parent().hover(function() {
				clearInterval(timer);
			}, function() {
				move();
			});
			
			if($navBtn){
				$navBtn.on("click",function(){
					$index = $(this).index();
					$ele.animate({left:$index *_width},1000);
					$navBtn.eq($index).css("background","#CF0101").siblings().css("background","#ccc");
				})
			}
			
			if($prev){
				$prev.on("click",function(){
					$index--;
					if($index<0){
						$index = num - 1
					}
					$ele.animate({left:$index * _width},1000);
					$navBtn.eq($index).css("background","#CF0101").siblings().css("background","#ccc");
				})
			}
			
			if($next){
				$next.on("click",function(){
					$index++;
					if($index>=num){
						$index = 0;
					}
					$ele.animate({left:$index * _width},1000);
					$navBtn.eq($index).css("background","#CF0101").siblings().css("background","#ccc");
				})
			}
			
			
		}
	});
});
