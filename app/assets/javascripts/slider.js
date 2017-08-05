jQuery(document).ready(function($) {
  var sliderImage = $('img.slider-image.-default');
  var image_mobile = $('img.slider-image.-devise');
  var sliderContainer = $('.slider-container.-default');
  var sliderImageDevise = $('.slider-container.-devise');
  var buttonDevise = $('.button.-devise');
  var control = 0, control_devise = 0;
  CreateBackgrounds = function(background, slider) {
    var total_background = background.length;
    for (var i = 0; i < total_background; i++) {
      if (i > 0) {
        if (background.eq(i).hasClass('-devise')) {
          slider.append('<figure class="slider-image -devise -hidden '+background.eq(i).attr('alt')+'" style="background: url('+background.eq(i).attr('src')+') center center no-repeat; background-size: cover;"></figure>');
        }else {
          slider.append('<figure class="slider-image -default -hidden '+background.eq(i).attr('alt')+'" style="background: url('+background.eq(i).attr('src')+') fixed center center no-repeat; background-size: cover;"></figure>');
        }
      }else {
        if (background.eq(i).hasClass('-devise')) {
          slider.append('<figure class="slider-image -devise -shown '+background.eq(i).attr('alt')+'" style="background: url('+background.eq(i).attr('src')+') center center no-repeat; background-size: cover;"></figure>');
        }else {
          slider.append('<figure class="slider-image -default -shown '+background.eq(i).attr('alt')+'" style="background: url('+background.eq(i).attr('src')+') fixed center center no-repeat; background-size: cover;"></figure>');
        }
      }
      background.eq(i).remove();
    }
  }

  Animate = function(imagen) {
    if (imagen.hasClass('-devise')) {
      imagen.eq(control_devise).removeClass('-shown').addClass('-hidden');
      setTimeout(function() {
        imagen.eq(control_devise).css('display', 'none');
        control_devise ++;
        if (control_devise >= imagen.length) {
          control_devise = 0;
        }
        imagen.eq(control_devise).css('display', 'block');
        setTimeout(function() {
          imagen.eq(control_devise).removeClass('-hidden').addClass('-shown');
        }, 10);
      }, 500);
    }else {
      imagen.eq(control).removeClass('-shown').addClass('-hidden');
      setTimeout(function() {
        imagen.eq(control).css('display', 'none');
        control ++;
        if (control >= imagen.length) {
          control = 0;
        }
        imagen.eq(control).css('display', 'block');
        setTimeout(function() {
          imagen.eq(control).removeClass('-hidden').addClass('-shown');
        }, 10);
      }, 500);

    }
  }

  CreateBackgrounds(sliderImage, sliderContainer);
  CreateBackgrounds(image_mobile, sliderImageDevise);

  var sliderImageNormal = $('.slider-image.-default');
  var sliderImageMobile = $('.slider-image.-devise');

  window.setInterval(function(){
    Animate(sliderImageNormal);
  }, 10000);

  buttonDevise.click(function(e) {
    e.preventDefault();
    Animate(sliderImageMobile);
  });
});