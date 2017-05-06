/**
 * Created by bowenliu on 2017/5/2.
 */
$(function () {
  clientStuff();
  $("header h1")
    .fitText(1, {minFontSize: '20px', maxFontSize: '72px'});
  $(".biglink")
    .fitText(1);
});

function clientStuff() {
  $('.client-unit')
    .first()
    .addClass('active');
  $('.client-logo')
    .first()
    .addClass('active');

  $('.client-logo')
    .click(function () {
      const $this = $(this),
        $siblings = $this.parent()
                         .children(),
        position = $siblings.index($this);

      $('.client-unit')
        .removeClass('active')
        .eq(position)
        .addClass('active');
      $siblings.removeClass('active');
      $this.addClass('active');
    });

  $('.client-control-next, .client-control-prev')
    .click(function () {
      const $this = $(this),
        curActiveClient = $('.clients-belt')
          .find('.active'),
        position = $('.clients-belt')
          .children()
          .index(curActiveClient),
        clientNum = $('.client-unit').length;
      if ($this.hasClass('client-control-next')) {
        if (position < clientNum - 1) {
          $('.active')
            .removeClass('active')
            .next()
            .addClass('active')
        } else {
          $('.client-unit')
            .removeClass('active')
            .first()
            .addClass('active');
          $('.client-logo')
            .removeClass('active')
            .first()
            .addClass('active');
        }
      } else {

        if (position === 0) {
          $('.client-unit')
            .removeClass('active')
            .last()
            .addClass('active');
          $('.client-logo')
            .removeClass('active')
            .last()
            .addClass('active');
        } else {
          $('.active')
            .removeClass('active')
            .prev()
            .addClass('active');
        }

      }
    });

}


(function ($) {

  $.fn.fitText = function (kompressor, options) {

    // Setup options
    var compressor = kompressor || 1,
      settings = $.extend({
        'minFontSize': Number.NEGATIVE_INFINITY,
        'maxFontSize': Number.POSITIVE_INFINITY
      }, options);

    return this.each(function () {

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window)
        .on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})(jQuery);


