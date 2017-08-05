var ChavezCoin = {};

ChavezCoin['visitors'] = {
  index: () => {
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
    var general_button = $('.button');
    var advantages = $('.advantages-container');
    var boxColor = $('.box-color');
    var graphicDetailsButton = $('.graphic-details');
    var graphicDetails = $('.graphic-container');
    var transactionCounter = $('.transaction-counter-container');


    graphicDetailsButton.click(function(e) {
      e.preventDefault();
      if ($(window).width() < 993) {
        graphicDetails.slideToggle('slow');
        graphicDetails.css('display', 'flex');
      }else {
        if (transactionCounter.hasClass('active')) {
          transactionCounter.animate({
            marginRight: '-100%'},
            1000);
          setTimeout(function() {
            graphicDetails.animate({
              opacity: 0,
              height: 0},
            1000);
          }, 1000);
          setTimeout(function() {
            graphicDetails.css('z-index', '-1');
          }, 1000);
          transactionCounter.removeClass('active');
        }else {
          transactionCounter.animate({
            marginRight: 0},
            1000);
          graphicDetails.css('z-index', '5');
          setTimeout(function() {
            graphicDetails.animate({
              opacity: 1,
              height: '15rem'},
            1000);
          }, 1000);
          transactionCounter.addClass('active');
        }
      }
    });

    function checkInRange() {
      var st = $(this).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      if (st > lastScrollTop){
          navHeader.addClass('-scrolled');
      } else {
          if($(this).scrollTop() < 20) {
              navHeader.removeClass('-scrolled');
          }
      }
      lastScrollTop = st;
    }

    $('.menu-link').on('click', function(e) {
      e.preventDefault(); // prevents default scrolling
      var y = $(this.hash).offset().top; // grabs the #id element offset location
      $('html,body').animate({scrollTop: y}, 1000); // animate the scroll
    });

    $('.guide-expand').click(function(e) {
      e.preventDefault();
      var parent = $(this).parents('.guide');
      var video = parent.find('.video-container');
      var text = parent.find('.tag-text');
      if (parent.hasClass('-active')) {
        parent.removeClass('-active');
      }else {
        parent.addClass('-active');
      }
      video.slideToggle(1000);
      text.slideToggle(1000);
    });

    slide_interruptor.click(function(e) {
      button = $(this).children('.button');
      coin = $(this).parent().children('.currency').attr('id');
      if ($(this).hasClass('-off')) {
        slide_interruptor.removeClass('-on');
        slide_interruptor.addClass('-off');
        $(this).removeClass('-off');
        $(this).addClass('-on');
        general_button.animate({
          left: '10%'},
          500);
        button.animate({
          left: '60%'},
          500);
        $('.coin-name').text(coin);
      }else{
        slide_interruptor.removeClass('-on');
        slide_interruptor.addClass('-off');
        general_button.animate({
          left: '10%'},
          500);
      }
    });

    faq_head.click(function(e) {
      parent = $(this).parent('.faq-wrapper');
      answer = parent.children('.answer');
      if (parent.index() == clicked_answer) {
        $(this).removeClass('active');
        answer.slideToggle(500);
        clicked_answer = null;
      }else {
        $('.faq').removeClass('active');
        $('.answer').hide(500);
        $(this).addClass('active');
        answer.slideToggle(500);
        clicked_answer = parent.index();
      }
    });

    function isEmpty( el ){
        return !$.trim(el.html())
    }

    var scrollTimer, lastScrollFireTime = 0;
    var minScrollTime = 100;
    function showAnimation(element){
      var range = {
          top: $(this).scrollTop()
      }
      guideContainer.each(function(){
        if ($(window).width() > 993) {
          if(($(this).position().top - ($(this).position().top/95) ) <= range.top && !((advantages.offset().top - advantages.offset().top * .10) <= range.top)) {
            var now = new Date().getTime();

            if (!scrollTimer) {
                if (now - lastScrollFireTime > (1 * minScrollTime)) {
                  fixedAnimation.show();
                  fixedAnimation.css({
                    'opacity': '1',
                    'transition': 'all .5s'
                  });
                  if (isEmpty(fixedAnimation)) {
                    fixedAnimation.append('<figure class="cloud-draw -big -mindelay"></figure> <figure class="cloud-draw -small -middelay"></figure><figure class="cloud-draw -round -lgdelay"></figure><figure class="cloud-draw -big -maxdelay"></figure><figure class="cloud-draw -round -small -maxdelay"></figure><figure class="cloud-draw -round -maxdelay"></figure><figure class="aero-globe"><div class="left"></div><div class="right"></div><div class="bottom"></div><div class="background"><img class="coin" src="/assets/c_coin-f56141681bbe6c6b4547b92c790d951bdecc18eae54b9b9d83a4596146446e08.png" alt="C coin"></div><div class="stripright"></div><div class="stripleft"></div><div class="basket"></div><div class="chavez"><img src="/assets/chavez-eye-close-d930760d719fe5f964910f40bc03c03d3d9fda4d54bf4c5faec2f295c1dfbf7c.png" alt="Chavez eye close"></div></figure><figure class="flying-birds -top"><img src="/assets/bird-ea33f4f8e923ca9423f6714dde6830f403121a396cf219e8c0ebb3e833b15046.gif" alt="Bird"></figure><figure class="flying-birds -mid"><img src="/assets/bird-ea33f4f8e923ca9423f6714dde6830f403121a396cf219e8c0ebb3e833b15046.gif" alt="Bird"></figure><figure class="flying-birds -bottom"><img src="/assets/bird-ea33f4f8e923ca9423f6714dde6830f403121a396cf219e8c0ebb3e833b15046.gif" alt="Bird"></figure>')
                  }
                  lastScrollFireTime = now;
                }
                scrollTimer = setTimeout(function() {
                  scrollTimer = null;
                  lastScrollFireTime = new Date().getTime();
                }, minScrollTime);
            }
          }else {
            fixedAnimation.css({
              'opacity': '0',
              'transition': 'all .25s'
            });
            lastScrollFireTime = now;
            setTimeout(function() {
              fixedAnimation.empty();
              fixedAnimation.hide();
            }, 500);
          }
        }else {
          fixedAnimation.hide();
        }

      });
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
        didScroll = true;
        showAnimation(this);
        slideBoxes(this);
    });


    var closeModal = function() {
      fadeScreen.hide(1000);
    }

    var showmodal = function() {
      fadeScreen.fadeIn(1000).css('display', 'flex');
    }
    var menuLinks =  $('.menu-links-container');
    var showMenu = function() {
      if (menuLinks.hasClass('on')) {
        menuLinks.css('right', '-50%');
        menuLinks.removeClass('on');
        fadeScreen.hide(1000);
      }else {
        menuLinks.css('right', '0');
        menuLinks.addClass('on');
        fadeScreen.show(1000);
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
        graphicDetails.css({
          'opacity': '0',
          'height': '0',
          'z-index': '-1',
          'display': 'block'
        });
        transactionCounter.css({
          marginRight: '-100%'
        });
      }else {
        menuLinks.css('right', '-50%');
        fadeScreen.css('display', 'none');
        graphicDetails.css({
          'opacity': '',
          'height': '',
          'z-index': ''
        });
        transactionCounter.css({
          marginRight: ''
        });
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
    console.log('loaded csz');

  }
}