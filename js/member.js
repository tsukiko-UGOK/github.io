$(function () {
  $('.button').prevAll().hide();
  $('.button').click(function () {
    if ($(this).prevAll().is(':hidden')) {
      $(this).prevAll().slideDown();
      $(this).text('閉じる').addClass('close');
    } else {
      $(this).prevAll().slideUp();
      $(this).text('もっと見る').removeClass('close');
    }
  });
});
