(function(){
  'use strict';



$(document).ready(function(){
    //window.router = new AppRouter();
    //Backbone.history.start();
    console.log('its working');

  // function toggleDiv(item) {
  //     $('.js-' + item +'-toggle-cover').hover(function(){
  //     $('.js-' + item + '-icon-bw').fadeOut( "fast");
  //     $('.js-' + item + '-icon-info').animate(
  //       { color: 'blue' }, "fast" );
  //   },
  //     function(){
  //      $('.js-' + item + '-icon-bw').fadeIn( "fast" );
  //   }
  //   }

    // function('food');



    $('.js-food-toggle-cover').hover(function(){
      $('.js-food-icon-bw').fadeOut( "fast");
      $('.js-food-icon-info').animate(
        { color: 'blue' }, "fast" );
    },
      function(){
       $('.js-food-icon-bw').fadeIn( "fast" );
    });


    $('.js-surf-toggle-cover').hover(function(){
      $('.js-surf-icon-bw').fadeOut( "fast");
      $('.js-surf-icon-info').animate(
        { color: 'blue' }, "fast" );
    },
      function(){
       $('.js-surf-icon-bw').fadeIn( "fast" );
    });








  });
})();
