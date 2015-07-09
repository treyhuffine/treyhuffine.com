// $(document).ready(function() {
$(window).load(function() {
  $("#main-container").fadeIn(1000);
  $("#load-spinner").fadeOut(100);
  if(screen.width < 480) {
  // do any 480 width stuff here, or simply do nothing
    $('#fullpage').fullpage({
      sectionsColor : ['black', '#e9e6e6', '#656565', '#eea146'],
      autoScrolling: false,
      anchors:['Welcome', 'About', 'Portfolio', 'Thanks'],
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
    });
  } else {
  // do all your cool stuff here for larger screens
    $('#fullpage').fullpage({
      sectionsColor : ['black', '#e9e6e6', '#656565', '#eea146'],
      menu: false,
      anchors:['Welcome', 'About', 'Portfolio', 'Thanks'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Welcome', 'About', 'Portfolio', 'Thanks'],
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      loopBottom: true
    });
  }
  $(".button-collapse").sideNav({
    menuWidth: 300
  });
});

// $(window).load(function() {
//   $("#main-container").fadeIn(1000);
//   $("#load-spinner").hide();
// });
