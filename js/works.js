// Global variables:

var max_width_xs=767;
var pagetop = $('.pagetop');
var workBG =$("#graphicNovel_bg");
var w_index=0;
var w_total=4;
var workList = ['./img/workBG03.png', './img/workBG05.png', './img/workBG03.png', './img/workBG05.png'];
var captureList = ["2003 -No title-","2007 -Corvus 2013-","2009 -Song for Uryes-","2007 -Corvus 2013-"];

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

function alternateWorks1() {

	$('#captureText').toggleClass('type');
	
	setTimeout(function(){ 
		alternateWorks();
	}, 2800);
}
function alternateWorks() {
	//document.getElementById('captureText').classList.remove("type");
	w_index = w_index + 1;
	
	if(w_index >= w_total) {
		w_index = 0;
	}
	
	document.getElementById('graphicNovel_bg').style.backgroundImage = "url(" + workList[w_index] +  ")";
	document.getElementById('captureText').innerHTML = captureList[w_index];
	$('#captureText').toggleClass('type');
	
	setTimeout(function(){ 
		alternateWorks1();
	}, 10000);
}