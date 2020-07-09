$(window).scroll(function () {
  var height = $(window).scrollTop();
  var element = $(".changethis");
  if (height > element.offset().top) {
    element.addClass("black");
  }
});
