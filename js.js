// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Init scrollspy
$('body').scrollspy({target:'#main-nav'});

// Smooth scrollong
$("#main-nav a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;  
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

// USE CKEditor 4 - https://cdn.ckeditor.com/
  CKEDITOR.replace( 'editor1' );
