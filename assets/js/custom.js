$(document).ready(function() {
	$('.mobile-menu-toggle').click(function() {
		$('.header_menu').toggleClass('mobile-menu');
	})
	$('.mobile-menu').click(function() {
		this.removeClass('mobile-menu');
	});
})