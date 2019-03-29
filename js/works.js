// Global variables:

var max_width_xs=767;
var pagetop = $('.pagetop');
var workBG =$("#work_bg");
var w_index=0;
var w_total=3;
var workList = ['./img/worksBG.jpg', './img/workBG05.png', './img/workBG03.png'];
var captureList = ["2003 -No title-","2007 -Corvus 2013-","2009 -Song for Uryes-"];

$(document).ready(function() {
		
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} 
		else {
			pagetop.fadeOut();
		}
	});
	
	$(function() {
	    $("img").on('contextmenu', function(e) {
	        return false;
	    });
	});    

	$(function() {
		$('a[href^="#"]').click(function() {
			var velocidad = 400;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('body,html').animate({scrollTop:position}, velocidad, 'swing');
			return false;
		});
	});
	
	alternateWorks();
})


function alternateWorks() {
	w_index = w_index + 1;
	
	if(w_index >= w_total) {
		w_index = 0;
	}
	
	document.getElementById('work_bg').style.backgroundImage = "url(" + workList[w_index] +  ")";
	document.getElementById('captureText').innerHTML = captureList[w_index];
	
	setTimeout(function(){ 
		alternateWorks();
	}, 10000);
}
