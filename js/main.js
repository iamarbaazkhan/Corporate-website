$('.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
});



//carousel slider
$(function () {

    $("#client-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});



//NAVBAR 	
$(function(){
   
    $("a.smooth-scroll").click(function(event){
       
        event.preventDefault();
        
        //get id like #about ,#products..
        var section = $(this).attr("href");
        
        $('html , body').animate({
            scrollTop:$(section).offset().top -49
        }, 1250, "easeInOutExpo");
    });
});

