$( document ).ready(function() {  
    $( ".showBtn" ).click(function(e) {
        if ($(e.target)[0].innerHTML != "SEE LESS") {
            $(e.target)[0].innerHTML = "SEE LESS";
        } else {
            $(e.target)[0].innerHTML = "SEE MORE";
        }
    });

    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top -100;
    
        $("body, html").animate({
            scrollTop: position
        }, 500, 'linear');
    });

});    

function scrollToBlock(id) {
    console.log(id);
    document.getElementById(id).scrollIntoView();
}