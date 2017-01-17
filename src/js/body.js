define(['jquery','iscroll'],function($,Iscroll){
	
	var body_scroll = {
		init:new IScroll('.body_scroll', { probeType: 3, mouseWheel: true }),
		scrollup:function(){
			var _this = this;
			var upIcon = $("#up-icon");
			var distance = 50; //滑动距离
			var y = _this.init.y,
	            maxY = _this.init.maxScrollY - y,
	            upHasClass = upIcon.hasClass("reverse_icon");

	        if(maxY >= distance){
	            !upHasClass && upIcon.addClass("reverse_icon");
	            return "";
	        }else if(maxY < distance && maxY >=0){
	            upHasClass && upIcon.removeClass("reverse_icon");
	            return "";
	        }
		}
	}
	
	return body_scroll;
})