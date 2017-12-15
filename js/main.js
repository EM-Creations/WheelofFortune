(function($) {
  "use strict"; // Start of use strict
  
  /* Constants */
  const LOGGING = true; // Set this to true to output logging to console, otherwise false
  /* End of constants */

  let logger = new Logger("main.js", LOGGING);
  logger.logInfo("Started loading..");

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
  /**
   * Get rotation degrees of an object 
   *
   * @param {object} obj 
   * @return {Number} rotation
   */
  function getRotationDegrees(obj) {
      var matrix = obj.css("-webkit-transform") ||
      obj.css("-moz-transform")    ||
      obj.css("-ms-transform")     ||
      obj.css("-o-transform")      ||
      obj.css("transform");
      if(matrix !== 'none') {
          var values = matrix.split('(')[1].split(')')[0].split(',');
          var a = values[0];
          var b = values[1];
          var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
      } else { var angle = 0; }
      return (angle < 0) ? angle + 360 : angle;
  }

  let forward = true;
  let baseDeg = 2000;
  let additionalDeg = 0;

  /**
   * Click handler for the wheel of fortune
   *
   */
  $('#wheelOfFortune').click(function () {

    if (forward) {
      additionalDeg = Math.floor((Math.random() * 360) + 1);
      logger.logInfo("Going forwards, by: " + (baseDeg + additionalDeg));

      move("#wheelOfFortune").rotate(baseDeg + additionalDeg).duration('3s').end();
    } else {
      move("#wheelOfFortune").rotate(0).duration('3s').end();
      logger.logInfo("Going backwards");
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

  logger.logInfo("Finished loading");
})(jQuery); // End of use strict
