(function($) {
	/* EMPTY LINKS PREVENT */
	$('a').on('click', function(evt) {
		if( $(this).attr('href') == '#' ) {
			evt.preventDefault();
		}
	});

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


/* ACCORDEON */
	$('.accordeon_trigger').on('click', function(evt) {
		evt.preventDefault();
		if ($(this).closest('.accordeon_row').hasClass('opened')) {
			$(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
			$(this).closest('.accordeon_row').removeClass('opened').find('.accordeon_content').slideUp();
		} else {
			$(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
			$(this).closest('.accordeon_row').addClass('opened').find('.accordeon_content').slideDown();	
		}
		
	});

/* TABS 2 COLS */
	$('.tab_switcher').on('click', function(evt) {
		evt.preventDefault();

		if ( $(this).hasClass('active') ) {
			return false;
		}

		$(this).closest('.tabs').find('.tab_switcher.active, .tab_content.active').removeClass('active');

		var tabIndex = $(this).attr('data-tab-content');
		var nextTab = $(this).closest('.tabs').find('.tab_content')[tabIndex - 1];
		$(this).addClass('active');

		// if ($(this).closest('.tabs').find('.tab_content')[tabIndex])
	 	$(nextTab).addClass('active');

	});


/* OPEN COMMENT */
	$('.comment_item .show_more, .comment_item .show_less').on('click', function(evt) {
		// $(this).hide(0, function() {
		// 	$(this).closest('.comment_short').addClass('opened').find('.show_less').show(0);

		// });
		$(this).closest('.comment_short').toggleClass('opened')
	});

/* BANNER RATING BLOCK */
	$('.banner_rating_block_action').on('click', function(evt) {

		$(this).find('.banner_rating_block_icon').toggleClass('hidden');

		$(this).closest('.banner_rating_block_wrapper').find('.banner_rating_hidden_blocks').toggleClass('hidden');

	});

})(jQuery);