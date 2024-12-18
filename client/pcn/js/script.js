/* 상단 검색버튼 클릭 */
$(document).ready(function(){
  
  $('.gnb_detail').hide();
  
  $('.gnb_search_btn').click(function(){
    $('.gnb_top_list_detail').hide();
    $('.gnb_detail').toggle();    
  });

});

/* 상단 리스트 클릭 */
$(document).ready(function(){
  
  $('.gnb_top_list_detail').hide();
  
  $('.btn_gnb_list').click(function(){
    $('.gnb_detail').hide();
    $('.gnb_top_list_detail').toggle();    

  });

});


/* 공지사항 롤링 */

$(document).ready(function(){
  var height =  $(".notice_content").height();
  var num = $(".notice_line li").length;
  var max = height * num;
  var move = 0;
  function noticeRolling(){
    move += height;
    $(".notice_line").animate({"top":-move},1000,function(){
      if( move >= max ){
        $(this).css("top",0);
        move = 0;
      };
    });
  };
  noticeRollingOff = setInterval(noticeRolling,2000);
  $(".notice_line").append($(".notice_line li").first().clone());

  $(".notice_line").mouseover(function(){
    clearInterval(noticeRollingOff);
  });
  $(".notice_line").mouseleave(function(){
    noticeRollingOff = setInterval(noticeRolling,2000);
  });
});		

/* 달력 */


$(function(){
  //$('#datepicker').datepicker();

  $("input[id^=datepicker]").datepicker();
});

$(function() {
  //input을 datepicker로 선언
  $("#datepicker").datepicker({
      dateFormat: 'yy-mm-dd' //달력 날짜 형태
      ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
      ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
      ,changeYear: true //option값 년 선택 가능
      ,changeMonth: true //option값  월 선택 가능                
      ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
      ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
      ,buttonText: "선택" //버튼 호버 텍스트              
      ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
      ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
      ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
      ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
      ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
      ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
      ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
  });                    
  
  //$("input[id^=datepicker]").datepicker();
  //초기값을 오늘 날짜로 설정해줘야 합니다.
  $("input[id^=datepicker]").datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
    
});

// 즐겨찾기 토글

//토스트
let removeToast;

function toast(string) {
    const toast = document.getElementById("toast_action");

    toast.classList.contains("active") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function () {
            document.getElementById("toast_action").classList.remove("active")
        }, 1000)) :
        removeToast = setTimeout(function () {
            document.getElementById("toast_action").classList.remove("active")
        }, 1000)
    toast.classList.add("active"),
        toast.innerText = string
}

$('.icon_bookmark').click(function () {
  if ($(this).hasClass('on')) {
      $(this).removeClass('on');
      //modaldiv = $('.modal_bookmarkno_wrap');
      //go_modal();
      //$("#modalIdBookmarkno").show();
      toast('즐겨찾기가 삭제 되었습니다.');
  } else {
      $(this).addClass('on');      
      //modaldiv = $('.modal_bookmark_wrap');
      //go_modal();
      //$("#modalIdBookmark").show();
      toast('즐겨찾기에 추가 되었습니다.');
  }
});

/* 퀵 토글 */

$(document).ready(function(){
  $('.aside_btn').click(function(){
    $(".aside_btn_toggle").slideToggle(50); 
    $(this).toggleClass('active');
  });
});

/* 셀렉트 _new */



/* 셀렉트 */

$(document).ready(function() {
  enableSelectBoxes();

  $('body').click(function(e){
    if($("div.select_type01 > div.selectOptions").css("display") == "block"){
    	if($("div.select_type01").has(e.target).length == 0){
        	$("div.select_type01 > div.selectOptions").hide()
        }
      }
  })
  
});

function enableSelectBoxes(){
  $('div.select_type01').each(function(){
    $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
    $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
    
    $(this).children('span.selected,span.selectArrow').click(function(){
      if($(this).parent().children('div.selectOptions').css('display') == 'none'){
        $(this).parent().children('div.selectOptions').css('display','block');
     
      }
      else
      {
        $(this).parent().children('div.selectOptions').css('display','none');
      }
    });
    
    $(this).find('span.selectOption').click(function(){
      $(this).parent().css('display','none');
      $(this).closest('div.select_type01').attr('value',$(this).attr('value'));
      $(this).parent().siblings('span.selected').html($(this).html());
    });

  });		
  

}

