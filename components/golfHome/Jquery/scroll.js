var a = $(".changethis").attr("data-myval");

$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var element = $(".changethis");
    $(".changethis").each(function () {
      if (
        height > $(this).offset().top &&
        $(".changethis").attr("data-myval") == "true"
      ) {
        $(this).addClass("animate");
        $(this).attr("data-myval", "false");
      } else {
        $(this).removeClass("animate");
      }
    });
  });
});

$(document).ready(function () {
  var calmargin = function () {
    $(".mainDiv").css("margin-bottom", $(".footer").outerHeight());
  };
  calmargin();
  $(window).resize(function () {
    calmargin();
  });
});
