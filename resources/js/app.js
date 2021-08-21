(function ($) {

	"use strict";

	$(window).on("scroll", function () {
		AOS.init({
			disable: 'mobile',
			duration: 800,
			anchorPlacement: 'center-bottom'
		});
	});


	// Header Type = Fixed
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});
	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}
	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(30);
				}
				$('html,body').animate({
					scrollTop: (target.offset().top) + 1
				}, 900);
				return false;
			}
		}
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);

$(function () {
	$("#wizard").steps({
		headerTag: "h4",
		bodyTag: "section",
		transitionEffect: "fade",
		enableAllSteps: true,
		transitionEffectSpeed: 300,
	});
	// Create Steps Image
	$('.steps ul li:first-child').append('<img src="images/" alt="" class="step-arrow">').find('a').append('<img src="resources/img/decentralize.png" alt=""> ');
	$('.steps ul li:nth-child(2').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="resources/img/engage.png" alt="">');
	$('.steps ul li:nth-child(3)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="resources/img/trust.png" alt="">');
	$('.steps ul li:last-child a').append('<img src="resources/img/launch.png" alt="">');

});

var btn = $('#button');

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, '300');
});
