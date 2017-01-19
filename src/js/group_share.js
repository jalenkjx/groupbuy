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
require(['jquery','iscroll'],function($,Iscroll){
	
			
	var w = document.getElementsByTagName('li')[0].offsetWidth;
	console.log(w);
	var length = document.getElementsByTagName('ul')[0].childElementCount;
	console.log(length);
//	var length= document.getElementsByTagName('li').length;
	document.getElementsByTagName('ul')[0].style.width = w*length +1+ 'px';
	
	var headicon = new IScroll('#headerIcon', { 
				scrollX: true, 
				scrollY: false, 
				mouseWheel: true,
				click:true
			});
	document.addEventListener('touchmove',function(e){
		e.preventDefault();
	})
	
	
	$('.look').on('click',function(){
		$(this).hide();
		$('.look2').show();
		$('.look_info').animate({
			"width":"100%",
			"height":"0"
		});
	})
	$('.look2').on('click',function(){
		$(this).hide();
		$('.look').show();
		$('.look_info').animate({
			"width":"100%",
			"height":"100%"
		});
	})
	
})
