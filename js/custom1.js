
$(document).ready(function() {
	
	"use strict";
	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 1000);
	});
		function scrollToID(id, speed){
		var offSet = 0;
		var targetOffset = $(id).offset().top - offSet;
		$('html,body').animate({scrollTop:targetOffset}, speed);
	}
	
	
	
	$(".enq_btn").on('click', function() {
   		$(".form_wrap").addClass('form_active');
	});
	
	$(".wa_content .btn").click(function() {
   		$(".form_wrap").addClass('form_active');
	});
	
	$(".course_section .block .title a").on('click', function() {
   		$(".form_wrap").addClass('form_active');
	});

	$(".close_btn").on('click', function() {
   		$(".form_wrap").removeClass('form_active');
	});
	
	
	

	
});


