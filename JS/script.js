$(document).ready(function() {
  $(".chairback").hover(function() {
    $("h2").slideToggle();
    });
  $(".chairback, .chairslant").hover(function() {
    $(this).toggleClass("blackStroke");
    $("p").toggleClass("blackText");
    });
});
