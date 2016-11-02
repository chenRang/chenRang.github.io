$(function(){
	$(document).ready(function(e){
	  var opt	=	{
		"speed"	:	"slow"		,	//变换速度,三速度可选 slow,normal,fast;
		"by"	:	"click"		,	//触发事件,click或者mouseover;
		"auto"	:	true		,	//是否自动播放;
		"sec"	:	2000	 		//自动播放间隔;

	  };
      $(".demo").IMGDEMO(opt);    
});
})