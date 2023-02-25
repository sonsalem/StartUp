$('.toggle-switch').click(function(){
    $(this).toggleClass('active')
    $('.links').toggleClass('active')
});
// $('.img-open').click(function(){
//     $(this).toggleClass('active')
//     $('#body').toggleClass('active')
// });

$(document).ready(function(){
    $(".owl-say").owlCarousel({
        loop:true,
        nav:true,
        // autoplayTimeout:4000,
        // autoplay: true,
        items:1,
        margin: 20,
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:2,
            },
        }
    }
    );
});