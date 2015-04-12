(function(){
  'use strict';



$(document).ready(function(){
    //window.router = new AppRouter();
    //Backbone.history.start();
    console.log('Welcome to my code!');

    $('.js-communicate').hover(function(){
      $(".js-header-overlay, .js-sunflower-info").fadeIn( "slow");
    },
    function (){
      $(".js-header-overlay, .js-sunflower-info").fadeOut( "slow");
    });

    $('.js-inspire').hover(function(){
      console.log('mousein');
      $(".js-live-flower").animate({
          'background-size': '130%'
      }, 1000, function(){
      });
    },
    function (){
      console.log('mouseout');
     $(".js-live-flower").animate({
          'background-size': '100%'
      }, 1000, function(){
    });
   });

    $('.js-interact').hover(function(){
      $('.interact').on( 'mousemove', function(e){
      $('.js-live-flower').addClass('invisible');
      var offset = $(this).offset();
      var x = Math.floor(e.pageX - offset.left);
      var y = e.pageY - offset.top;
      console.log('x is ' + x);
      console.log('y is ' + y);
      if ( x > 0 && x < 23) {
        $('.js-flower-color').css('background-color', 'rgb(255, 255, 255)');
      } else if ( x >=23 && x < 68) {
        $('.js-flower-color').css('background-color', 'rgb(255, 0, 220)');
      } else if (x >=68 && x <91 ) {
        $('.js-flower-color').css('background-color', 'rgb(255, 120, 0)');
      } else if ( x >= 91 && x < 114) {
        $('.js-flower-color').css('background-color', 'rgb(128, 255, 0)');
      } else if ( x >= 114 && x < 136) {
        $('.js-flower-color').css('background-color', 'rgb(0, 199, 94)');
      } else if ( x >= 136 && x < 158) {
        $('.js-flower-color').css('background-color', 'rgb(0, 255, 128)');
      } else if ( x >= 158 && x < 181) {
        $('.js-flower-color').css('background-color', 'rgb(0, 255, 255)');
      } else if ( x >= 181 && x < 203) {
        $('.js-flower-color').css('background-color', 'rgb(0, 128, 255)');
      } else if ( x >= 203 && x < 226) {
        $('.js-flower-color').css('background-color', 'rgb(0, 0, 255)');
      } else if ( x >= 226 && x < 248) {
        $('.js-flower-color').css('background-color', 'rgb(128, 0, 255)');
      } else if ( x >= 248 && x < 271) {
        $('.js-flower-color').css('background-color', 'rgb(255, 0, 0)');
      } else {
        $('.js-flower-color').css('background-color', 'rgb(2, 124, 219)');
        $('.js-live-flower').removeClass('invisible');
      }
    });
    },
    function (){
      console.log('mouseout');
     $('.js-flower-color').css('background-color', 'rgb(2, 124, 219)');
      $('.js-live-flower').removeClass('invisible');
   });






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




/*  Canvas Doodles Below */
    // var canvas = document.getElementById('sf-canvas');
    // var context = canvas.getContext('2d');
    // var x = 80;
    // var y = 100;
    // // context.font = '40pt Arial';
    // context.fillStyle = 'blue';
    // // context.fillText('Composite Flower', 0, 0);

    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo(800, 600);
    // context.stroke();

    // context.lineWidth = 1;
    // context.font = '40px Rancho, cursive';
    // context.fillText('Composite Flower', 10, 50);
    // context.strokeStyle = 'pink';
    // context.strokeText('Composite Flower', 10, 50);

    // context.strokeStyle = 'pink';
    // context.strokeText('Stroking Yeah!', x, y);









  });
})();
