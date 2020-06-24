$(function() {

  /*
  var $win = $(window),
      $header = $('header'),
      $top = $('.top'),
      topHeight = $header.outerHeight() + $top.outerHeight();

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > topHeight ) {
      $header.css('background', 'rgba(0, 0, 0, 0.8)');
      $header.css('color', '#ffffff');
    } else {
      $header.css('background', 'rgba(0, 0, 0, 0.8)');
      $header.css('color', '#ffffff');
    }
  });
  */

    $(".article-card a").each(function (i, value) {
        $(value).hover( function () {
            $(value).parent().css("z-index", "8");
            $(value).outerWidth(480);
            $(value).nextAll().outerWidth(480);
            $(value).next("img").next("div").find("h3").css("border-bottom", "1px #D8CC34 solid");
        },function () {
            $(value).parent().css("z-index", "1");
            $(value).outerWidth(270);
            $(value).nextAll().outerWidth(270);
            $(value).next("img").next("div").find("h3").css("border-bottom", "1px #fff solid");
        });
    });

    $(".to-twitter").hover(function(){
      $(this).css("color", "#1DA1F2");
      $(this).css("border-color", "#1DA1F2");
    }, function(){
      $(this).css("color", "#fff");
      $(this).css("border-color", "#fff");
    });
    $(".to-instagram").hover(function(){
      $(this).css("color", "#F26939");
      $(this).css("border-color", "#F26939");
    }, function(){
      $(this).css("color", "#fff");
      $(this).css("border-color", "#fff");
    });
    $(".to-youtube").hover(function(){
      $(this).css("color", "#DA1725");
      $(this).css("border-color", "#DA1725");
    }, function(){
      $(this).css("color", "#fff");
      $(this).css("border-color", "#fff");
    });
    $(".to-github").hover(function(){
      $(this).css("color", "#4183c4");
      $(this).css("border-color", "#4183c4");
    }, function(){
      $(this).css("color", "#fff");
      $(this).css("border-color", "#fff");
    });
    $(".to-qiita").hover(function(){
      $(this).css("color", "#55C600");
      $(this).css("border-color", "#55C600");
    }, function(){
      $(this).css("color", "#fff");
      $(this).css("border-color", "#fff");
    });
});
