$(document).ready(function(){
    $(".hidden").animate({opacity: 1}, 1500).removeClass("hidden");
    $(".landing-photo").animate({right: 0}, 1000).removeClass("hidden");
})

var passed = false;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 1850 && !passed) {
        $('.menu').removeClass('hidden');
        passed = true;
    } 
    if ($(window).scrollTop() < 1850 && passed) {
        $('.menu').addClass('hidden');
        passed = false;
    } 

});