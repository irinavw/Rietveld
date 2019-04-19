$(document).ready(function() {
  $(document).ready(function () {
    var back = ["red","blue", "yellow"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $("body").css("border-color", rand);
    $("h3").css("color", rand);
    });
  $(".chairback").hover(function() {
    $("h2").slideToggle();
    });
  $(".chairback, .chairslant").hover(function() {
    $(this).toggleClass("blackStroke");
    $("p").toggleClass("blackText");
    var back = ["red","blue", "yellow"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $(".blackStroke").css("outline-color", rand);
    });
});
