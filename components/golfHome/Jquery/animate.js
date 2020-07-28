//ScrollingImage
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".bg-image").css("height", "300px");
    } else {
      $(".bg-image").css("height", "100vh");
    }
  });
});
// slideShow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Round Following Cursor
var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
//play video
$(document).ready(function () {
  $(".video")
    .parent()
    .click(function () {
      if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
      } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
      }
    });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 100
    ) {
      $(".footer").css("height", "400px");
      $(".footer1").css("padding-top", "60px");
      $(".marginbottom").css("margin-bottom", "400px");
    } else {
      $(".footer1").css("padding-top", "0px");
      $(".footer").css("height", "200px");
      $(".marginbottom").css("margin-bottom", "200px");
    }
  });
});

$(document).ready(function () {
  $(".ml16").each(function () {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  anime
    .timeline({
      loop: false,
    })
    .add({
      targets: ".ml16 .letter",
      translateY: [100, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: function (el, i) {
        return 30 * i;
      },
    })
    .add({
      targets: ".ml16",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
});

$(document).ready(function () {
  $(".closeButton").click(function () {
    $(".closeButton").addClass("container1");
  });
});
function populateSelect() {
  // THE JSON ARRAY.
  var birds = [
    {
      ID: "001",
      Bird_Name: "Barbuda Ocean Club",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "002",
      Bird_Name: "Chileno Bay",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "003",
      Bird_Name: "CordeValle",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "004",
      Bird_Name: "CostaTerra",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "005",
      Bird_Name: "DriftWood",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "006",
      Bird_Name: "Dune Deck",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "007",
      Bird_Name: "El Dorado",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "008",
      Bird_Name: "Estanica",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "009",
      Bird_Name: "Gozzer Ranch",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "010",
      Bird_Name: "Hideaway",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
  ];

  var ele = document.getElementById("sel");
  for (var i = 0; i < birds.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
    ele.innerHTML =
      ele.innerHTML +
      '<option value="' +
      birds[i]["ID"] +
      '">' +
      birds[i]["Bird_Name"] +
      "</option>";
  }
}

function show(ele) {
  var birds = [
    {
      ID: "001",
      Bird_Name: "Barbuda Ocean Club",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "002",
      Bird_Name: "Chileno Bay",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "003",
      Bird_Name: "CordeValle",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "004",
      Bird_Name: "CostaTerra",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "005",
      Bird_Name: "DriftWood",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "006",
      Bird_Name: "Dune Deck",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "007",
      Bird_Name: "El Dorado",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "008",
      Bird_Name: "Estanica",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "009",
      Bird_Name: "Gozzer Ranch",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
    {
      ID: "010",
      Bird_Name: "Hideaway",
      Address: "Sales office,501,Route 44,Amenia,New York,12501",
    },
  ];
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  if ($("#1").css("display") != "none") {
    $("#2").show().siblings("div").hide();
  } else if ($("#2").css("display") != "none") {
    $("#1").show().siblings("div").hide();
  }
  var msg = document.getElementById("msg");

  msg.innerHTML =
    birds[ele.selectedIndex]["Bird_Name"] +
    "</b> </br>" +
    +birds[ele.selectedIndex]["ID"] +
    "</b>";
}
$(".main-gallery").flickity({
  // options
  cellAlign: "left",
  contain: true,
});
