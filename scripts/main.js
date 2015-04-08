(function(){
  'use strict';



$(document).ready(function(){
    //window.router = new AppRouter();
    //Backbone.history.start();
    console.log('its working');
    $('.js-toggle-cover').hover(function(){
      $('.js-food-icon-bw').fadeOut( "fast");
      $('.food-icon-info').animate(
        { color: 'blue' }, "fast" );
    },
      function(){
       $('.js-food-icon-bw').fadeIn( "fast" );
    });

    //slide up animation
    // $('.js-toggle-cover').on("mouseover", (function(){
    //   $('.food-icon-info').slideToggle( "slow", function(){

    //   });
    // }));
    // $('.js-toggle-cover').on("mouseout", (function(){
    //   $('.food-icon-info').slideToggle( "slow", function(){

    //   });
    // }));



  });
})();
