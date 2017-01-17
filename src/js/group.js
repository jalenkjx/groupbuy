var winWidth = window.innerWidth;
var fontSize = winWidth/750*100;
var html = document.documentElement;
html.style.fontSize = fontSize + "px";
window.onresize = function(){
	var winWidth = window.innerWidth;
	var fontSize = winWidth/750*100;
	var html = document.documentElement;
	html.style.fontSize = fontSize + "px";
}

require(['iscroll','jquery','nav','body'],function(Iscroll,$,Nav,Body){
	//清除touchmove默认事件
	document.addEventListener('touchmove',function(e){
		e.preventDefault();
	});
	//上拉加载更多的icon添加class
	Body.init.on('scroll',function(){
		Body.scrollup();
	});
	
	Nav.init();
	$('li','.nav').on('click',function(){
		$(this).children('a').addClass('act').parent().siblings().children('a').removeClass('act');
	})

	
	
	
})
