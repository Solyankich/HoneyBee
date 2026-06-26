$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:2,
        autoplay:true,
        centerMode:true,
        responsive:[
            {
                breakpoint:1190,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
        

    });
});