(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // APM specific
  let forward = true;

  $('#wheelOfFortune').click(function () {

    if (forward) {
      move("#wheelOfFortune").rotate(360).duration('1.5s').end();
    } else {
      move("#wheelOfFortune").rotate(-360).duration('1.5s').end();
    }

    forward = !forward;
  });

  // Demo code
  /*move('#wheelOfFortune')
  .to(500, 200)
  .rotate(180)
  .scale(.5)
  .set('background-color', '#888')
  .set('border-color', 'black')
  .duration('2s')
  .skew(50, -10)
  .then()
    .set('opacity', 0)
    .duration('0.3s')
    .scale(0.1)
    .pop()
  .end();*/

})(jQuery); // End of use strict
