$(document).ready(function(){var e="#nav",t="active";$(".nav-button").click(function(){if($(this).toggleClass("active"),$(e).hasClass(t))$(e).animate({height:0},300),setTimeout(function(){$(e).removeClass(t).removeAttr("style")},300);else{var a=$(e).css("height","100vh").height();$(e).height(0).animate({height:a},300),setTimeout(function(){$(e).addClass(t).removeAttr("style")},300)}}),$(".grid-intro").owlCarousel({items:1,animateOut:"slideOutDown",animateIn:"flipInX",smartSpeed:450,loop:!0,center:!0,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]})});