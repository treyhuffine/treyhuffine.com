$(document).ready(function() {
  if(screen.width < 480) {
  // do any 480 width stuff here, or simply do nothing
    $('#fullpage').fullpage({
      sectionsColor : ['#9dd4f2', '#fff', '#656565', '#eea146'],
      autoScrolling: false
    });
  } else {
  // do all your cool stuff here for larger screens
    $('#fullpage').fullpage({
      sectionsColor : ['#9dd4f2', '#fff', '#656565', '#eea146']
    });
  }

});
