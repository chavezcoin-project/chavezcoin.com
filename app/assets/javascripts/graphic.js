$(document).ready( function() {
  function resize() {
    var max = parseInt($(".price.-max").text().replace(/[^0-9]/gi, ''), 10);
    console.log(max);
    var current = parseInt($(".bar.-current").text().replace(/[^0-9]/gi, ''), 10);
    console.log(current);
    var bars = $('.bar');
    var control = 0;
    if (current > max) {
      max = current;
      console.log(max);
      $('.price.-max').addClass('-old');
      $('<span class="price -max -new">$'+max+'</span>').insertBefore('.price.-max');
      $('.price.-max.-old').removeClass('-max -old');
    }
    bars.each(function() {
      var price = parseInt($(this).text());
      $(this).text('');
      $(this).css('height', (price * 100)/max + '%');
    });
  }
  resize();
  $(window).resize(function() {
    resize();
  });
});
