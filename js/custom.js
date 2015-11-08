/*———————————————————————————————————————————————————————————————————————————*/
/*  Sticky Navbar                                                            */
/*———————————————————————————————————————————————————————————————————————————*/
$(document).ready(function() {
    $(".navbar").sticky({topSpacing: 0});
});

/*———————————————————————————————————————————————————————————————————————————*/
/*  Main Flex Slider                                                         */
/*———————————————————————————————————————————————————————————————————————————*/
$(window).load(function() {
    $('.main-flex-slider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "fade",
        controlNav: false
    });
});

/*———————————————————————————————————————————————————————————————————————————*/
/*  Auto Close Responsive Navbar on Click                                    */
/*———————————————————————————————————————————————————————————————————————————*/
function close_toggle() {
    if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });
    }
    else {
        $('.navbar .navbar-default a').off('click');
    }
}
close_toggle();
$(window).resize(close_toggle);

/*———————————————————————————————————————————————————————————————————————————*/
/*  Owl Carousel                                                             */
/*———————————————————————————————————————————————————————————————————————————*/
$(document).ready(function() {
    $("#testi-carousel").owlCarousel({
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        startDragging: true,
        autoPlay: true
    });
    $("#work-slide").owlCarousel({
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        startDragging: true,
        autoPlay: 10000
    });
});

/*———————————————————————————————————————————————————————————————————————————*/
/*  Counter                                                                  */
/*———————————————————————————————————————————————————————————————————————————*/
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});

/*———————————————————————————————————————————————————————————————————————————*/
/*  Scroll Animation                                                         */
/*———————————————————————————————————————————————————————————————————————————*/

var wow = new WOW(
        {
            boxClass: 'wow',          // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 100,              // distance to the element when triggering the animation (default is 0)
            mobile: false             // trigger animations on mobile devices (true is default)
        }
);
wow.init();

/*———————————————————————————————————————————————————————————————————————————*/
/*  Smooth Scroll                                                            */
/*———————————————————————————————————————————————————————————————————————————*/
$(function() {
    $('.scrollto a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});

/*———————————————————————————————————————————————————————————————————————————*/
/*  Backstretch                                                              */
/*———————————————————————————————————————————————————————————————————————————*/
$(".fullscreen").backstretch([
    "img/showcase-5.jpg",
    "img/showcase-2.jpg",
    "img/showcase-3.jpg"
], {duration: 5000, fade: 1000});

/*———————————————————————————————————————————————————————————————————————————*/
/*  Back To Top                                                              */
/*———————————————————————————————————————————————————————————————————————————*/
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    setTimeout(function() {
        $.stellar({
            horizontalScrolling: false
        });
    }, 1000);
});
