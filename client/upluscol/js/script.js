$(function () {
  //component 불러오기
  //   if ($('.header-wrap').hasClass('m-header-wrap') == false) {
  //       $('.header-wrap').load('header.html');
  //   }
  /*
  $('.layout-wrap').load('lnb.html',function(){

  
  //$('.layout-account-wrap').load('lnb_account.html'); //lnb load
  
//   $('.upload-popup-box').load('uploadModal.html');

  // top menu bar
//   $('.tool-btn').click(function () {
//       var toolBtnId = $(this).attr('id');
//       //console.log($(this));
//       var toolBoxId = '#' + toolBtnId + '-box';
//       //console.log(toolBoxId);

//       if ($(toolBoxId).css('display') == "block") {
//           $(toolBoxId).hide(100);
//       } else {
//           $(toolBoxId).show(100);
//           $('.menu-box').not(toolBoxId).hide(100);
//       }
//   });

  //profile 모달 내 x버튼 클릭
  $('.close-btn').click(function () {
    //console.log($(this));
    var toolBtnClass = $(this);
    toolBtnClass.closest('ul').hide(100);
  });

  $(document).on('click', '#upload-file-btn', function (e) {
      e.preventDefault();
      $('#file').click();
  });

  $(document).on('click', '#upload-folder-btn', function (e) {
      e.preventDefault();
      $('#folder').click();
  });

  // unfold file tree
  $(document).on('click', 'li[id^=my-drive] i.ic-arrow, li[id^=my-drive1] i.ic-arrow', function () {
      var num = $(this).parents().data('child');
      var $target = $(this).siblings(`ul.child-node.child${num}`);
      if ($(this).hasClass('opened')) {
          $(this).removeClass('opened');
          $target.slideUp();
      } else if ($target.length > 0) {
          $(this).addClass('opened');
          $target.slideDown();
      }
  });

  // click folder
  $(document).on('click', 'ul[id^=drive-list] li button, li[id^=my-drive1] li button', function () {

    if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
    } else {
        console.log($(this));
        $(this).parents('ul[id^=drive-list]').find('li').removeClass('active');
        $(this).parent().addClass('active');
    }

})

  // mobile: file tree
  $(document).on('click', '.func-wrap .func-mobile-list', function () {
      if ($(this).hasClass('active')) {
          $('#lnb-wrap').css('left', '-300px');
          $('body').css('overflow', 'unset');
          $(this).removeClass('active');
      } else {
          $('#lnb-wrap').css('left', '0');
          $('body').css('overflow', 'hidden');
          $(this).addClass('active');
      }
  });

  // 제외 영역 클릭시 이벤트
  $('body').click(function(e){
    // console.log(e.target.id);
    if($(".func-wrap .func-mobile-list").hasClass("active")){
        //console.log('지금타겟은 '+ e.target.id);
  
        if((e.target.id) == ! $('#lnb_wrap') && $("#lnb-wrap").has(e.target).length == 0)
        {

            //console.log(e.target.id + '사라져라');

            $('#lnb-wrap').css('left', '-300px');
            $('body').css('overflow', 'unset');
            $('.func-wrap .func-mobile-list').removeClass('active');
    
        }
    }
})*/

  // folder & file click event
  $(document).on("click", ".folder-list li, .file-list li", function () {
    var check = $(this).children("input");
    if ($(this).hasClass("checked") && check.is(":checked") == true) {
      $(this).removeClass("checked");
      check.prop("checked", false);
    } else {
      $(this).addClass("checked");
      check.prop("checked", true);
    }
  });

  // 제외 영역 클릭시 이벤트
  // $('body').on('click', function (e) {
  //     var exceptArea = $(e.target).parents('.file-list').length;
  //     if (exceptArea == 0 && $('.file-list li.checked').length > 0) {
  //         $('.file-list').children('li').removeClass('checked');
  //     }
  //     console.log('ss');
  // });
  $("body").on("click", function (e) {
    var exceptArea = $(e.target).parents("#rmenu, #folder-menu").length;
    if (exceptArea == 0) {
      $("#rmenu, #folder-menu").children().remove();
      $("#rmenu, #folder-menu").hide();
    }
  });

  $("body").on("click", function (e) {
    var exceptArea = $(e.target).parents(".menu-box").length;
    //console.log(exceptArea);
    if (e.target.className == "tool-btn") {
      return false;
    } else if (exceptArea == 0 && e.target.className !== "tool-btn") {
      $(".menu-box").hide();
    }
  });

  //  우클릭 메뉴박스 생성(1번, 2번)
  function makeDriveMenu(obj) {
    var template = function (obj) {
      return `<li><button type="button" id="${obj.id}" data-share="${obj.data}">${obj.name}</button></li>`;
    };
    var result;
    for (var i = 0; i < obj.length; i++) {
      result = result + template(obj[i]);
    }
    return (result = result.substr(9, result.length));
  }

  // drag & drop
  var uploadFiles = [];
  var $drop = $(".drag-upload-box");
  $drop
    .on("dragenter", function (e) {
      //드래그 요소가 들어왔을떄
      $(this).addClass("drag-over");
      $(this).css("background-color", "#eee");
    })
    .on("dragleave", function (e) {
      //드래그 요소가 나갔을때
      $(this).removeClass("drag-over");
    })
    .on("dragover", function (e) {
      e.stopPropagation();
      e.preventDefault();
    })
    .on("drop", function (e) {
      //드래그한 항목을 떨어뜨렸을때
      e.preventDefault();
      $(".alert-upload-box").addClass("active");
      $(this).css("background-color", "#fff");
      $(this).removeClass("drag-over");
      var files = e.originalEvent.dataTransfer.files; //드래그&드랍 항목
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var size = uploadFiles.push(file); //업로드 목록에 추가
        console.log(size);
      }
    });

  $(document).on("click", ".upload-bar", function () {
    $(this).parents(".alert-upload-box").removeClass("active");
    $(".upload-popup-box").addClass("active");
  });

  // grid : button-row
  var tableItemCheck = $(".table").find('input[type="checkbox"]');
  var checkedArray = [];

  tableItemCheck.click(function () {
    var $folderID = $(this).attr("id");
    if ($(this).attr("name") == "file" && checkedArray.length == 0) {
      if (
        $(this).is(":checked") == true ||
        $('input[name="file"]').is(":checked") == true
      ) {
        $(".only-file").show();
        $(".button-row").show(100);
      } else {
        $(".button-row").hide(100);
      }
    } else if ($(this).attr("name") == "folder") {
      if ($(this).is(":checked") == true && !checkedArray.includes($folderID)) {
        checkedArray.push($folderID);
        $(".only-file").hide();
        $(".button-row").show(100);
      } else if (
        $(this).is(":checked") == false &&
        checkedArray.includes($folderID)
      ) {
        checkedArray.splice(checkedArray.indexOf($folderID), 1);
        if (
          checkedArray.length == 0 &&
          $('input[name="file"]').is(":checked") == true
        ) {
          $(".only-file").show();
          $(".button-row").show(100);
        }
      }
    }
  });

  $(document).on("click", "#close-this-btn", function () {
    $(".button-row").hide(100);
    tableItemCheck.prop("checked", false);
  });

  // mobile : path
  var $path = $(".path.mobile").children("a");
  var $pathArray = [];
  for (var i = 0; i < $path.length; i++) {
    var result = $path[i].innerHTML;
    $pathArray.push(result);
  }
  $pathArray = $pathArray.slice(0, $pathArray.length - 2);

  $(document).on("click", "#more-path-btn", function () {
    if ($("#path-box").css("display") == "none") {
      $(this).addClass("active");
      makePathBox($pathArray);
      $("#path-box").show(100);
    } else {
      $(this).removeClass("active");
      $("#path-box").children().remove();
      $("#path-box").hide(100);
    }
  });

  // mobile : 생략된 path 버튼 처리(1번, 2번)
  function makePathBox(path) {
    var template = function (path) {
      return `<a href="#">${path}</a>`;
    };
    var result;
    for (var i = 0; i < path.length; i++) {
      result = result + template(path[i]);
    }
    result = result.substr(9, result.length);
    $("#path-box").append(result);
  }

  // 탭메뉴
  $(document).on("click", ".tab-menu-box li", function () {
    var tabNumber = $(this).data("tab");
    $(this)
      .parents(".enter-content")
      .find(".tab-menu-box li")
      .removeClass("active");
    $(this)
      .parents(".enter-content")
      .find(".tab-content")
      .removeClass("active");
    $(this).addClass("active");
    $("#tab" + tabNumber).addClass("active");
  });

  // 새폴더 생성 모달
  $(document).on("click", "button[id^=new-folder-btn]", function () {
    $(".enter-content").removeClass("active");
    $(".alert-content .modal-title").text("새 폴더");
    $(".alert-content input").attr("placeholder", "폴더명을 입력하세요");
    $("body").css("overflow", "hidden");
    $(".alert-background, .alert-content").addClass("active");
  });

  // 이름바꾸기 모달
  $(document).on("click", "#change-this-btn", function () {
    $(".enter-content").removeClass("active");
    var folderName = $(this).data("share");
    $(".alert-content .modal-title").text("이름 바꾸기");
    $(".alert-content input").attr("placeholder", folderName);
    $("body").css("overflow", "hidden");
    $(".alert-background,.alert-content").addClass("active");
  });

  // 공유 & 초대 모달
  $(document).on("click", "button[id^=share-this-btn]", function () {
    $(".enter-content").removeClass("active");
    $("body").css("overflow", "hidden");
    $(".alert-background, .share-content").addClass("active");
  });

  $(document).on("click", ".invite-btn", function () {
    $(".enter-content").removeClass("active");
    $("body").css("overflow", "hidden");
    $(".alert-background, .invite-content").addClass("active");
  });

  // 신규 협업 추가 모달
  $(document).on("click", "button[id^=make-share-drive-btn]", function () {
    $(".enter-content").removeClass("active");
    $("body").css("overflow", "hidden");
    $(".alert-background, .new-share-content").addClass("active");
  });

  // 협업 삭제 모달
  $(document).on(
    "click",
    "button[id^=del-share-drive-btn], button[id^=del-this-btn]",
    function () {
      $(".enter-content").removeClass("active");
      var $name = $(this).data("share");
      $(".alert-content2 .modal-title").text("안내");
      $(".alert-content2 .modal-text").text(
        `${$name} 를(을) 삭제 하시겠습니까?`
      );
      $("body").css("overflow", "hidden");
      $(".alert-background, .alert-content2").addClass("active del-content");
    }
  );

  // 이동 모달
  $(document).on("click", "button[id^=move-this-btn]", function () {
    $(".enter-content").removeClass("active");
    $(".move-content .modal-title").text("이동");
    $(".move-content .sub-text").text("이동 대상 위치를 선택해 주세요");
    $(".move-content .foot button").text("이동");
    $("body").css("overflow", "hidden");
    $(".alert-background, .move-content").addClass("active");
  });

  // 복사 모달
  $(document).on("click", "button[id^=copy-this-btn]", function () {
    $(".enter-content").removeClass("active");
    $(".move-content .modal-title").text("복사");
    $(".move-content .sub-text").text("복사 대상 위치를 선택해 주세요");
    $(".move-content .foot button").text("복사");
    $("body").css("overflow", "hidden");
    $(".alert-background, .move-content").addClass("active");
  });

  // 업로드상태 모달
  $(document).on("click", ".control .pause-btn", function () {
    $(this).toggleClass("start-btn");
    $(this).parent().siblings(".progressbar").children().toggleClass("back");
  });

  $(document).on("click", ".control .stop-btn", function () {
    $(this).parent().addClass("deactive");
    $(this).parent().siblings(".state").addClass("active");
    $(this).parent().siblings(".site").css("color", "#a4262c");
    $(this).parent().siblings(".site").text("취소됨");
    $(this).parent().siblings(".progressbar").addClass("hide");
    $(this).parent().siblings(".state").children().addClass("i-upload-error");
  });

  // email-list-box event
  $(document).on(
    "propertychange change keyup paste input",
    "input[id^=search-email], #search-user",
    function () {
      if ($(this).val() == "") {
        $(this).siblings(".email-list-box").hide(100);
      } else {
        $(this).siblings(".email-list-box").show(100);
      }
    }
  );

  $(document).on("click", ".email-list-box li", function () {
    var $email = $(this).children("span").text();
    $(this)
      .parent()
      .siblings("input[id^=search-email], #search-user")
      .val($email);
    $(this).closest("td").find(".email-list-box").hide(100);
  });

  // 모달 내 아이템 추가 버튼
  $(document).on("click", ".add-btn", function () {
    var emailValue = $.trim($(this).siblings("input").val());
    var template = `<li><span>${emailValue}</span><button type="button"
      class="del-email-btn"></button></li>`;
    console.log(emailValue);
    if (!!emailValue || $(".email-box").children().length > 0) {
      $(this).parent().siblings(".email-box").css("display", "flex");
      $(this).parent().siblings(".email-box").append(template);
    } else if (emailValue == "") {
      $(".confirm-content2 .modal-text").text("값을 입력해 주세요.");
      $(".confirm-content2").addClass("active");
    }
  });

  // 모달 내 아이템 삭제 버튼
  $(document).on("click", ".del-email-btn", function () {
    $(this).parent("li").remove();
    if ($(".email-box").children().length == 0) {
      $(".email-box").hide();
    }
  });

  // 링크 생성 버튼
  $(document).on("click", "#make-link-btn", function () {
    $(this).parent().removeClass("active");
    $(".link-box").not(":first-child").addClass("active");
  });

  // 링크 복사 버튼
  $(document).on("click", "button[id^=copy-link-btn]", function () {
    $(".confirm-content2 .modal-text").text("복사되었습니다.");
    $(".confirm-content2").addClass("active");
  });

  // 권한 위임 버튼
  $(document).on("click", "#delegate-btn", function () {
    $(".alert-content2 .modal-text").text("마스터 권한을 위임하시겠습니까?");
    $(".alert-background, .alert-content2").addClass("active");
  });

  // 협업 삭제 버튼
  $(document).on("click", "#del-cowork-btn", function () {
    $(".alert-content2 .modal-text").text("삭제 하시겠습니까?");
    $(".alert-background, .alert-content2").addClass("active");
  });

  // 입장 수락/거절
  $(document).on("click", ".yes-btn", function () {
    $(this).parent().text("수락 되었습니다.");
  });

  $(document).on("click", ".no-btn", function () {
    $(this).parent().text("거절 되었습니다.");
  });

  // 공통 : 확인 버튼
  $(document).on("click", ".confirm-btn", function () {
    var parentModalName = $(this).parents(".enter-content");
    if (parentModalName.hasClass("new-share-content")) {
      $(".confirm-content .modal-text").text("중복된 협업명이 존재 합니다.");
    } else if (parentModalName.hasClass("del-content")) {
      $(".confirm-content .modal-text").text("삭제되었습니다.");
    }
    $(this).parents(".enter-ask-content").removeClass("acitve");
    $(this).parents(".enter-content").removeClass("active");
    $(".alert-content input").val("");
    $(".confirm-content").addClass("active");
  });

  // 공통 : 모달 닫기 버튼
  $(document).on("click", ".alert-close-btn", function () {
    $(".move-content i.arrow").removeClass("opened");
    $(".move-content .child-node").hide();
    $(".alert-content input").val("");
    $(".upload-popup-box").removeClass("active");
    $(this).parents(".enter-content").removeClass("active");
    $("body").css("overflow", "auto");
    $(".alert-background").removeClass("active");
  });

  // 공통 : 취소 버튼
  $(document).on("click", ".cancel-btn", function () {
    $(this).parents(".enter-content").removeClass("active");
    $(".alert-content input").val("");
    $("body").css("overflow", "auto");
    $(".alert-background").removeClass("active");
  });

  // 공통 : confirm-modal 내 닫기 버튼
  $(document).on("click", "#last-confirm-btn", function () {
    $(this).parents(".confirm-content").removeClass("active");
    $("body").css("overflow", "auto");
    $(".alert-background").removeClass("active");
  });

  // 해상도 따른 트리메뉴 초기화
  $(window).resize(function () {
    var width = $(window).width();
    if (width > 1034) {
      $(".drive-list-wrap").css("left", "0");
      $("#upload-btn, #new-folder-btn").css("visibility", "visible");
      $(".top-right").show();
    } else if (width < 1034) {
      $(".drive-list-wrap").css("left", "-300px");
      $("#upload-btn, #new-folder-btn").css("visibility", "visible");
      $(".top-right").show();
      $(".mobile").removeClass("active");
    }
  });
});

