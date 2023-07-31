$(document).ready(function(){
    $('#blogload').load("eenvoudig.html .artikelen");
  });

  $( function() {
    var state = true;
    $( ".submit" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "rgb(234, 197, 179)",
          color: "#fff",
          width: 750
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
        }, 1000 );
      }
      state = !state;
    });
  } );