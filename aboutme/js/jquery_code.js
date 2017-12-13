function scrollToCustom(idName) {
    jQuery(function($) {
        $('html,body').animate({
            scrollTop: $("#" + idName).position().top
        }, 'slow');
    });
}

$("#section1").click(function() {
    scrollToCustom("section2");
});

$("#section2").click(function() {
    scrollToCustom("section3");
});

$("#section3").click(function() {
    scrollToCustom("section4");
});

$("#section4").click(function() {
    scrollToCustom("section5");
});

$("#section5").click(function() {
    scrollToCustom("section6");
});

$("#section6").click(function() {
    scrollToCustom("section7");
});
