$(window).load(function() {
  $("#load-spinner").hide();
  $("#main-container").fadeIn(1500);
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

  // Email - don't hack my auth keys doe
  jQuery(function($)
  {
      $("#contact_form").submit(function()
      {
          var email = $(".email-form").val();
          var name = $(".name-form").val();
          var msg = $(".msg-form").val();
          $.ajax(
          {
              type: "POST",
              url: "https://mandrillapp.com/api/1.0/messages/send.json",
              data: {
                  'key': 'gGQb87_8lBB7rED_ks_bJA',
                  'message': {
                      'from_email': email,
                      'from_name': name,
                      'headers': {
                          'Reply-To': email
                      },
                      'subject': 'Website Contact Form',
                      'text': msg,
                      'to': [
                      {
                          'email': 'treyhuffine@gmail.com',
                          'name': 'Trey Huffine',
                          'type': 'to'
                      }]
                  }
              }
          })
          .done(function(response) {
              alert('Your message has been sent. Thank you!'); // show success message
              $(".email-form").val('');
              $(".name-form").val('');
              $(".msg-form").val('');
          })
          .fail(function(response) {
              alert('Error sending message.');
          });
          return false;
      });
  });
});
