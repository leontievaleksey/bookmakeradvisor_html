(function($) {

	$('#header_dropdown_button').on('click', function(evt) {

		$(this).toggleClass('opened');
		$("#header_main_menu").slideToggle();

	});

	$('#header_search_button').on('click', function(evt) {

		$('#header_search_menu, #search_overlay').slideDown(function(){
			$('#header_quick_links_menu').slideDown();
		});

	});

	$('#header_lang_button').on('click', function(evt) {

		$(this).toggleClass('active');
		$("#header_lang_menu").slideToggle();

	});

	$('#header_search_close, #search_overlay').on('click', function(evt) {

		$('#header_quick_links_menu').slideUp(function(){
			$('#header_search_menu, #search_overlay').slideUp();
		});
		
	});

	$('#banner_menu_carousel').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  centerMode: false,
	  variableWidth: true,
	  prevArrow: '<i class="fa fa-angle-left banner_carousel_arrow_left banner_carousel_arrow"></i>',
	  nextArrow: '<i class="fa fa-angle-right banner_carousel_arrow_right banner_carousel_arrow"></i>'
	});

})(jQuery);