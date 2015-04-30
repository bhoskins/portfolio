(function(){
  'use strict';



$(document).ready(function(){
    //window.router = new AppRouter();
    //Backbone.history.start();
    console.log('Welcome to my code!');

    var viewWidth = $(window).width();
    var viewHeight = $(window).height();

    var availHeight = window.screen.availHeight; // minus menu bars
    var totalHeight = window.screen.height; // total screen real estate
    var height = viewHeight + "px";
    var bodyHeight = (4 * viewHeight) + "px";

    var padBot = (((viewHeight) / viewWidth) * 100) + "%";

    console.log('height ' + height);
    console.log('body height ' + bodyHeight);
    console.log('pad bottom is ' + padBot);
    $('.body').outerHeight( bodyHeight);
    $('.header-wrap').css('padding-bottom', padBot);
    $('.skillSet-wrap, .projects-wrap, .contact-wrap').height(height);


function textFit(){
  var nameWidth = $('.name-text').width();
  var nameWRatio = nameWidth / viewWidth  ;
  // Starting size 5em for name and 2.5em for subtitle
  $('.name-text').css('font-size', (nameWRatio * 5) + 'em');
  $('.header-subtitle').css('font-size', (nameWRatio * 2.5) + 'em');
}

$(window).on('resize', textFit);


    $('.js-communicate').hover(function(){
      $(".js-header-overlay, .js-sunflower-info").fadeIn( "slow");
      setTimeout(function(){

      });
    },
    function (){
      $(".js-header-overlay, .js-sunflower-info").fadeOut( "slow");

    });

   //  $('.js-inspire').hover(function(){
   //    console.log('mousein');
   //    $(".js-live-flower").animate({
   //        'background-size': '130%'
   //    }, 1000, function(){
   //    });
   //  },
   //  function (){
   //    console.log('mouseout');
   //   $(".js-live-flower").animate({
   //        'background-size': '100%'
   //    }, 1000, function(){
   //  });
   // });

    $('.js-interact').hover(function(){
      var totalWidth = $('.js-interact').outerWidth();
      var width = totalWidth / 12;
      $('.interact').on( 'mousemove', function(e){
      $('.js-live-flower').addClass('invisible');
      var offset = $(this).offset();
      var x = Math.floor(e.pageX - offset.left);
      var y = e.pageY - offset.top;
      if ( x > 0 && x < width) {
        $('.js-flower-color').css('background-color', 'rgb(255, 255, 255)');
      } else if ( x >= (width + 1) && x < (2 * width)) {
        $('.js-flower-color').css('background-color', 'rgb(255, 0, 220)');
      } else if (x >= (2 * width) && x < (3 * width) ) {
        $('.js-flower-color').css('background-color', 'rgb(255, 120, 0)');
      } else if ( x >= (3 * width) && x < (4 * width)) {
        $('.js-flower-color').css('background-color', 'rgb(128, 255, 0)');
      } else if ( x >= (4 * width) && x < (5 * width)) {
        $('.js-flower-color').css('background-color', 'rgb(0, 199, 94)');
      } else if ( x >= (5 * width) && x < (6 * width)) {
        $('.js-flower-color').css('background-color', 'rgb(0, 255, 128)');
      } else if ( x >= (6 * width) && x < (7 * width)) {
        $('.js-flower-color').css('background-color', 'rgb(0, 255, 255)');
      } else if ( x >= (7 * width) && x < (8 * width)) {
        $('.js-flower-color').css('background-color', 'rgb(0, 128, 255)');
      } else if ( x >= (8 * width) && x < (9 * width)) {
        $('.js-flower-color').css('background-color', 'rgb(0, 0, 255)');
      } else if ( x >= (9 * width) && x < (10 * width)) {
        $('.js-flower-color').css('background-color', 'rgb(128, 0, 255)');
      } else if ( x >= (10 * width) && x < (11 * width)) {
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


    $('.js-food-toggle-cover').hover(function(){
      //$('.js-food-icon').fadeOut( "fast");
      $('.js-food-toggle-cover').css( 'box-shadow',
        '0px 0px 50px 11px #ffaa00' );
      $('.js-meal-overlay-desc-text').slideDown('slow');
    },
      function(){
        $('.js-food-toggle-cover').css( 'box-shadow',
        'none' );
        $('.js-meal-overlay-desc-text').slideUp('slow');

    });


    $('.js-surf-toggle-cover').hover(function(){
      //$('.js-surf-icon').fadeOut( "fast");
      $('.js-surf-toggle-cover').css( 'box-shadow',
        '0px 0px 50px 11px #ffaa00' );
      $('.js-surf-overlay-desc-text').slideDown('slow');
    },
      function(){
      // $('.js-surf-icon').fadeIn( "fast" );
        $('.js-surf-toggle-cover').css( 'box-shadow',
          'none' );
        $('.js-surf-overlay-desc-text').slideUp('slow');
    });

    $('.js-github-toggle-cover').hover(function(){
      //$('.js-github-icon').fadeOut( "fast");
      $('.js-github-toggle-cover').css( 'box-shadow',
        '0px 0px 50px 11px #ffaa00' );
      $('.js-github-overlay-desc-text').slideDown('slow');

    },
    function(){
      //$('.js-github-icon').fadeIn( "fast" );
      $('.js-github-toggle-cover').css( 'box-shadow',
      'none' );
      $('.js-github-overlay-desc-text').slideUp('slow');
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
