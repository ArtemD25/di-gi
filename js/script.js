$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({

   navigation : true, // Show next and prev buttons
   navigationText : false,
   slideSpeed : 300,
   paginationSpeed : 400,
   singleItem:true

   // "singleItem:true" is a shortcut for:
   // items : 1, 
   // itemsDesktop : false,
   // itemsDesktopSmall : false,
   // itemsTablet: false,
   // itemsMobile : false
  });

  $("#owl-demo-2").owlCarousel({

    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
 
    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
   });

});