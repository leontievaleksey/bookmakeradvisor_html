(function($) {

	$('#header_dropdown_button').on('click', function(evt) {

		if ( $(this).hasClass('opened') ) {

		}

		$(this).toggleClass('opened');
		$("#header_main_menu").slideToggle();



	});

})(jQuery);