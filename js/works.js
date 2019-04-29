// Global variables:

var max_width_xs=767;
var pagetop = $('.pagetop');
var w_index=0;
var w_total=5;
var graphList = ['./img/song4uryes-3.png', './img/corvus2013.jpg', './img/corvus2013-2.jpg', './img/corvus2013-3.jpg', './img/song4uryes.png'];
var graphCapList = ["Song for Uryes -2010-", "Corvus2013 -2009-", "Corvus2013 -2009-", "Corvus2013 -2009-", "Song for Uryes -2010-"];
var p_index=0;
var p_total=4;
var picList = ['./img/worksBG2.jpg', './img/worksBG.jpg', './img/picBG03.jpg', './img/worksBG3.jpg'];
var picCapList = ["-2019-", "-2019-", "-2019-", "-2019-"];

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
	alternatePics();
})

function alternateWorks1() {
	$('#captureText').toggleClass('type');
	
	setTimeout(function(){ 
		alternateWorks();
	}, 2800);
}
function alternateWorks() {
	w_index = w_index + 1;
	
	if(w_index >= w_total) {
		w_index = 0;
	}
	
	document.getElementById('graphicNovel_bg').style.backgroundImage = "url(" + graphList[w_index] +  ")";
	document.getElementById('captureText').innerHTML = graphCapList[w_index];
	$('#captureText').toggleClass('type');
	
	setTimeout(function(){ 
		alternateWorks1();
	}, 10000);

}

function alternatePics1() {
	$('#picCapText').toggleClass('type');
	
	setTimeout(function(){ 
		alternatePics();
	}, 2800);
}
function alternatePics() {
	p_index = p_index + 1;
	
	if(p_index >= p_total) {
		p_index = 0;
	}
	
	document.getElementById('photo_bg').style.backgroundImage = "url(" + picList[p_index] +  ")";
	document.getElementById('picCapText').innerHTML = picCapList[p_index];
	$('#picCapText').toggleClass('type');
	
	setTimeout(function(){ 
		alternatePics1();
	}, 10000);
}