$(document).ready(function() {
  enableSelectBoxes1();

  $('body').click(function(e){
    if($("div.select_type_linecon > div.selectOptions").css("display") == "block"){
    	if($("div.select_type_linecon").has(e.target).length == 0){
        	$("div.select_type_linecon > div.selectOptions").hide()
        }
      }
  })
  
});

function enableSelectBoxes1(){
  $('div.select_type_linecon').each(function(){
    $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
    $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
    
    $(this).children('span.selected,span.selectArrow').click(function(){
      if($(this).parent().children('div.selectOptions').css('display') == 'none'){
        $(this).parent().children('div.selectOptions').css('display','block');
     
      }
      else
      {
        $(this).parent().children('div.selectOptions').css('display','none');
      }
    });
    
    $(this).find('span.selectOption').click(function(){
      $(this).parent().css('display','none');
      $(this).closest('div.select_type_linecon').attr('value',$(this).attr('value'));
      $(this).parent().siblings('span.selected').html($(this).html());
    });

  });		
  

}





/* GNB select */

$(document).ready(function() {
  enableSelectBoxes01();

  $('body').click(function(e){
    if($("div.gnb_search_select > div.selectOptions").css("display") == "block"){
    	if($("div.gnb_search_select").has(e.target).length == 0){
        	$("div.gnb_search_select > div.selectOptions").hide()
        }
      }
  })
});


function enableSelectBoxes01(){
  $('div.gnb_search_select').each(function(){
    $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
    $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
    
    $(this).children('span.selected,span.selectArrow').click(function(){
      if($(this).parent().children('div.selectOptions').css('display') == 'none'){
        $(this).parent().children('div.selectOptions').css('display','block');
      }
      else
      {
        $(this).parent().children('div.selectOptions').css('display','none');
      }
    });
    
    $(this).find('span.selectOption').click(function(){
      $(this).parent().css('display','none');
      $(this).closest('div.gnb_search_select').attr('value',$(this).attr('value'));
      $(this).parent().siblings('span.selected').html($(this).html());
    });
  });				
}


$(document).ready(function() {
  enableSelectBoxes02();

  $('body').click(function(e){
    if($("div.select_type_c > div.selectOptions").css("display") == "block"){
    	if($("div.select_type_c").has(e.target).length == 0){
        	$("div.select_type_c > div.selectOptions").hide()
        }
      }
  })
});


function enableSelectBoxes02(){
  $('div.select_type_c').each(function(){
    $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
    $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
    
    $(this).children('span.selected,span.selectArrow').click(function(){
      if($(this).parent().children('div.selectOptions').css('display') == 'none'){
        $(this).parent().children('div.selectOptions').css('display','block');
      }
      else
      {
        $(this).parent().children('div.selectOptions').css('display','none');
      }
    });
    
    $(this).find('span.selectOption').click(function(){
      $(this).parent().css('display','none');
      $(this).closest('div.select_type_c').attr('value',$(this).attr('value'));
      $(this).parent().siblings('span.selected').html($(this).html());
    });
  });				
}

$(document).ready(function() {
  enableSelectBoxes03();

  $('body').click(function(e){
    if($("div.select_type_m > div.selectOptions").css("display") == "block"){
    	if($("div.select_type_m").has(e.target).length == 0){
        	$("div.select_type_m > div.selectOptions").hide()
        }
      }
  })
});


function enableSelectBoxes03(){
  $('div.select_type_m').each(function(){
    $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
    $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
    
    $(this).children('span.selected,span.selectArrow').click(function(){
      if($(this).parent().children('div.selectOptions').css('display') == 'none'){
        $(this).parent().children('div.selectOptions').css('display','block');
      }
      else
      {
        $(this).parent().children('div.selectOptions').css('display','none');
      }
    });
    
    $(this).find('span.selectOption').click(function(){
      $(this).parent().css('display','none');
      $(this).closest('div.select_type_m').attr('value',$(this).attr('value'));
      $(this).parent().siblings('span.selected').html($(this).html());
    });
  });				
}





















/* 토글 ON.OFF */

$('.switch_toggle_type01').on('click', function () {
  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('input[type="hidden"]').val('N');
  } else {
      $(this).addClass('active');
      $(this).find('input[type="hidden"]').val('Y');
  }
})

