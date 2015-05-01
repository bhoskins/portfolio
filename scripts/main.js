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
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
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

// Page Scroll Effect
  var homeOffset = $("#home").offset();

  var skillSetOffset = $('#skillSet').offset();
  var projectsOffset = $('#projects').offset();
  var contactOffset = $('#contact').offset();

    console.log('home' + homeOffset.top);
    $('[href=#top]').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: homeOffset.top
      }, 1000, 'easeInOutQuint')
    });

    $('[href=#skillSet]').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: skillSetOffset.top
      }, 1000, 'easeInOutQuint')
    });

    $('[href=#projects]').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: projectsOffset.top
      }, 1000, 'easeInOutQuint')
    });

    $('[href=#contact]').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactOffset.top
      }, 1000, 'easeInOutQuint')
    });


  });
})();
