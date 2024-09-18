



// Go To Top
$(document).ready(function () {
  new WOW().init();
  var offset = 220;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $(".back-to-top").fadeIn(duration);
    } else {
      $(".back-to-top").fadeOut(duration);
    }
  });

  $(".back-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});



//  Mobile Menu
$("#cssmenu").menumaker({
  title: "",
  format: "multitoggle",
});

// $(window).on('scroll', function() {
//   if ($(window).scrollTop() > 100) {
//       $('.header').addClass('sticky_header animated fadeInDown');
//   } else {
//       $('.header').removeClass('sticky_header animated fadeInDown');
//   }
// });  


