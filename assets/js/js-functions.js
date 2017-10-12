jQuery(document).ready(function() {
	"use strict";
		
	/* Top Offer Banner slider */
	jQuery("#top_offer_banner .slider-items").owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsDesktop: [1024, 1], //5 items between 1024px and 901px
		itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
		itemsTablet: [768, 1], //2 items between 600 and 0;
		itemsMobile: [360, 1],
		navigation: false,
		//navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
		slideSpeed: 500,
		pagination: true,
		autoPlay: 6000
	});
		
	/* Special Deals1 slider */
	jQuery("#special_deals1 .slider-items").owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsDesktop: [1024, 1], //5 items between 1024px and 901px
		itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
		itemsTablet: [768, 1], //2 items between 600 and 0;
		itemsMobile: [360, 1],
		navigation: false,
		slideSpeed: 500,
		pagination: true,
		autoPlay: 6000
	});
		
	/* Special Deals2 slider */
	jQuery("#special_deals2 .slider-items").owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsDesktop: [1024, 1], //5 items between 1024px and 901px
		itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
		itemsTablet: [768, 1], //2 items between 600 and 0;
		itemsMobile: [360, 1],
		navigation: false,
		slideSpeed: 500,
		pagination: true,
		autoPlay: 6000
	});
	
	/* Testimonial Slider slider */
	jQuery("#testimonial_slider .slider-items").owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsDesktop: [1024, 1], //5 items between 1024px and 901px
		itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
		itemsTablet: [768, 1], //2 items between 600 and 0;
		itemsMobile: [360, 1],
		navigation: false,
		slideSpeed: 500,
		pagination: true,
		autoPlay: 6000
	});
	
});

