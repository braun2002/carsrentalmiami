$(function(){
    var owl = $("#owl-demo").data('owlCarousel');
   //alert('its work');
    //TODO:Дикий костыль, потом доделат!
    $(".sel").hover(function(){
        $(".other").css("opacity", "1");
        $(".other").css("visibility", "visible");
    }, function(){

        $(".other").css("opacity", "0");
        $(".other").css("visibility", "hidden");
    });
    $(".other").hover(function(){
        $(".other").css("opacity", "1");
        $(".other").css("visibility", "visible");
    }, function(){

        $(".other").css("opacity", "0");
        $(".other").css("visibility", "hidden");
    });

    $(".icon-chevron-right").click(function(){
        owl.prev();
    });


});