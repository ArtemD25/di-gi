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

const burger = document.querySelector(".header__humburger-menu");
const header_links = document.querySelector(".header__links");
const header_links_close = document.querySelector(".header__links-close");

const closeBurger = function() {
  header_links.classList.remove("open");
  header_links_close.classList.remove("open");
};

const openBurger = function() {
  header_links.classList.add("open");
  header_links_close.classList.add("open");
};

burger.addEventListener("click", function(evt) {
  evt.stopPropagation();
  openBurger();
});

header_links_close.addEventListener("click", function() {
  closeBurger();
});

document.addEventListener("click", function(evt) {
  if (evt.target.className != "header__links" && header_links.classList.contains("open")) {
    closeBurger();
  }
});