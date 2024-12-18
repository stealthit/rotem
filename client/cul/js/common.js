    // top menu bar
    $('.tool-btn').click(function () {
      var toolBtnId = $(this).attr('id');
      var toolBoxId = '#' + toolBtnId + '-box';

      if ($(toolBoxId).css('display') == "block") {
          $(toolBoxId).hide(100);
      } else {
          $(toolBoxId).show(100);
          $('.menu-box').not(toolBoxId).hide(100);
      }
  });

    //게임 레벨 버튼
  $(".btn-level").on("click", function () {

    $(".btn-level").removeClass("active");
    $(this).addClass("active");

  });

  //삭제하기 
  $(".btn-ddot").on("click", function (){
    const aaa=$(this).parent().children(".btn-del");
    aaa.toggleClass('active');
  });

  // X 버튼누르면 창닫기
  $('.btn-close').on("click", function (){
    
    $(this).parents('.md-box').hide();
    
  });

  // 가상악기설정
  $(".v-setting td:first-child").on("click", function (){
    const bbb=$(".v-setting").find("td:first-child");
    bbb.removeClass("active");
    $(this).addClass("active");
  });
  $(".v-setting td:last-child").on("click", function (){
    const bbb=$(".v-setting").find("td:last-child");
    bbb.removeClass("active");
    $(this).addClass("active");
  });



    // 전체 셀렉트박스
  $(".select-op").on("click", function () {

    var sob=$(this).children('.select-op-box');

    if (sob.css('display') == "block") {
      sob.hide();
    } else {
      sob.show();
    }

  });

    //날짜 인풋 버튼
  $(".term > li").on("click", function () {

    $(".term > li").removeClass("current");
    $(this).addClass("current");

  });

      // 인풋 버튼 M/S
      $(".term2 > li").on("click", function () {
        const qqq=$(this).parent('.term2').children('li');
        
        $(this).removeClass("current");
        qqq.removeClass("current");
        $(this).addClass("current");
    
      });

        //셀렉트 값에 따라 div 보이기
      $('#price-sel').change(function() {
        const state=$("#price-sel option:selected").val();
        if ( state == 'aaa2' ) {

          $('.price-input').css('display','flex');
        } else {
          $('.price-input').hide();
        }
      });

      // 팝업외에 클릭했을때 닫힘
      $(document).mouseup(function (e){

        var container = $('#pd-copy-box');
    
        if( container.has(e.target).length === 0){
    
          container.css('display','none');
    
        }
    
      });

      //on-off
      $(".on-off").on("click", function () {

        var fff=$(this).text();
    
        if (fff == "OFF") {
          $(this).text("ON");
        } else {
          $(this).text("OFF");
        }
    
      });

   // 달력 오늘 날짜 설정

  document.getElementById('datePicker').valueAsDate = new Date();
  document.getElementById('datePicker1').valueAsDate = new Date();

 




