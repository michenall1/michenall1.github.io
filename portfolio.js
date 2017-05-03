/**
 * Created by bowenliu on 2017/5/2.
 */
$(function () {
  clientStuff();
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



