// Global variables:
var current=1;
var total=4;
var max_width_xs=767;
var fadingMs=100;
// var well=document.getElementById('well');
var well=$("#well");
var dot1=$("#dot1");
var dot2=$("#dot2");
var dot3=$("#dot3");

$(document).ready(function() {
	var pagetop = $('.pagetop');
	
	thinking();
	
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
	
	
})

function thinking() {

	well.fadeIn(2000, function() { 
		dot1.fadeIn(1000, function() {
			dot2.fadeIn(1000, function() {
				dot3.fadeIn(1000, desaparecer);
			});
		});
	});
}

function desaparecer() {

	well.fadeOut(2000);
	dot1.fadeOut(2000);
	dot2.fadeOut(2000);
	dot3.fadeOut(2000, thinking);
}

function handleClickLink(event) {
	const block = event.currentTarget.dataset.block;
	document.getElementById(block).scrollIntoView({ behavior: 'smooth'});
}

document.querySelectorAll('.link').forEach((elem) => {
	elem.addEventListener('click', handleClickLink);
});

document.getElementById('go_prev').addEventListener('touchstart', go_prev);
document.getElementById('go_prev').addEventListener('click', go_prev);

document.getElementById('go_next').addEventListener('touchstart', go_next);
document.getElementById('go_next').addEventListener('click', go_next);

function go_next(event) {
	event.preventDefault();
	if ($(window).width() <= max_width_xs) { // Case xs
		inc=1;
	}
	else {
		inc=2;
	}

	next = current + inc;
	
	if(next <= total) {
		jump = 'item'.concat(next);
		current = next;
		document.getElementById(jump).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
		if ((current+inc) > total) {
			document.getElementById('go_next').style.opacity=0;
		}
		if (current > 1) {
			document.getElementById('go_prev').style.opacity=1;
		}
	}
}

function go_prev(event) {
	event.preventDefault();
	if ($(window).width() <= max_width_xs) { // Case xs
		inc=1;
	}
	else {
		inc=2;
	}

	next = current - inc;
	if(next > 0) {
		jump = 'item'.concat(next);
		current = next;
		document.getElementById(jump).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
		if ((current-inc) < 1) {
			document.getElementById('go_prev').style.opacity=0;
		}
		if (current<total) {
			document.getElementById('go_next').style.opacity=1;
		}
	}
	else {
		current = 1;
		document.getElementById('go_prev').style.opacity=0;
	}
}