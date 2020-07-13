var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

var a = $(".changethis").attr("data-myval");

$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var element = $(".changethis");
    $(".changethis").each(function () {
      if (
        height > $(this).offset().top
        // &&
        // $(this).attr("data-myval") === "true"
      ) {
        $(this).addClass("animate");
        $(this).attr("data-myval", "false");
        $(window).off("scroll");
      } else {
        $(this).removeClass("animate");
      }
    });
  });
});