// 모달 바로 닫기
function closeThisModal(e) {
  $(e).parents(".enter-content").removeClass("active");
  $("body").css("overflow", "auto");
  $(".alert-background").removeClass("active");
}

// 이중 모달
function closeOnlyThisModal(e) {
  $(e).parents(".enter-content").removeClass("active");
}

// 입장요청 버튼
function acceptInvitation(e) {
  var content = `입장 요청이 <span id="name">{$계정명$}</span>님께 <span class="mobile1 ht0"><br /></span>전달되었습니다.<br />
  요청이 수락되면 협업 드라이브에<br />입장하실 수 있습니다.`;
  $(e).parents(".invite-confirm-content").removeClass("active");
  $(".confirm-content .modal-text").html(content);
  $(".confirm-content").addClass("active");
}

// 모달 별로 안내 텍스트 달리 해야할 경우
// button.confirm-btn에서 'confirm-btn' 클래스 지우고 onclick="openConfirm(this,string);" 추가
function openConfirm(e, string) {
  var value = string;
  if (value == "add") {
    $(e).parents(".enter-content").removeClass("active");
    $(".confirm-content .modal-text").text("중복된 협업명이 존재 합니다.");
    $(".confirm-content").addClass("active");
  } else if (value == "move") {
    $(e).parents(".enter-content").removeClass("active");
    $(".confirm-content .modal-text").text("완료되었습니다.");
    $(".confirm-content").addClass("active");
  }
}

$("body").on("click", function (e) {
  var exceptArea = $(e.target).parents(".file-list").length;
  if (exceptArea == 0 && $(".file-list li.checked").length > 0) {
    $(".file-list li").removeClass("checked");
  }
});

// profile-box
$(document).on("click", ".profile-btn", function () {
  var $target = $(this).next();
  if ($target.css("display") == "none") {
    $target.show(100);
  } else if ($target.css("display") == "block") {
    $target.hide(100);
  }
});

/* 탭 */
$(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");
    var tab_right = $(this).attr("data-stab");

    $("ul.tabs li").removeClass("current");
    $(".tabs-inner").removeClass("current");
    $(".tabs-right-inner").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
    $("#" + tab_right).addClass("current");
  });
});

/* 토글버튼 */
$(".switch_toggle").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).find('input[type="hidden"]').val("N");
  } else {
    $(this).addClass("active");
    $(this).find('input[type="hidden"]').val("Y");
  }
});

/*function toggle(element) {
    console.log(element.checked);
}*/

/*}); //lnb load*/

function back() {
  history.go(-1);
}
