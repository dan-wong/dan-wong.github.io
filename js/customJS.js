$( document ).ready(function() {
    $("#downarrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#experienceSection").offset().top
        }, 500);
    });
    
    $("#extraExperience").hide();
    
    $("#moreExperience").click(function() {
        $("#extraExperience").slideDown("slow"); 
        $("#moreExperience").hide();
    });
    
    $("#lessExperience").click(function() {
        $("#extraExperience").slideUp("slow");
        $("#moreExperience").show();
    });
});