$('.switch_toggle_type02').on('click', function () {
  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('input[type="hidden"]').val('N');
  } else {
      $(this).addClass('active');
      $(this).find('input[type="hidden"]').val('Y');
  }
})

$(".toggle_btn").on("click", function () {
  var row = $(this).parents(".filter_row");
  if (row.hasClass("active")) {
    row.removeClass("active");
  } else {
    row.addClass("active");
  }
  row.find(".filter_ul").slideToggle("300ms");
});


/********************************* 모달창 **************************************/

    var modaldiv; 

    go_modal = function (){
        modaldiv.css("top", Math.max(0, (($(window).height() - modaldiv.outerHeight()) / 2) + $(window).scrollTop()) + "px");
        modaldiv.css("left", Math.max(0, (($(window).width() - modaldiv.outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        $("html,body").addClass("modal_not_scroll");

    };

    bye_modal = function(){

        $("html,body").removeClass("modal_not_scroll");
        
    };

    //즐겨찾기 확인 닫기모달
    $(".btn_clean_ok").click(function(){ 
        bye_modal();
        $("div[id^=modalIdBookmark]").hide();
    }); 

    $(function(){  
      $(".go_modal_bookmark").click(function(){ 
          modaldiv = $('.modal_bookmark_wrap');
          go_modal();
          $("#modalIdBookmark").show();
      }); 
    });


    // 사용자수정 모달
    $(function(){  
      $(".edit_btn").click(function(){ 
          go_modal();
          $("#modalIdUmodi").show();
      }); 
      $(".modal_con_wrap > .modal_title > .modal_close_btn").click(function(){ 
          bye_modal();
          $("#modalIdUmodi").hide();
      }); 
    });

    // 삭제 모달
    $(function(){  
      $(".delete_btn").click(function(){ 
          go_modal();
          $("#modalIdClean").show();
          $("#modalIdClean").css("z-index","100")
      }); 
      $(".modal_con_wrap > .modal_title > .modal_close_btn").click(function(){ 
          bye_modal();
          $("#modalIdClean").hide();
      }); 
    });

    // 비밀번호변경 모달
    $(function(){  
      $(".key_btn").click(function(){ 
          go_modal();
          $("#modalIdUpass").show();
      }); 
      $(".modal_con_wrap > .modal_title > .modal_close_btn").click(function(){ 
          bye_modal();
          $("#modalIdUpass").hide();
      }); 
    });
    

    $(function(){  
        $(".go_modal1").click(function(){ 
            go_modal();
            $("#modalId1").show();
        }); 
        $(".modal_con_wrap > .modal_title > .modal_close_btn").click(function(){ 
            bye_modal();
            $("#modalId1").hide();
        }); 
    });

    $(function(){    
        $(".go_modal2").click(function(){ 
            go_modal();
            $("#modalId2").show();
        }); 
        $(".modal_con_wrap > .modal_close_btn").click(function(){ 
            bye_modal();
            $("#modalId2").hide();
        }); 
    });

    //로그아웃
    $(function(){  
      $(".ac_logout").click(function(){ 
          modaldiv = $('.modal_logout_wrap');
          go_modal();
          $("#modalIdLogout").show();
      }); 
      $(".modal_con_wrap > .modal_btn> .btn_logout_cancel").click(function(){ 
          bye_modal();
          $("#modalIdLogout").hide();
      }); 
    });
    
    //함체상세정보
    $(function(){  
      $(".go_modal_standard").click(function(){ 
          modaldiv = $('.modal_standard_wrap');
          go_modal();
          $("#modalIdStandard").show();
      }); 
      $("#standard_btn,#standard_btn01,#standard_btn02,#standard_btn03,#standard_btn04").click(function(){ 
          bye_modal();
          $("#modalIdStandard").hide();
      }); 
    });


    //연결하기
    $(function(){  
      $(".go_modal_connect").click(function(){ 
          modaldiv = $('.modal_connect_wrap');
          //$('.modal_all_wrap').css("z-index","100");
          go_modal();
          $("#modalIdConnect").css("z-index","100");
          $("#modalIdConnect").show();
      }); 
      $("#connect_btn,#connect_btn01").click(function(){ 
          bye_modal();
          $("#modalIdConnect").css("z-index","initial");
          $("#modalIdConnect").hide();
      }); 
    });


     //연결하기 끊기
     $(function(){  
      $(".go_modal_connectd").click(function(){ 
          modaldiv = $('.modal_connectd_wrap');
          go_modal();
          $("#modalIdConnectd").css("z-index","100");
          $("#modalIdConnectd").show();
      }); 
      $("#connectd_btn,#connectd_btn01").click(function(){ 
          bye_modal();
          $("#modalIdConnectd").css("z-index","initial");
          $("#modalIdConnectd").hide();
      }); 
    });


    //BIT 상세정보
    $(function(){  
      $(".go_modal_bit").click(function(){ 
          modaldiv = $('.modal_bit_wrap');
          go_modal();
          $("#modalIdBIT").show();
      }); 
      $("#bit_btn,#bit_btn01,#bit_btn02,#bit_btn03,#bit_btn04,#bit_btn05").click(function(){ 
          bye_modal();
          $("#modalIdBIT").hide();
      }); 
    });


    //선로 상세정보
    $(function(){  
      $(".go_modal_line").click(function(){ 
         modaldiv = $('.modal_line_wrap');
          go_modal();
          $("#modalIdLine").show();
      }); 
      $("#line_btn,#line_btn01,#line_btn02,#line_btn03").click(function(){ 
          bye_modal();
          $("#modalIdLine").hide();
      }); 
    });

    //알람 LIST
    $(function(){  
      $(".go_modal_alert").click(function(){ 
          modaldiv = $('.modal_alert_wrap');
          go_modal();
          $("#modalIdAlert").show();
      }); 
      $("#alert_btn,#alert_btn01").click(function(){ 
          bye_modal();
          $("#modalIdAlert").hide();
      }); 
    });

     //사업관리
     $(function(){  
      $(".go_modal_business").click(function(){ 
          modaldiv = $('.modal_business_wrap');
          go_modal();
          $("#modalIdBusiness").show();
      }); 
      $("#business_btn,#business_btn01").click(function(){ 
          bye_modal();
          $("#modalIdBusiness").hide();
      }); 
    });

    //삭제
    $(function(){  
      $(".delete_btn").click(function(){ 
          modaldiv = $('.modal_clean_wrap');
          go_modal();
          $("#modalIdClean").show();
      }); 
      $("#clean_btn").click(function(){ 
          bye_modal();
          $("#modalIdClean").hide();
      }); 
    });

     //사업관리등록
     $(function(){  
      $(".go_modal_businessd").click(function(){ 
          modaldiv = $('.modal_businessd_wrap');
          go_modal();
          $("#modalIdBusinessd").show();
      }); 
      $("#businessd_btn,#businessd_btn01").click(function(){ 
          modaldiv = $('.modal_businessd_wrap');
          bye_modal();
          $("#modalIdBusinessd").hide();
      }); 
    });

    //환경설정
    $(function(){  
      $(".go_modal_setting").click(function(){ 
          modaldiv = $('.modal_setting_wrap');
          go_modal();
          $("#modalIdSetting").show();
      }); 
      $("#setting_btn,#setting_btn01,#setting_btn02,#setting_btn03").click(function(){ 
          bye_modal();
          $("#modalIdSetting").hide();
      }); 
    });

    //사용자수정
    $(function(){  
      $(".go_modal_usermodi").click(function(){ 
          modaldiv = $('.modal_usermodi_wrap');
          go_modal();
          $("#modalIdUmodi").show();
      }); 
      $("#usermodi_btn,#usermodi_btn01").click(function(){ 
          bye_modal();
          $("#modalIdUmodi").hide();
      }); 
    });


    //비밀번호 변경
    $(function(){  
      $(".go_modal_userpass").click(function(){ 
          modaldiv = $('.modal_userpass_wrap');
          go_modal();
          $("#modalIdUpass").show();
      }); 
      $("#userpass_btn,#userpass_btn01").click(function(){ 
          bye_modal();
          $("#modalIdUpass").hide();
      }); 
    });


/******************************** 클릭레이어 *************************************/    

// 범례 타겟 옆에 레이어 팝업 나타내기
$('.area_btn').mouseenter(function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top -80; //상단 좌표 
	var divLeft = p.left +20; //좌측 좌표 
	//레이어 팝업 view
	$(this).find('.area_btn_tooltip').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
// 타겟 옆에 레이어 팝업 없애기
$('.area_btn').mouseleave(function(e){
	$(this).find('.area_btn_tooltip').hide();
});
// 범례 타겟 옆에 레이어 팝업 나타내기 end

// 선택 타겟 옆에 레이어 팝업 나타내기
$('.over_info').mouseenter(function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top -250; //상단 좌표 
	var divLeft = p.left -650; //좌측 좌표 
	//레이어 팝업 view
	$(this).parents('.click_overlap').siblings('.click_icbus').find('.map_detail_icbus').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
// 타겟 옆에 레이어 팝업 없애기
$('.over_info').mouseleave(function(e){
	$(this).parents('.click_overlap').siblings('.click_icbus').find('.map_detail_icbus').hide();
});
// 선택 타겟 옆에 레이어 팝업 나타내기 end

// 시설물추가 옆에 레이어 팝업 나타내기
$('.detail_fac_plus').click(function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top ; //상단 좌표 
	var divLeft = p.left +155; //좌측 좌표 
	//레이어 팝업 view
	$(this).parents('.click_standard').siblings('.fac_plus').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
  });
 // 취소버튼
  $("#userpass_btn,#userpass_btn01").click(function(){ 
    bye_modal();
    $(".fac_plus").hide();
  }); 
// 시설물추가 옆에 레이어 팝업 나타내기 end


    // 클릭레이어
    $('.click_icbus').click(function(e){

      var divLeft = 40;
      var divTop = -53.5;
      
      if($("#c_e_1").val() == "1"){

        $('.map_detail_rect').css({
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        }).hide();
        $("#c_e_1").val(0);

      }else{
        $('.map_detail_rect').css({
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        }).show();
        $('click_icbus').next().addClass('active');
        $("#c_e_1").val(1);
      }
      
    });

    $('.click_standard').click(function(e){

      var divLeft = 40;
      var divTop = -20;
      
      if($("#c_e_2").val() == "1"){

        $('.map_detail_rect_stdard').css({
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        }).hide();
        $("#c_e_2").val(0);

      }else{
        $('.map_detail_rect_stdard').css({
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        }).show();
        $('click_standard').next().addClass('active');
        $("#c_e_2").val(1);
      }
    });
      //memo
      $('.click_memo').mouseover(function(){

        var divLeft = 0;
        var divTop = -90;
        $('.map_detail_memo_rect').css({
          "display":"block",
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        });
        
      });

      $('.click_memo').mouseout(function(e){

       
        $('.map_detail_memo_rect').css("display","none");
        
      });

  // 테이블 박스 내 체크 박스 전체 선택 및 해제
  $('input[id^="cid"]').click(function () {
    if ($(this).is(':checked') == true) {
      $(this).closest('table').children().find('input[name="check"]').prop('checked', true);
    } else {
      $(this).closest('table').children().find('input[name="check"]').prop('checked', false);
    }
  })


  //////////////////////////////////////////////////////////////////////////////
  
    
  
    // 테이블 박스 내 체크 박스 전체 선택 및 해제
    $('input[id^="cba"]').click(function () {
      if ($(this).is(':checked') == true) {
        $(this).closest('table').children().find('input[name="check"]').prop('checked', true);
      } else {
        $(this).closest('table').children().find('input[name="check"]').prop('checked', false);
      }
    })
  
  
  // 숫자 입력만 가능한 input박스
  $(function () {
    $('input.numberOnly').keyup(function () {
      var regexp = /[^-\.0-9]/g;
      var str = ($(this).val());
      if (regexp.test(str)) {
        $('.number-modal-background .content').text('숫자 입력만 가능합니다.');
        $('body').css('overflow', 'hidden');
        $('.number-modal-background').addClass('active');
        $(this).val(str.replace(regexp, ''));
      }
    });
  
    // 옵션 값 말줄임
    // 말줄임이 필요한 select에 shorten 클래스 부여 //
    $('select.shorten > option').each(function () {
      var length = 8; //표시할 글자 수 정하기
  
      $(this).each(function () {
        if ($(this).text().length >= length) {
          $(this).text($(this).text().substr(0, length) + '...'); //지정한 글자수 이후 표시할 텍스트 '...'
        }
      });
    });
  
  
    // 말줄임이 필요한 select에 shorten 클래스 부여 //
    $('select.shorten1 > option').each(function () {
      var length = 26; //표시할 글자 수 정하기
  
      $(this).each(function () {
        if ($(this).text().length >= length) {
          $(this).text($(this).text().substr(0, length) + '...'); //지정한 글자수 이후 표시할 텍스트 '...'
        }
      });
    });
  
    // 정렬아이콘 변경
    $('.arrow_push').click(function(){
      if($('#hidden_arrow_val').val() == "0"){
        //$('button.arrow').removeClass('down');
        $('#hidden_arrow_val').val(1);
        $('button.arrow').addClass('down');
      }
      else{
        $('#hidden_arrow_val').val(0);
        $('button.arrow').removeClass('down');
      }
      
  
    });
  
  
  })

 /*$(function(){ //전체선택 체크박스 클릭 
    $('input[id^="fta"]').click(function(){ 
      if($('input[id^="fta"]').prop("checked")) { 
        $("input[name^=check]").prop("checked",true); 
      } else { 
        $("input[name^=check]").prop("checked",false); } 
      }) 
    })*/

$(function(){ //전체선택 체크박스 클릭 
  $('input[id="fta1"]').click(function(){ 
    if($('input[id="fta1').prop("checked")) { 
      $("input[name=check1]").prop("checked",true); 
    } else { 
      $("input[name=check1]").prop("checked",false); } 
    }) 
  })

  $(function(){ //전체선택 체크박스 클릭 
    $('input[id="fta2"]').click(function(){ 
      if($('input[id="fta2"]').prop("checked")) { 
        $("input[name=check2]").prop("checked",true); 
      } else { 
        $("input[name=check2]").prop("checked",false); } 
      }) 
    })

    $(function(){ //전체선택 체크박스 클릭 
      $('input[id^="fta3"]').click(function(){ 
        if($('input[id="fta3"]').prop("checked")) { 
          $("input[name=check3]").prop("checked",true); 
        } else { 
          $("input[name=check3]").prop("checked",false); } 
        }) 
      })


  /*function checkSelectAll()  {
    // 전체 체크박스
    const checkboxes 
      = document.querySelectorAll('input[name="check1"]');
    // 선택된 체크박스
    const checked 
      = document.querySelectorAll('input[name="check1"]:checked');
    // select all 체크박스
    const selectAll 
      = document.querySelector('input[name="selectall1"]');
    
    if(checkboxes.length === checked.length)  {
      selectAll.checked = true;
    }else {
      selectAll.checked = false;
    }
  
  }
  
  function selectAll(selectAll)  {
    const checkboxes 
       = document.getElementsByName('check1');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked
    })
  }
*/

   // 파일삭제

   $(function () {
    var fileTarget = $('.filebox01 .upload-hidden');

    fileTarget.on('change', function () {
        if (window.FileReader) {
            // 파일명 추출
            var filename = $(this)[0].files[0].name;
        } else {
            // Old IE 파일명 추출
            var filename = $(this).val().split('/').pop().split('\\').pop();
        };
        // $(this).parents('.file-group').children('.filebox').remove();
        //var template = `<li><span>${filename}</span><button class="file_upload_del" id="file_upload_del"></button></li>` 
        var template = "<li><span class='img_area'>"+filename+"</span><button class='file_upload_del_btn' id='file_upload_del' ></button></li>"; 
        var $ul = $(this).parents('.row_file_content').find('.row_file_list');
        $ul.append(template);
    });

      $('.row_file_list').on('click', '.file_upload_del_btn',function(){  
        $(this).parents('.row_file_list li').remove();
        $(this).closest('.filebox01').find('#input-img-file1').val('');

    });


  });

//체크박스
$(document).ready(function() {
  $("#fta1").click(function() {
    if($("#fta1").is(":checked")) $("input[name=check1]").prop("checked", true);
    else $("input[name=check1]").prop("checked", false);
  });
  
  $("input[name=check1]").click(function() {
    var total = $("input[name=check1]").length;
    var checked = $("input[name=check1]:checked").length;
    
    if(total != checked) $("#fta1").prop("checked", false);
    else $("#fta1").prop("checked", true); 
  });
});

