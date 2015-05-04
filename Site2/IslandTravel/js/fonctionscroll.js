$(document).ready(function () {
		$(function () {
			var $window = $(window);
			var $height1 = 135;
			var $height2 = 685;
			
			$window.scroll(function () {
				if ($window.scrollTop() > $height1){
				$('.containermenu').css('width','100%');
				$('.containermenu').css('position','fixed');
				$('.containermenu').css('top','0px');
				}
			});
			$window.scroll(function () {
				if ($window.scrollTop() > $height2){
				$('.containermenu').css('background','#252525');
				$('.nav li:nth-child(6n+1)').css('background','#252525');
				$('.nav li:nth-child(6n+2)').css('background','#252525');
				$('.nav li:nth-child(6n+3)').css('background','#252525');
				$('.nav li:nth-child(6n+4)').css('background','#252525');
				$('.nav .navtoogle').css('background','#252525');
				}
			});
			$window.scroll(function () {
				if ($window.scrollTop() < $height2){
				$('.containermenu').css('background','#D35400');
				$('.nav li:nth-child(6n+1)').css('background','#D35400');
				$('.nav li:nth-child(6n+2)').css('background','#D35400');
				$('.nav li:nth-child(6n+3)').css('background','#D35400');
				$('.nav li:nth-child(6n+4)').css('background','#D35400');
				$('.nav .navtoogle').css('background','#D35400');
				
				}
			});
			$window.scroll(function () {
				if ($window.scrollTop() < $height1){
				$('.containermenu').css('width','60%');
				$('.containermenu').css('position','');
				$('.containermenu').css('top','150px');
				}
			});
			
		});
		
});