$(document).ready(function() {
	// Toggle navigation menu when small screen. 
	$(".navbar-button").on("click", function() {
		$("body").toggleClass("opennavbar");
	});
	
	// Set collapse open or close by screen width.
	var windowWidth = $(window).width();
	if( windowWidth <= 991 ) {
		$(".panel-title a").attr("aria-expanded", false);
		$(".panel-collapse").removeClass("in");
	} else {
		$(".panel-title a").attr("aria-expanded", true);
		$(".panel-collapse").addClass("in");
	}

	// For WORKS Project modal.
    $("a[data-target='#projectModalLG']").on("click", function(ev) {
        ev.preventDefault();
        var target = $(this).attr("href");
        $("#projectModalLG .modal-content").load(target, function() {
            $("#projectModalLG").modal("show");
        });
    });
});