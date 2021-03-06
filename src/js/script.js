$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        slidesToShow: 1,
        speed:2500,
        infinite:true,
        autoplay:false,
        autoplaySpeed: 5000,
        leftMode: true,
        variableWidth:true,
        responsive: [
            {
                breakpoint:768,
                settings: {
                    autoplaySpeed:4000
                }
            }
        ]
    });
});