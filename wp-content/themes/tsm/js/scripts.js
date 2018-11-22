$(document).ready(function () {
	$('#sidebar .menu li.menu-item-has-children > a').on('click touchstart touchend', function (event) {
		event.preventDefault();
		$(this).siblings('ul').slideToggle();
		$(this).parent().toggleClass('rotate');
	});
	
	$('.hero-slider, .solution_carousel').slick({
	    //autoplay: true,
		dots: true,
		adaptiveHeight: true,
	});
	
	// PAGINATION LINKS
	if ( $.trim( $('.half.prev-link').text() ).length == 0 ) {
	    $('.half.prev-link').hide();
	    $('.half.prev-link').next().css({'text-align' : 'right', 'width' : '100%'});
	}
	
	if ($('.the_solution_section').siblings().length == 0 ) { 
		$('.the_solution_section').css('width', '100%');
	}
});