$(function () {
  $(".btn-sidemenu").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      //$('.logo.dark').css('background-color','#2f323e');
      $(".side-navi >ul").removeClass("active"); 
      $('body > .wrapper').css('overflow','').css("position","");
    } else {
      $(this).addClass("active");
      $(".side-navi >ul").addClass("active");
      $('body > .wrapper').css('overflow','hidden').css("position","fixed");
     // $('.logo.dark').css('background-color','#ababab');
    }
  });

  $(".side-navi > ul > li > a").on("click", function () {
    $(".side-navi > ul > li").removeClass("active");
    $(this).parent("li").addClass("active");
  });
});