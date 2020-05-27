$(function() {

    var header = $("#header"),
        mainH = $("#main").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Header */
    checkscroll(scrollOffset)

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkscroll(scrollOffset);

    });

    function checkscroll (scrollOffset) {
        if( scrollOffset >= mainH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockid = $(this).data("scroll"),
            blockOffset = $(blockid).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    })

});
