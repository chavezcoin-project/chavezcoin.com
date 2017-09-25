jQuery(document).ready(function($) {
  var fadeScreen = $('.fade-screen');
  var slideButton = $('.slide-button');
  var presentationText = $('.presentation-text');
  var mobileDraw = $('.mobile-normal');
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.nav-menu').outerHeight();
  var navHeader = $('.nav-menu');
  var fixedAnimation = $('.draw-container');
  var guideContainer = $('.guide-container');
  var window_height = $(window).height();
  var faq_head = $('.faq');
  var clicked_answer = null;
  var slide_interruptor = $('.slide-interruptor');
  var coin_button = $('.button.-coin');
  var advantages = $('.advantages-container');
  var boxColor = $('.box-color');
  var graphicDetailsButton = $('.graphic-details');
  var tabletApp = $('.tablet-horizontal .background');
  var transactionCounter = $('.transaction-counter-container');
  var counterBlur = $('.transaction-counter.-blur');
  var counterNav = $('.transaction-counter.-blur-nav');
  var share_button = $('.share-options');
  var activeClass = 'active'

  share_button.click(function(e) {
    var parent = $(this).parents('.blog-box');
    var panel = parent.children('.hover-hidden-panel');
    if (panel.hasClass(activeClass)) {
      panel.removeClass(activeClass);
      panel.css('opacity', '0');
      setTimeout(function() {
          panel.css('z-index', '-1');
      }, 750);
    }else {
      panel.addClass(activeClass);
      panel.css({
        'z-index': '1',
        'opacity': '1'
      });
    }
  });

  graphicDetailsButton.click(function(e) {
    e.preventDefault();
    tabletApp.slideToggle('slow');
  });

  function checkInRange() {
    var st = $(this).scrollTop();
    var height = navHeader.height();
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop){
        navHeader.addClass('-scrolled');
        counterBlur.animate({
          top: -15 + 'rem',
          opacity: 0
        }, 500);
        setTimeout(function() {
          counterNav.css('display', 'flex');
          counterNav.animate({
            bottom: 0,
            opacity: 1
          }, 500);
        }, 250);
    } else if($(this).scrollTop() < 20) {
        navHeader.removeClass('-scrolled');
        counterNav.animate({
          bottom: -10 + 'rem',
          opacity: 0
        }, 500);
        counterBlur.animate({
          top: 0,
          opacity: 1
        }, 250);
        setTimeout(function() {
          counterNav.css('display', 'none');
        }, 500);
    }
    lastScrollTop = st;
  }

  $('.menu-link').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('session') || $(this).hasClass('no-animated') ) {
      if (window.location.hostname.replace(/\\/g, '') == 'localhost') {
        window.location = 'http://' + window.location.hostname.replace(/\\/g, '') + ':3000' + $(this).attr('href');
      }else {
        window.location = 'http://' + window.location.hostname.replace(/\\/g, '') + $(this).attr('href');
      }
    }else {
      var y = $(this.hash).offset().top;
      $('html,body').animate({scrollTop: y}, 1000);
    }
  });

  $('.guide-expand').click(function(e) {
    e.preventDefault();
    var parent = $(this).parents('.guide');
    var video = parent.find('.video-container');
    var text = parent.find('.tag-text');
    var infoContainer = parent.find('.-guide');
    var animation = parent.find('.animation-container');
    var star = animation.find('.animated-star');

    if (parent.hasClass('-active')) {
      parent.removeClass('-active');
      animation.animate({width: 0}, 1000);
      setTimeout(function() {
        video.slideToggle(1000);
        text.slideToggle(1000);
        animation.slideToggle(1000);
      }, 1000);
    }else {
      parent.addClass('-active');
      video.slideToggle(1000);
      text.slideToggle(1000);
      setTimeout(function() {
        animation.slideToggle(250);
        animation.animate({width: '40%'}, 1000);
      }, 500);
    }
    setTimeout(function() {
      star.slideToggle(1000);
    }, 1000);
  });

  slide_interruptor.click(function(e) {
    var button = $(this).children('.button');
    var coin = $(this).parent().children('.currency').attr('id');
    var price = button.children('.price').attr('value');
    var volume24 = button.children('.volumen').attr('value');
    var update =  formatTime(button.children('.update').attr('value'));
    var change = button.children('.change').attr('value');

    if ($(this).hasClass('-off')) {
      slide_interruptor.removeClass('-on');
      slide_interruptor.addClass('-off');
      $(this).removeClass('-off');
      $(this).addClass('-on');
      coin_button.animate({
        left: '10%'},
      250);
      button.animate({
        left: '60%'},
        250);
      $('.coin-name').text(coin);
      $('.coin-priceusd').text(price+' '+coin+'/CHC');
      $('.coin-volume24').text('$'+volume24);
      $('.coin-update').text(update);
      $('.coin-change').text(change+'%');
    }else{
      slide_interruptor.removeClass('-on');
      slide_interruptor.addClass('-off');
      coin_button.animate({
        left: '10%'},
      250);
    }
  });

  faq_head.click(function(e) {
    parent = $(this).parent('.faq-wrapper');
    answer = parent.children('.answer');
    if (parent.index() == clicked_answer) {
      $(this).removeClass(activeClass);
      answer.removeClass(activeClass);
      answer.slideToggle(500);
      clicked_answer = null;
    }else {
      $('.faq').removeClass(activeClass);
      $('.answer').hide(500);
      $(this).addClass(activeClass);
      answer.addClass(activeClass);
      answer.slideToggle(500);
      clicked_answer = parent.index();
    }
  });

  function isEmpty( el ){
      return !$.trim(el.html())
  }

  function slideBoxes(element){
    var range = {
        top: $(this).scrollTop()
    }
    if ($(window).width() > 993) {
      if (advantages.offset().top < range.top) {
        if (!$(this).hasClass('-scrolled')) {
          boxColor.eq(0).addClass('-scrolled');
          setTimeout(function() {
            boxColor.eq(1).addClass('-scrolled');
          }, 1000);
          setTimeout(function() {
            boxColor.eq(2).addClass('-scrolled');
          }, 2000);
          setTimeout(function() {
            boxColor.eq(3).addClass('-scrolled');
          }, 3000);
          setTimeout(function() {
            boxColor.eq(4).addClass('-scrolled');
          }, 4000);
          setTimeout(function() {
            boxColor.eq(5).addClass('-scrolled');
          }, 5000);
        }
      }else if ((advantages.offset().top - 500) > range.top) {
        boxColor.removeClass('-scrolled');
      }
    }
  }

  $(window).scroll(function(e){
    if (!$('.menu-link').hasClass('no-animated')) {
      slideBoxes(this);
    }
      didScroll = true;
  });


  var closeModal = function() {
    fadeScreen.hide(500);
  }

  var showmodal = function() {
    fadeScreen.fadeIn(500).css('display', 'flex');
  }
  var menuLinks =  $('.menu-links-container');
  var showMenu = function() {
    if (menuLinks.hasClass('on')) {
      menuLinks.css('right', '-50%');
      menuLinks.removeClass('on');
      fadeScreen.hide(500);
    }else {
      menuLinks.css('right', '0');
      menuLinks.addClass('on');
      fadeScreen.show(500);
    }
  }

  setInterval(function() {
    if (didScroll) {
      checkInRange();
      didScroll = false;
    }
  }, 250);

  $('.close').click(function(e) {
    closeModal();
  });

  slideButton.click(function(e) {
    showMenu();
  });

  jQuery(window).resize(function() {

    if($(window).width() > 993) {
      menuLinks.css('right', '0');
      fadeScreen.css('display', 'none');
    }else {
      menuLinks.css('right', '-50%');
      fadeScreen.css('display', 'none');
    }
  });

  $('.skew-container-abstract').particleground({
    dotColor: '#e2f2ff',
    lineColor: '#e2f2ff',
    particleRadius: 5,
    lineWidth: .25,
    proximity:450,
    density: 32500
  });
});