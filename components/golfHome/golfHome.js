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

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".bg-image").height((x -= 1));
    } else {
      $(".bg-image").css("height", "630px");
    }
  });
});
