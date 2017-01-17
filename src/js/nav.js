define(['jquery','iscroll'],function($,Iscroll){
	var nav = {
		init:function(){
			var _this = this;
			console.log($('ul','.nav_scroll').children().length);
			var num = $('ul','.nav_scroll').children().length;
			$('.nav').width(num*1.4+'rem');
			console.log($('.nav').width());
			var	nav_scroll = new IScroll('.nav_scroll', { 
				scrollX: true, 
				scrollY: false, 
				mouseWheel: true 
			});
		}
		
	}
	return nav;
})