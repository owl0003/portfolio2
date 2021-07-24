$(function() {
  $('.top-btn').hover(
    function(){
      $(this).css('background-color', 'rgb(167, 224, 222)')
    },
    function() {
      $(this).css('background-color', 'rgb(108, 198, 196)')
    }
  );

  $('.left-contents').find('a').hover(
    function(){
      $(this).css('color', 'rgb(108, 198, 196)')
    },
    function() {
      $(this).css('color', 'black')
    }
  );

  $('.footer-nav').find('a').hover(
    function(){
      $(this).css('color', 'rgb(108, 198, 196)')
    },
    function() {
      $(this).css('color', 'white')
    }
  );
});
