$(function () {
  const agt = navigator.userAgent.toLowerCase(); 

  var headID = document.getElementsByTagName("head")[0];         
  var metaNode = document.createElement('meta');
  metaNode.name = 'viewport';
  if ( agt.indexOf("iphone") > -1||agt.indexOf("ipad") > -1||agt.indexOf("ipod") > -1 ){
    metaNode.content = 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0';    
  } else {
    metaNode.content = 'width=device-width, initial-scale=1.0';
  }
  metaNode.id = 'metatag';
  headID.appendChild(metaNode);

  if (agt.indexOf("windows") > -1)  {
    $(window).on('resize', function(e){ 
      $("input[id^=datepicker]").datepicker("hide");
    });
  }
  // top section load
  $('#top').load('top.html');

  $('.setting-btn').on('click', function () {
    $('#dashboard').addClass('active');
    $('body').css('overflow', 'hidden');
  })
  $('.setting-close-btn').on('click', function () {
    $('#dashboard').removeClass('active');
    $('body').css('overflow', 'auto');
  })

  $(".toggle-btn").on("click", function () {
    var row = $(this).parents(".row");
    if (row.hasClass("active")) {
      row.removeClass("active");
    } else {
      row.addClass("active");
    }
    row.find(".toggle-box").slideToggle("300ms");
  });

  $(".tab-li-content").on("click", function () {
     var id = $(this).data("id");
     $(".tab-li-content").removeClass("active");
     $(this).addClass("active");
     $(".tab-content").removeClass("active");
     $("#" + id).addClass("active");
   });

  //numberonly input
  // $("input:text[numberOnly]").on("keyup", function () {
  //   $(this).val(
  //     $(this)
  //       .val()
  //       .replace(/[^0-9]/g, "")
  //   );
  // });

  $(".approval-tab-navi").on("click", function () {
    var id = $(this).data("id");
    $(".approval-tab-navi").removeClass("active");
    $(this).addClass("active");
    $(".approval-tab-content").removeClass("active");
    $("#" + id).addClass("active");
  });

  $(".arrow-btn").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).parent().next().removeClass("active");
      $(this).removeClass("active");
    } else {
      $(this).parent().next().addClass("active");
      $(this).addClass("active");
    }
  });

  $(".approval-line-btn").on("click", function () {
    $(".approval-modal-background").addClass("active");
    $('body').css('overflow', 'hidden');
  });

  $("#approvalConfirm").on("click", function () {
    $(".confirm-modal-background").addClass("active");
    $('body').css('overflow', 'hidden');
  });


  $("#approvalWConfirm").on("click", function () {
    $("#approvalWConfirm-writer").addClass("active");
    $('body').css('overflow', 'hidden');
  });

  $(".open-confirm-btn").on("click", function () {
    $(".confirm-modal-background").addClass("active");
    $('body').css('overflow', 'hidden');
  });


/*  $(".sub-toggle").on("click", function () {
    $(this).addClass("active");
    $(this).parents(".tr").next().addClass("active");

  });
*/
    $('.sub-toggle').on("click", function(){

        $(this).toggleClass('active');
        //$('.sub-info-box').toggle();
        $(this).parents(".tr").next().toggle();
    });



  
  $(".alert-modal-background .confirm-btn").on("click", function () {
    if ($('.security-word').css('display') == 'flex') {
      $(".alert-modal-background").removeClass("active");
      $('body').css('overflow', 'hidden');
    } else {
      $(".alert-modal-background").removeClass("active");
      $('body').css('overflow', 'auto');
    }
  });

  $(".number-modal-background .confirm-btn").on("click", function () {
    $(".number-modal-background").removeClass("active");
    $('body').css('overflow', 'auto');
  });

  // 닫기 버튼
  $(".approval-modal-background .close-btn").on("click", function () {
    $(".approval-modal-background").removeClass("active");
    $('body').css('overflow', 'auto');
  });

  $(".modal-close-btn").on("click", function () {
    $(".modal").removeClass("active");
    $('body').css('overflow', 'auto');
  });

  $(".modal-cancel-btn").on("click", function () {
    $(".modal").removeClass("active");
    $('body').css('overflow', 'auto');
  });

  $(".modal-wcancel-btn").on("click", function () {
    $(".modal").removeClass("active");
    $('body').css('overflow', 'auto');
  });

  $(".sub-modal-close-btn").on("click", function () {
    $(".sub-modal").removeClass("active");
    $('body').css('overflow', 'auto');
  });

  $(".sub-modal-cancel-btn").on("click", function () {
    $(".sub-modal").removeClass("active");
    $('body').css('overflow', 'auto');
  });

  $('button[id^="disableScroll"]').click(function () {
    $('body').css('overflow', 'hidden');
  });

});

