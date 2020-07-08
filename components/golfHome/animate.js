$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".bg-image").css("height", "300px");
    } else {
      $(".bg-image").css("height", "600px");
    }
  });
});
