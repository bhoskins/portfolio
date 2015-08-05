(function(){
  'use strict';

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  }

});

/*
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 */

$(document).ready(function(){
    console.log('Welcome to my code!');

  var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight,
    projectHeightMobile = 3 * pageHeight + "px",
    height = pageHeight + "px",
    padBot = (((pageHeight) / pageWidth) * 100) + "%",
    padBotPortrait = (((pageWidth) / pageHeight) * 100) + "%";

    //Get Cross Browser page viewport size
    if (typeof pageWidth != "number") {
    // check for standards mode in IE else its in quirks mode
      if (document.compatMode == "CSS1Compat") {
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
      } else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
      }
    }

  function pageFit() {
    if(pageWidth > 768){
      var bodyHeight = (4 * pageHeight) + "px";
      var bodyHeightMobile = (6 * pageHeight) + "px";

      $("html").css('height', bodyHeight);
      $('.body').outerHeight( bodyHeight);
      $('.header-wrap').height(pageHeight);
      //$('.header-wrap').css('padding-bottom', padBot);
      $('.skillSet-wrap, .projects-wrap, .contact-wrap').height(height);
    } else {
      console.log('page width under 768: ' + pageWidth);
      console.log('else its mobile');
      $('.body').outerHeight( bodyHeightMobile);
      $('.header-wrap').height(pageHeight);
      $('.header-wrap').css('padding-bottom', padBot);
      console.log('padBot: ' + padBot);
      $('.skillSet-wrap').height(height);
      $('.contact-wrap').height('680px');
      $('.projects-wrap').height( projectHeightMobile);
    }
  }

    function textFit(){
      var nameWidth = $('.name-text').width();
      var nameWRatio = nameWidth / pageWidth  ;
      var nameHeight = $('.name-text').height();
      var nameWidthRatioLandscape = pageWidth / 1300;
      var nameWidthRatioPortrait = pageWidth / 400 ;
      // Starting size 5em for name and 2.5em for subtitle
      if (pageWidth >= pageHeight){
        $('.name-text').css('font-size', ( 5 * nameWidthRatioLandscape) + 'em');
        $('.header-subtitle').css('font-size', ( 2.5 * nameWidthRatioLandscape) + 'em');
      } else {
        $('.name-text').css('font-size', ( 3.2 * nameWidthRatioPortrait) + 'em');
        $('.header-subtitle').css('font-size', ( 1.8 * nameWidthRatioPortrait) + 'em');
      }
    }



// Mobile Navigation

$('.menu-img').click(function(e){
  e.preventDefault();
  if($('.main-nav').hasClass('hidden')){
    $('.main-nav').removeClass('hidden')
      .addClass('showing')
      .animate({
        "left": "0"
      }, 'easeInOutQuint');
  }else {
    $('.main-nav').removeClass('showing')
      .addClass('hidden')
      .animate({
      "left": "-110px"
        }, "easeInOutQuint")
  }
});

//      .css("background-color", "rgba(255,255,255,0.8")

    $('.js-communicate').hover(function(){
        if (pageWidth > 1024 ) {
      $(".js-header-overlay, .js-sunflower-info").fadeIn( 'slow');
          } else { return; }
    },
    function (){
      $(".js-header-overlay, .js-sunflower-info").fadeOut( "slow");
    });
    $('.js-inspire').hover(function(){
      if (pageWidth > 1024 ) {
        $(".js-inspire-flowers").fadeIn(1000, 'easeInOutQuint');
      } else { return; }
    },
    function (){
      $(".js-inspire-flowers").fadeOut(1000);
   });

    $('.js-interact').hover(function(){
      if (pageWidth > 1024 ) {
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
    } else { return; }
    },
    function (){
     $('.js-flower-color').css('background-color', 'rgb(2, 124, 219)');
      $('.js-live-flower').removeClass('invisible');
   });


// Hover effect on projects (not on tablet-portrait or phone)

    if (pageWidth <= 768 ){
      $('.js-meal-overlay-desc-text, .js-surf-overlay-desc-text, .js-github-overlay-desc-text').removeClass('invisible');
    }

    if (pageWidth > 768){
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

    } else {
      return;
    }

// Page Scroll Effect

    $('[href^="#"]').click(function(e){
      e.preventDefault();
      var $anchor = $(this);

      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutQuint');
    });

    $(window).bind('change', function(){
      textFit();
      pageFit();
      //location.reload();
    });

    textFit();
    pageFit();






  });
})();
