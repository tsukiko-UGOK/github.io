
$(function () {
  $('.button').nextAll().hide();
  $('.button').click(function () {
    if ($(this).nextAll().is(':hidden')) {
      $(this).nextAll().slideDown();
    } else {
      $(this).nextAll().slideUp();
    }
  });
});