function openAlert() {
  $(".modal").removeClass("active");
  $('body').css('overflow', 'auto');
  $(".alert-modal-background").addClass("active");
}

function disableScroll() {
  $('body').css('overflow', 'hidden');
  alert('dpd');
}

function closeDptUpdate(e) {
  $(e).closest('.dpt-update-modal').removeClass('active');
}

$(function () {
  // 달력

  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월',
      '12월'
    ],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
  });

  $("input[id^=datepicker]").datepicker();
  $("input[id^=datepicker]").click(function(e){
    e.preventDefault();
    $(this).datepicker().datepicker("show");
  });
  $('.ui-state-active').mouseenter(function () {
   $(this).removeClass("ui-state-hover");
  })

  

  // 테이블 박스 내 체크 박스 전체 선택 및 해제
  $('input[id^="cba"]').click(function () {
    if ($(this).is(':checked') == true) {
      $(this).closest('table').children().find('input[name="check"]').prop('checked', true);
    } else {
      $(this).closest('table').children().find('input[name="check"]').prop('checked', false);
    }
  })

  // 통합설정-팩스버튼
  $('.fax-btn').click(function () {
    var targetMemo = $(this).closest('.jb-table-row').find('input');
    if (targetMemo[1].value == '') {
      $('.alert-modal-background .content').text('팩스회선ID를 입력해 주십시오.');
      $('.alert-modal-background').addClass('active');
    } else if (targetMemo[2].value == '') {
      $('.alert-modal-background .content').text('팩스회선명을 입력해 주십시오');
      $('.alert-modal-background').addClass('active');
    }
  })
});

// 통합설정
// input row 추가
function addInfoRow(e) {
  var parent = $(e).closest('.setting-table').find('.add-row');
  var childrenLength = parent.find('ul').children('li').length + 1;
  var value = $(e).prev('input').val();
  var template = `<li><span>${value}</span><button class="del-btn"></button></li>`;

  if (!!value) {
    if (childrenLength < 6) {

      parent.css('height', '50px');
      parent.find('ul').append(template);
    } else if (childrenLength < 11) {
      parent.css('height', '100px');
      parent.find('ul').append(template);
    } else {
      $('.alert-modal-background .content').text('10개를 초과할 수 없습니다.');
      $('.alert-modal-background').addClass('active');
    }
  } else {
    $('.alert-modal-background .content').text('값을 입력해 주세요.');
    $('.alert-modal-background').addClass('active');
  }

}

// input row 제거
$(document).on('click', '.del-btn', function () {
  var rowHeight = $(this).closest('.add-row');
  var itemLength = $(this).closest('.add-row').find('ul').children('li').length - 1;

  if (itemLength > 0 && itemLength < 6) {
    rowHeight.css('height', '50px');
  } else if (itemLength == 0) {
    rowHeight.css('height', '0px');
  }
  $(this).closest('li').remove();

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
  // $(window).on('resize', function(e){ 
  //   $("input[id^=datepicker]").datepicker("hide");
  // });
})