$(document).ready(function() {
    $("#dismiss, .overlay").on("click", function() {
        $("#sidebar").removeClass("active");
        $("#basket").removeClass("active");
        $(".overlay").removeClass("active");
    });

    $(".navbar-toggler").on("click", function(event) {
      $("#sidebar").addClass("active");
        $(".overlay").addClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
        event.stopPropagation();
    });



    // $("#basket").addClass("active");
    // $(".overlay").addClass("active");

    $("#basket-icon").on("click", function(event) {
      $("#basket").addClass("active");
        $(".overlay").addClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
    });
});
