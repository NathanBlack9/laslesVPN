$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        slidesToShow: 1,
        speed:2500,
        infinite:true,
        autoplay:true,
        autoplaySpeed: 5000,
        leftMode: true,
        variableWidth:true
    });
});