jQuery(document).ready(function($) {
    var control = 0;
    (function($) {
        $.fn.countTo = function() {
            // merge the default plugin settings with the custom options
            var _this = this,
                value = transaction_total.attr('value'),
                span_numbers = [],
                sNumber = value.toString();
                if (control != value) {
                    for (var i = 0, len = sNumber.length; i < len; i += 1) {
                        span_numbers.push(+sNumber.charAt(i));
                    }
                    var last_num = $('.numberwrap').last();
                    last_num.addClass('counted');
                    setTimeout(function() {
                        $('.numberwrap').remove();
                        for (var i = 0, len = span_numbers.length; i < len; i += 1) {

                            $(_this).append(
                                '<div class="numberwrap"><span class="number">'+span_numbers[i]+'</span></div>'
                            );
                        }
                      }, 500);
                }
        };
    })(jQuery);
    var transaction_total = $('.total_transactions');
    $('.transaction-counter').countTo();
      window.setInterval(function(){
        var number = transaction_total.attr('value');
        number--;
        transaction_total.val(number);
        $('.transaction-counter').countTo();
      }, 5000);
});