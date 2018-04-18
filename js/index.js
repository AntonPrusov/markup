$( document ).ready(function() {
	"use strict";

    $('.hamburger-btn').click(function() {
	  $('#header-menu').toggleClass('opening').toggleClass('open-desktop');
	  $(this).toggleClass('open');
	});

	/*if ($('#header-menu').hasClass('opening')) {
		$('body').on('click', $(':not(.opening)'), function() {
			$('.opening').hide();
			$('.hamburger-btn').removeClass('open');
		});
	}*/

	setInterval( function () {
		nextSlide();
	}, 3000 );

	$('body').on('click', '.slider>button', function() {
		clearInterval(autoSliding);
	});

	$('#slider-right-btn').click( function() {
		nextSlide();
	});

	$('#slider-left-btn').click( function() {
		prevSlide();
	});

	var nextSlide = function() {
		var slides = $('.slide');
		var dots = $('.slider-nav a');
		var $currentSlide = $('.current', '.slider-content');
		var $currentDot = $('.active-dot', '.slider-nav');
		var index = $currentSlide.index();

		$currentSlide.removeClass('current').addClass('hidden');
		$currentDot.removeClass('active-dot');
		
		var newIndex = index === slides.length ? 0 : index;

		slides.eq(newIndex).removeClass('hidden').addClass('current');
		dots.eq(newIndex).addClass('active-dot');
	}

	var prevSlide = function() {
		var slides = $('.slide');
		var dots = $('.slider-nav a');
		var $currentSlide = $('.current', '.slider-content');
		var $currentDot = $('.active-dot', '.slider-nav');
		var index = $currentSlide.index();

		$currentSlide.removeClass('current').addClass('hidden');
		$currentDot.removeClass('active-dot');
		
		var newIndex = index === 1 ? slides.length - 1 : index - 2;

		slides.eq(newIndex).removeClass('hidden').addClass('current');
		dots.eq(newIndex).addClass('active-dot');
	}

});