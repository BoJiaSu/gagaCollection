$(document).ready(function() {
    // Toggle navigation menu when small screen. 
    $(".previous-button").on("click", function() {
        window.history.back();
    });
    $(".navmenu-toggle").on("click", function() {
        $("body").toggleClass("opennavbar");
    });

    // Set collapse open or close by screen width.
    var windowWidth = $(window).width(),
        windowHeight = $(window).height();
    if (windowWidth <= 991) {
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

    $('[data-toggle="tooltip"]').tooltip();

    // For WORK swiper.
    if ($(".work-swiper").length) {
	    if (windowWidth <= 991 && windowHeight > windowWidth) {
	        initialSwiper("small");
	    } else if (windowWidth <= 991 && windowHeight < windowWidth) {
	        initialSwiper("bigwidth");
	    } else {
	        initialSwiper("bigwidth");
	    }
    }
});
// $(window).resize(function() {
//     var windowWidth = $(window).width(),
//         windowHeight = $(window).height();

//     // For WORK swiper.
//     if (windowWidth <= 991 && windowHeight > windowWidth) {
//         initialSwiper("small");
//     } else if (windowWidth <= 991 && windowHeight < windowWidth) {
//         initialSwiper("bigwidth");
//     } else {
//         initialSwiper("bigwidth");
//     }
// });

function initialSwiper(screenType) {
    if (screenType == "bigwidth") {
        $(".work-swiper").toggleClass("verticalSwiper");
        var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            direction: 'vertical',
            touchRatio: 0.2,
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    } else {
        $(".work-swiper").toggleClass("horizontalSwiper");
        var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    }
}
