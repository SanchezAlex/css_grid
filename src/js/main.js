$(document).ready(function() {
    var a = '#nav';
    var b = 'active';

    $('.nav-button').click(function() {
        $(this).toggleClass('open');

        if ($(a).hasClass(b)) {
            $(a).animate({height:0},300);
            setTimeout(function(){
                $(a).removeClass(b).removeAttr('style');
            },300);
        } else {
            var c = $(b).height($(window).height() - 124 );
            $(a).height(0).animate({height:c},250);
            setTimeout(function(){
                $(a).addClass(b).removeAttr('style');
            },250);
        }
    });

    $('.grid-intro').owlCarousel({
        items: 1,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed: 450,
        loop: true,
        center: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]

    });
});