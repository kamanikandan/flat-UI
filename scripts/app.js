$(function() {
  var ddd = new Date();
  $("#year").text(ddd.getFullYear());
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      "<i class='icon-chevron-left icon-white' title='Previous'><</i>",
      "<i class='icon-chevron-right icon-white' title='Next'>></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  $(".gotop").click(function() {
    $("html,body").animate({ scrollTop: 0 });
  });
  $(".menu-trigger").click(function() {
    $(".menu-overlay").fadeIn();
    $(".res-menu").animate({ left: "0" });
  });
  $(".menu-overlay").click(function() {
    $(".menu-overlay").fadeOut();
    $(".res-menu").animate({ left: "-75%" });
  });
});
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $(".gotop").show("slow");
  } else {
    $(".gotop").hide("slow");
  }
});
