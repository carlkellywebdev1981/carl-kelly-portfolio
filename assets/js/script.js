/*--------------------------------------------------------
    NAV SCROLL 
--------------------------------------------------------*/

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});



/*--------------------------------------------------------
    MOBILE NAV 
--------------------------------------------------------*/
$(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
        icon.addClass("ion-close-round");
        icon.removeClass("ion-navicon-round");
    } else {
        icon.addClass("ion-navicon-round");
        icon.removeClass("ion-close-round");
    }
});

/*--------------------------------------------------------
    STICKY NAV 
--------------------------------------------------------*/

$(".js--section-projects").waypoint(function (direction) {
    if (direction == "down") {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
}, {
    offset: "60px;"
});

/*--------------------------------------------------------
    ANIMATIONS
--------------------------------------------------------*/

jQuery(document).ready(function () {
    jQuery('.post').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated1 bounceInRight', // Class to add to the elements when they are visible
        offset: 100
    });
});
jQuery(document).ready(function () {
    jQuery('.post1').addClass("hideme").viewportChecker({
        classToAdd: 'visable animated3 fadeIn', // Class to add to the elements when they are visible
        offset: 100
    });
});
jQuery(document).ready(function () {
    jQuery('.post2').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated2 bounceInLeft', // Class to add to the elements when they are visible
        offset: 100
    });
    $('.animated2').attr('style', 'visibility: visible !important;');
});
jQuery(document).ready(function () {
    jQuery('.post3').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated1 rubberBand', // Class to add to the elements when they are visible
        offset: 100
    });
    $('.animated3').attr('style', 'visibility: visible !important;');
});
jQuery(document).ready(function () {
    jQuery('.post4').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated1 pulse', // Class to add to the elements when they are visible
        offset: 100
    });
});
jQuery(document).ready(function () {
    jQuery('.post5').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated2 swing', // Class to add to the elements when they are visible
        offset: 100
    });
});
$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});


/*--------------------------------------------------------
    SCROLL TO THE SELECTED MENU ITEM ON PAGE
--------------------------------------------------------*/

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
/*--------------------------------------------------------
    SMOOTH SCROLLING ANCHOR LINKS
--------------------------------------------------------*/
$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

/*--------------------------------------------------------
    TYPE ANIMATION
--------------------------------------------------------*/
$(function () {
    $(".write").typed({
        strings: ["I'M CARL KELLY", "NICE TO MEET YOU!", "I'M CARL KELLY"],
        typeSpeed: 160,
        backSpeed: 160,
        startDelay: 2000,
        loop: false,
    });
});


/*--------------------------------------------------------
    ANIMATIONS ON SCROLL
--------------------------------------------------------*/
$(" .js--wp-1").waypoint(function (direction) {
    $(" .js--wp-1").addClass("animated fadeIn");
}, {
    offset: "50%"
});
$(" .js--wp-2").waypoint(function (direction) {
    $(" .js--wp-2").addClass("animated fadeInUp");
}, {
    offset: "50%"
});
$(" .js--wp-3").waypoint(function (direction) {
    $(" .js--wp-3").addClass("animated fadeIn");
}, {
    offset: "50%"
});
$(" .js--wp-4").waypoint(function (direction) {
    $(" .js--wp-4").addClass("animated pulse");
}, {
    offset: "50%"
});