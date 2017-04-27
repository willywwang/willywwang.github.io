		$(document).ready(function(){
      $('.scrollAnimation, .homeScroll, .aboutScroll, .experienceScroll, .contactScroll').on('click', function(event) {
       if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 900, function(){
         window.location.hash = hash;
       });
      }
    });
      $(function(){
        $("#nouns").typed({
          strings: ['Student', 'Developer','Support'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 300,
          loop: true,
          loopCount: null,
          cursorChar: null,
          onStringTyped: function() {
            $('#nouns h2').html("asdf");
          }
        });
      });
    });