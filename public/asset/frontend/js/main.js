/*show dropdown on hover*/
$(document).ready(function(){
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
});
/*show dropdown on hover*/
/*slider active*/
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

/*slider*/
$('.owl-carousel').owlCarousel({
    animateOut: 'lightSpeedOut',
    animateIn: 'slideInLeft',
    loop:true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});
/*slider*/
/*landing elements*/

/*landing elements*/
/*testimonial*/

/*testimonial*/
