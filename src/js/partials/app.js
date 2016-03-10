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



    $(".dropdown").click(function(){
        if($(this).hasClass("disabled")){
            return false;
        }else{
            $(this).find("dd").css("display", "block");
            $(this).addClass("active");
        }

    });
    $("dd").find("li").click(function(){
        var item = $(this).find("i");
        var parent = $(this).parent("dl");
        var p = parent.find("dt");
        //alert(item.text());
        $("dd").hide();

        $(".active").find("dt").find("i").html(item.text());
    });
    $("dd").hover(function(){

    }, function(){
        $(this).hide();
        $(".dropdown").removeClass("active");
    });

    $(".check").click(function(){
        if($(this).hasClass("ch")){
            $(this).removeClass("ch");

            $("#off").find(".dropdown").removeClass("disabled");
            return false;
        }else{
            if(($("#up").find("#state").text() != "State")&&($("#up").find("#location").text() != "location")) {
                $("#off").find("#state").html($("#up").find("#state").text());
                $("#off").find("#location").html($("#up").find("#location").text());

                $("#off").find(".dropdown").addClass("disabled");
                $(this).addClass("ch");
                return false;
            }else{
                alert("Select location"); //TODO:view the error div in form
                return false;
            }

        }

    });


    // Mobiscroll Date & Time initialization
    var now = new Date();

    // Mobiscroll Date & Time initialization
    $('#datetimeInvalid-demo').mobiscroll().datetime({
        theme: $('#theme').val(),                                             // Specify theme like: theme: 'ios' or omit setting to use default
        lang: $('#language').val(),                                           // Specify language like: lang: 'pl' or omit setting to use default
        display: "inline",                                         // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: $('#mode').val(),                                               // More info about mode: http://docs.mobiscroll.com/2-17-1/datetime#!opt-mode
        minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate()),  // More info about minDate: http://docs.mobiscroll.com/2-17-1/datetime#!opt-minDate
        invalid: [ 'w0', 'w6', '5/1', '12/24', '12/25']                       // More info about invalid: http://docs.mobiscroll.com/2-17-1/datetime#!opt-invalid
    });

    $('#datetimeInvalid-show').click(function () {
        $('#datetimeInvalid-demo').mobiscroll('show');
        return false;
    });

    $('#datetimeInvalid-clear').click(function () {
        $('#datetimeInvalid-demo').mobiscroll('clear');
        return false;
    });

    $(".datepick").hover(function(){

    },function(){
        $(this).slideUp();
    });

    $("#up").find(".input").click(function(){
        $(".datepick").slideDown();
        $("#datetimeInvalid-demo").change(function(){
            $("#time-up").html($(this).val());
        });
    });
    $("#off").find(".input").click(function(){
        $(".datepick").slideDown();
        $("#datetimeInvalid-demo").change(function(){
            $("#time-off").html($(this).val());
        });
    });

});
