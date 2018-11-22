/*function logoContainerHeight() {
	$('.logo_container').height($('header').height());
}*/

$(document).ready(function () {
	$('#sidebar .menu li.menu-item-has-children > a').click(function(event) {
		event.preventDefault();
		$(this).siblings('ul').slideToggle();
		$(this).parent().toggleClass('rotate');
	});
	
	$('.hero-slider, .solution_carousel').slick({
	    //autoplay: true,
		dots: true,
		adaptiveHeight: true,
	});
});