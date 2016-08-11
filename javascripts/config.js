$(document).ready(function() {
	$(".navbar-button").on("click", function() {
		$("body").toggleClass("opennavbar");
	});
	
	var windowWidth = $(window).width();
	if( windowWidth <= 991 ) {
		$(".panel-title a").attr("aria-expanded", false);
		$(".panel-collapse").removeClass("in");
	} else {
		$(".panel-title a").attr("aria-expanded", true);
		$(".panel-collapse").addClass("in");
	}
});