$( document ).ready(function() {
	"use strict";

    $('.hamburger-btn').click( function() {
	  $('#header-menu').toggleClass('opening').toggleClass('open-desktop');
	  $(this).toggleClass('open');
	});

	$('.user-photos').on('click', '.photo', function() {

		var index = $(this).index();
		
		$('.photo').removeClass('active-user-img');
		$('.comment-text>p').removeClass('active-comment').addClass('hidden');
		$('.user-name>span').removeClass('active-name').addClass('hidden');
		$('.user-city>span').removeClass('active-city').addClass('hidden');

		$('.photo').eq(index).addClass('active-user-img');
		$('.comment-text>p').eq(index).addClass('active-comment').removeClass('hidden');
		$('.user-name>span').eq(index).addClass('active-name').removeClass('hidden');
		$('.user-city>span').eq(index).addClass('active-city').removeClass('hidden');
	});

	$('.date-check-btn').click( function(e) {
		e.preventDefault();
		$('.popup').css({'top': $(window).scrollTop()}).removeClass('invisible');

		$('#guests').addClass('hidden');
	});

	$('#close-popup-form').click( function(e) {
		e.preventDefault();
		$('.popup').addClass('invisible');
	})

	$('#popup-form-submit').click( function(e) {
		e.preventDefault();
		console.log('Form sent to the server');
		$('.popup').addClass('invisible');
	})

	$('#persons-btn').click( function(e) {
		e.preventDefault();
		$(this).toggleClass('up, down');
		$('#guests').toggleClass('hidden');		
		var value1 = $('#aldmen').val();
		var value2 = $('#kids').val();
		var newValue = +value1 + +value2;
		$('#persons').val(`Количество гостей: ${newValue}`);	
		$('#quantity').val(newValue);
		dateCheck2Marg();
	})
	
	$('.more').click( function (e) {
		e.preventDefault();

		var value =	$(this).parent().find('input').val();
		value = +value + 1;
		$(this).parent().find('input').val(value);
		if (value >= 1) {
			$(this).parent().find('a').css({'opacity' : '1'});
		}
		var value1 = $('#aldmen').val();
		var value2 = $('#kids').val();
		var newValue = +value1 + +value2;
		$('#persons').val(`Количество гостей: ${newValue}`);	
		$('#quantity').val(newValue);
	});

	$('.less').click( function (e) {
		e.preventDefault();

		var value =	$(this).parent().find('input').val();
		value = +value - 1;
		if (value < 0) return;
		$(this).parent().find('input').val(value);
		if (value < 1) {
			$(this).parent().find('a.less').css({'opacity' : '0.5'});
		}
		var value1 = $('#aldmen').val();
		var value2 = $('#kids').val();
		var newValue = +value1 + +value2;
		$('#persons').val(`Количество гостей: ${newValue}`);	
		$('#quantity').val(newValue);
	});

/*	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#header-menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('open').addClass('opening');
		}
	});*/

	function dateCheck2Marg(){
	    if ($(window).width() <= '460'){
			if (!$('#guests').hasClass('hidden')) {
				$('#dateCheck2').css({'margin-top' : '60px'});				
			}
			else {$('#dateCheck2').css({'margin-top' : '0'});}	    
		}
	};

	$('.slider-nav a').click( function(e) {
		e.preventDefault();
		var index = $(this).index();
		clearInterval(autoSliding);
		$('.slider-nav a').removeClass('active-dot');
		$('.slide').addClass('hidden').removeClass('current');

		$('.slide').eq(index).removeClass('hidden').addClass('current');
		$('.slider-nav a').eq(index).addClass('active-dot');
	});
	
	
	var autoSliding = setInterval( function () {
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