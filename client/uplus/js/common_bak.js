$(function () {
    //component 불러오기
    if ($('.header-wrap').hasClass('m-header-wrap') == false) {
        $('.header-wrap').load('header.html');
    }

    $('.alert-background').load('modal.html');
    $('.upload-popup-box').load('uploadModal.html');

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

    $(document).on('click', '#upload-file-btn', function (e) {
        e.preventDefault();
        $('#file').click();
    });

    $(document).on('click', '#upload-folder-btn', function (e) {
        e.preventDefault();
        $('#folder').click();
    });

    // unfold file tree
    $(document).on('click', 'li[id^=my-drive] i.arrow, li[id^=share-drive] i.arrow, li[id^=parent] i.arrow', function () {
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
    $(document).on('click', 'ul[id^=drive-list] li button, li[id^=my-drive] i:nth-child(2), li[id^=share-drive] i:nth-child(2)', function () {

        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            console.log($(this));
            $(this).parents('ul[id^=drive-list]').find('li').removeClass('active');
            $(this).parent().addClass('active');
        }

    })

    // mobile: file tree
    $(document).on('click', '.top-left .mobile', function () {
        if ($(this).hasClass('active')) {
            $('.drive-list-wrap').css('left', '-300px');
            $('body').css('overflow', 'unset');
            $(this).siblings().css('visibility', 'visible');
            $('.top-right').show();
            $(this).removeClass('active');
        } else {
            $('.drive-list-wrap').css('left', '0');
            $('body').css('overflow', 'hidden');
            $(this).siblings().css('visibility', 'hidden');
            $('.top-right').hide();
            $(this).addClass('active');
        }
    });

    // folder & file click event
    $(document).on('click', '.folder-list li, .file-list li', function () {
        var check = $(this).children('input');
        if ($(this).hasClass('checked') && check.is(':checked') == true) {
            $(this).removeClass('checked');
            check.prop('checked', false);
        } else {
            $(this).addClass('checked');
            check.prop('checked', true);
        }
    });

    // search box event
    $(document).on("propertychange change keyup paste input", "#search-input", function () {
        if ($('#search-input').val() == '') {
            $('#result-box').hide(100);
        } else {
            $('#result-box').show(100);
        }
    });
    // checkbox
    $(document).on('click', '#cba', function () {
        $('.all').prop('checked', this.checked);
    });

    $("#highlight tr").click(function () {
        $(this).toggleClass("active");
    });

    // 우클릭 메뉴 박스
    ////// 1. 공유버튼 없음
    $(document).on("contextmenu", ".my-drive-table tr, .my-drive-list li, #my-drive li, #share-drive ul li ul li,.share-drive-list.folder-list li", function (e) {
        var x = e.pageX - 250;
        var y = e.pageY - 250;
        var $target = e.currentTarget.nodeName;
        var $targetName;

        //    파일/폴더명 가져오기
        console.log($targetName);
        console.log(e);
        if ($target == 'LI') {
            if (e.currentTarget.offsetParent.getAttribute('id') == 'content') {
                $targetName = e.currentTarget.children[2].children[0].innerText;
                console.log('ss');
            } else {
                $targetName = e.currentTarget.children[2].innerText;
            }
        } else if ($target == 'TR') {
            $targetName = e.currentTarget.childNodes[3].innerText;
            $targetName = $targetName.replace(/\n/g, "").trim();
        }

        var menuListObj = [{
            name: '새 폴더',
            id: 'new-folder-btn'
        }, {
            name: '삭제',
            id: 'del-this-btn',
            data: $targetName
        }, {
            name: '이동',
            id: 'move-this-btn'
        }, {
            name: '복사',
            id: 'copy-this-btn'
        }, {
            name: '이름 바꾸기',
            id: 'change-this-btn',
            data: $targetName
        }, {
            name: '다운로드',
            id: 'down-this-btn'
        }];
        var menuList = makeDriveMenu(menuListObj);
        var exFolderName = $(this).data('name');

        if ($(this).closest('li#my-drive').length == 1 || $(this).closest('li#share-drive').length == 1) {
            if ($('#folder-menu').children().length == 0) {
                $('#folder-menu').append(menuList);
                $('#change-this-btn').attr('title', exFolderName);
            } else if ($('#folder-menu').children().length > 0) {
                $('#folder-menu').children().remove();
                $('#folder-menu').append(menuList);
                $('#change-this-btn').attr('title', exFolderName);
            }
            $('#folder-menu').css('top', y + 130 + "px");
            $('#folder-menu').css('left', x + 270 + "px");
            $('#folder-menu').show();
        } else if ($(this).closest('ul#drive-list').length == 0) {
            if ($('#rmenu').children().length == 0) {
                $('#rmenu').append(menuList);
                $('#change-this-btn').attr('title', exFolderName);
            } else {
                $('#rmenu').children().remove();
                $('#rmenu').append(menuList);
                $('#change-this-btn').attr('title', exFolderName);
            }
            $('#rmenu').css('top', y + "px");
            $('#rmenu').css('left', x + "px");
            $('#rmenu').show();
        }
        return false;
    });

    ////// 2. 공유버튼 있음
    $(document).on("contextmenu", ".share-drive-list.file-list li, .gallery-btm.share ul li", function (e) {
        var x = e.pageX - 250;
        var y = e.pageY - 250;
        var $target = e.currentTarget.nodeName;
        var $targetName;

        if ($target == 'LI') {
            $targetName = e.currentTarget.children[2].children[0].innerText;
            console.log($targetName);
        } else if ($target == 'TR') {
            $targetName = e.currentTarget.childNodes[3].innerText;
            $targetName = $targetName.replace(/\n/g, "").trim();
            console.log($targetName);
        }

        var menuListObj = [{
            name: '삭제',
            id: 'del-this-btn',
            data: $targetName
        }, {
            name: '이동',
            id: 'move-this-btn'
        }, {
            name: '복사',
            id: 'copy-this-btn'
        }, {
            name: '공유',
            id: 'share-this-btn'
        }, {
            name: '이름 바꾸기',
            id: 'change-this-btn',
            data: $targetName

        }, {
            name: '다운로드',
            id: 'down-this-btn'
        }];
        var menuList = makeDriveMenu(menuListObj);

        if ($('#rmenu').children().length == 0) {
            $('#rmenu').append(menuList);
        }
        $('#rmenu').css('top', y + "px");
        $('#rmenu').css('left', x + "px");
        $('#rmenu').show();
        return false;
    });

    ////// 3. 협업 중인 사용자 리스트 메뉴박스
    $(document).on("contextmenu", ".user-item", function (e) {
        var x = e.pageX - 0;
        var y = e.pageY - 0;

        $('.share-user-modal').css('top', y + "px");
        $('.share-user-modal').css('left', x + "px");
        $('.share-user-modal').show();
        return false;
    });

    ////// 4. 드라이브 최상위 폴더
    $(document).on("contextmenu", "#my-drive", function (e) {
        var x = e.pageX - 250;
        var y = e.pageY - 250;

        if ($('#folder-menu').children().length == 0 && $(this).attr('id') == 'my-drive') {
            $('#folder-menu').append('<li><button type="button" id="new-folder-btn2">새 폴더</button></li>');
        } else if ($('#folder-menu').children().length > 0) {
            $('#folder-menu').children().remove();
            $('#folder-menu').append('<li><button type="button" id="new-folder-btn2">새 폴더</button></li>');
        }
        $('#folder-menu').css('top', y + 130 + "px");
        $('#folder-menu').css('left', x + 270 + "px");
        $('#folder-menu').show();
        return false;
    });

    $(document).on("contextmenu", "#share-drive", function (e) {
        var x = e.pageX - 250;
        var y = e.pageY - 250;

        if ($('#folder-menu').children().length == 0) {
            $('#folder-menu').append('<li><button type="button" id="make-share-drive-btn2">신규 협업 추가</button></li>');
        } else if ($('#folder-menu').children().length > 0) {
            $('#folder-menu').children().remove();
            $('#folder-menu').append('<li><button type="button" id="make-share-drive-btn2">신규 협업 추가</button></li>');
        }
        $('#folder-menu').css('top', y + 130 + "px");
        $('#folder-menu').css('left', x + 270 + "px");
        $('#folder-menu').show();
        return false;
    });

    $(document).on("contextmenu", "#share-drive>ul>li", function (e) {
        var x = e.pageX - 250;
        var y = e.pageY - 250;
        var shareDriveName = e.currentTarget.childNodes[5].innerText;
        var shareDriveMenuList = `<li><button type="button" id="new-folder-btn3">새 폴더</button></li><li><button type="button" id="del-share-drive-btn" data-share=${shareDriveName}>협업 삭제</button></li>`;

        if ($('#folder-menu').children().length == 0) {
            $('#folder-menu').append(shareDriveMenuList);
        } else if ($('#folder-menu').children().length > 0) {
            $('#folder-menu').children().remove();
            $('#folder-menu').append(shareDriveMenuList);
        }
        $('#folder-menu').css('top', y + 130 + "px");
        $('#folder-menu').css('left', x + 270 + "px");
        $('#folder-menu').show();
        return false;
    });

    // 제외 영역 클릭시 이벤트
    // $('body').on('click', function (e) {
    //     var exceptArea = $(e.target).parents('.file-list').length;
    //     if (exceptArea == 0 && $('.file-list li.checked').length > 0) {
    //         $('.file-list').children('li').removeClass('checked');
    //     }
    //     console.log('ss');
    // });
    $('body').on('click', function (e) {
        var exceptArea = $(e.target).parents('#rmenu, #folder-menu').length;
        if (exceptArea == 0) {
            $('#rmenu, #folder-menu').children().remove();
            $('#rmenu, #folder-menu').hide();
        }
    });
    $('body').on('click', function (e) {
        var exceptArea = $(e.target).parents('.share-user-modal').length;
        if (exceptArea == 0) {
            $('.share-user-modal').hide();
        }
    });

    $('body').on('click', function (e) {
        var exceptArea = $(e.target).parents('.menu-box').length;
        if (e.target.className == 'tool-btn') {
            return false;
        } else if (exceptArea == 0 && e.target.className !== 'tool-btn') {
            $('.menu-box').hide();
        }
    });

    //  우클릭 메뉴박스 생성(1번, 2번)
    // function makeDriveMenu(obj) {
    //     var template = function (obj) {
    //         return `<li><button type="button" id="${obj.id}" data-share="${obj.data}">${obj.name}</button></li>`;
    //     }
    //     var result;
    //     for (var i = 0; i < obj.length; i++) {
    //         result = result + template(obj[i]);
    //     }
    //     return result = result.substr(9, result.length);
    // };

    // drag & drop
    var uploadFiles = [];
    var $drop = $(".drag-upload-box");
    $drop.on("dragenter", function (e) { //드래그 요소가 들어왔을떄
        $(this).addClass('drag-over');
        $(this).css('background-color', '#eee');
    }).on("dragleave", function (e) { //드래그 요소가 나갔을때
        $(this).removeClass('drag-over');
    }).on("dragover", function (e) {
        e.stopPropagation();
        e.preventDefault();
    }).on('drop', function (e) { //드래그한 항목을 떨어뜨렸을때
        e.preventDefault();
        $('.alert-upload-box').addClass('active');
        $(this).css('background-color', '#fff');
        $(this).removeClass('drag-over');
        var files = e.originalEvent.dataTransfer.files; //드래그&드랍 항목
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var size = uploadFiles.push(file); //업로드 목록에 추가
            console.log(size);
        }
    });

    $(document).on('click', '.upload-bar', function () {
        $(this).parents('.alert-upload-box').removeClass('active');
        $('.upload-popup-box').addClass('active');
    });

    // grid : button-row
    var tableItemCheck = $('.table').find('input[type="checkbox"]');
    var checkedArray = [];

    tableItemCheck.click(function () {
        var $folderID = $(this).attr('id');
        if ($(this).attr('name') == 'file' && checkedArray.length == 0) {
            if ($(this).is(":checked") == true || $('input[name="file"]').is(":checked") == true) {
                $('.only-file').show();
                $('.button-row').show(100);
            } else {
                $('.button-row').hide(100);
            }
        } else if ($(this).attr('name') == 'folder') {
            if ($(this).is(":checked") == true && !checkedArray.includes($folderID)) {
                checkedArray.push($folderID);
                $('.only-file').hide();
                $('.button-row').show(100);
            } else if ($(this).is(":checked") == false && checkedArray.includes($folderID)) {
                checkedArray.splice(checkedArray.indexOf($folderID), 1);
                if (checkedArray.length == 0 && $('input[name="file"]').is(":checked") == true) {
                    $('.only-file').show();
                    $('.button-row').show(100);
                };
            }
        }
    });

    $(document).on('click', '#close-this-btn', function () {
        $('.button-row').hide(100);
        tableItemCheck.prop('checked', false);
    });

    // mobile : path
    var $path = $('.path.mobile').children('a');
    var $pathArray = [];
    for (var i = 0; i < $path.length; i++) {
        var result = $path[i].innerHTML;
        $pathArray.push(result);
    }
    $pathArray = $pathArray.slice(0, $pathArray.length - 2);

    $(document).on('click', '#more-path-btn', function () {
        if ($('#path-box').css('display') == 'none') {
            $(this).addClass('active');
            makePathBox($pathArray);
            $('#path-box').show(100);
        } else {
            $(this).removeClass('active');
            $('#path-box').children().remove();
            $('#path-box').hide(100);
        }

    });

    // mobile : 생략된 path 버튼 처리(1번, 2번)
    function makePathBox(path) {
        var template = function (path) {
            return `<a href="#">${path}</a>`;
        }
        var result;
        for (var i = 0; i < path.length; i++) {
            result = result + template(path[i]);
        }
        result = result.substr(9, result.length);
        $('#path-box').append(result);
    }

    // 탭메뉴
    $(document).on('click', '.tab-menu-box li', function () {
        var tabNumber = $(this).data('tab');
        $(this).parents('.enter-content').find('.tab-menu-box li').removeClass('active');
        $(this).parents('.enter-content').find('.tab-content').removeClass('active');
        $(this).addClass('active');
        $('#tab' + tabNumber).addClass('active');
    });

    // 새폴더 생성 모달
    $(document).on('click', 'button[id^=new-folder-btn]', function () {
        $('.enter-content').removeClass('active');
        $('.alert-content .modal-title').text('새 폴더');
        $('.alert-content input').attr('placeholder', '폴더명을 입력하세요');
        $('body').css('overflow', 'hidden');
        $('.alert-background, .alert-content').addClass('active');
    });

    // 이름바꾸기 모달
    $(document).on('click', '#change-this-btn', function () {
        $('.enter-content').removeClass('active');
        var folderName = $(this).data('share');
        $('.alert-content .modal-title').text('이름 바꾸기');
        $('.alert-content input').attr('placeholder', folderName);
        $('body').css('overflow', 'hidden');
        $('.alert-background,.alert-content').addClass('active');
    });

    // 공유 & 초대 모달 
    $(document).on('click', 'button[id^=share-this-btn]', function () {
        $('.enter-content').removeClass('active');
        $('body').css('overflow', 'hidden');
        $('.alert-background, .share-content').addClass('active');
    });

    $(document).on('click', '.invite-btn', function () {
        $('.enter-content').removeClass('active');
        $('body').css('overflow', 'hidden');
        $('.alert-background, .invite-content').addClass('active');
    });

    // 신규 협업 추가 모달 
    $(document).on('click', 'button[id^=make-share-drive-btn]', function () {
        $('.enter-content').removeClass('active');
        $('body').css('overflow', 'hidden');
        $('.alert-background, .new-share-content').addClass('active');
    });

    // 협업 삭제 모달 
    $(document).on('click', 'button[id^=del-share-drive-btn], button[id^=del-this-btn]', function () {
        $('.enter-content').removeClass('active');
        var $name = $(this).data('share');
        $('.alert-content2 .modal-title').text('안내');
        $('.alert-content2 .modal-text').text(`${$name} 를(을) 삭제 하시겠습니까?`);
        $('body').css('overflow', 'hidden');
        $('.alert-background, .alert-content2').addClass('active del-content');
    });

    // 이동 모달 
    $(document).on('click', 'button[id^=move-this-btn]', function () {
        $('.enter-content').removeClass('active');
        $('.move-content .modal-title').text('이동');
        $('.move-content .sub-text').text('이동 대상 위치를 선택해 주세요');
        $('.move-content .foot button').text('이동');
        $('body').css('overflow', 'hidden');
        $('.alert-background, .move-content').addClass('active');
    });

    // 복사 모달 
    $(document).on('click', 'button[id^=copy-this-btn]', function () {
        $('.enter-content').removeClass('active');
        $('.move-content .modal-title').text('복사');
        $('.move-content .sub-text').text('복사 대상 위치를 선택해 주세요');
        $('.move-content .foot button').text('복사');
        $('body').css('overflow', 'hidden');
        $('.alert-background, .move-content').addClass('active');
    });

    // 업로드상태 모달
    $(document).on('click', '.control .pause-btn', function () {
        $(this).toggleClass("start-btn");
        $(this).parent().siblings('.progressbar').children().toggleClass('back');
    });

    $(document).on('click', '.control .stop-btn', function () {
        $(this).parent().addClass('deactive');
        $(this).parent().siblings('.state').addClass('active');
        $(this).parent().siblings('.site').css("color", "#a4262c");
        $(this).parent().siblings('.site').text("취소됨");
        $(this).parent().siblings('.progressbar').addClass('hide');
        $(this).parent().siblings('.state').children().addClass('i-upload-error');
    });

    // email-list-box event
    $(document).on("propertychange change keyup paste input", 'input[id^=search-email], #search-user', function () {
        if ($(this).val() == '') {
            $(this).siblings('.email-list-box').hide(100);
        } else {
            $(this).siblings('.email-list-box').show(100);
        }
    });

    $(document).on('click', '.email-list-box li', function () {
        var $email = $(this).children('span').text();
        $(this).parent().siblings('input[id^=search-email], #search-user').val($email);
        $(this).closest('td').find('.email-list-box').hide(100);
    });

    // 모달 내 아이템 추가 버튼
    $(document).on('click', '.add-btn', function () {
        var emailValue = $.trim($(this).siblings('input').val());
        var template = `<li><span>${emailValue}</span><button type="button"
        class="del-email-btn"></button></li>`;
        console.log(emailValue);
        if (!!emailValue || $('.email-box').children().length > 0) {
            $(this).parent().siblings('.email-box').css('display', 'flex');
            $(this).parent().siblings('.email-box').append(template);
        } else if (emailValue == '') {
            $('.confirm-content2 .modal-text').text('값을 입력해 주세요.');
            $('.confirm-content2').addClass('active');
        }
    });

    // 모달 내 아이템 삭제 버튼
    $(document).on('click', '.del-email-btn', function () {
        $(this).parent('li').remove();
        if ($('.email-box').children().length == 0) {
            $('.email-box').hide();
        }
    });

    // 링크 생성 버튼
    $(document).on('click', '#make-link-btn', function () {
        $(this).parent().removeClass('active');
        $(".link-box").not(":first-child").addClass('active');
    });

    // 링크 복사 버튼
    $(document).on('click', 'button[id^=copy-link-btn]', function () {
        $('.confirm-content2 .modal-text').text('복사되었습니다.');
        $(".confirm-content2").addClass('active');
    });

    // 권한 위임 버튼
    $(document).on('click', '#delegate-btn', function () {
        $('.alert-content2 .modal-text').text('마스터 권한을 위임하시겠습니까?');
        $(".alert-background, .alert-content2").addClass('active');
    });

    // 협업 삭제 버튼
    $(document).on('click', '#del-cowork-btn', function () {
        $('.alert-content2 .modal-text').text('삭제 하시겠습니까?');
        $(".alert-background, .alert-content2").addClass('active');
    });

    // 입장 수락/거절
    $(document).on('click', '.yes-btn', function () {
        $(this).parent().text("수락 되었습니다.");
    });

    $(document).on('click', '.no-btn', function () {
        $(this).parent().text("거절 되었습니다.");
    });

    // 공통 : 확인 버튼
    $(document).on('click', '.confirm-btn', function () {
        var parentModalName = $(this).parents('.enter-content');
        if (parentModalName.hasClass('new-share-content')) {
            $('.confirm-content .modal-text').text('중복된 협업명이 존재 합니다.');
        } else if (parentModalName.hasClass('del-content')) {
            $('.confirm-content .modal-text').text('삭제되었습니다.');
        }
        $(this).parents('.enter-ask-content').removeClass('acitve');
        $(this).parents('.enter-content').removeClass('active');
        $('.alert-content input').val('');
        $('.confirm-content').addClass('active');
    });

    // 공통 : 모달 닫기 버튼
    $(document).on('click', '.alert-close-btn', function () {
        $('.move-content i.arrow').removeClass('opened');
        $('.move-content .child-node').hide();
        $('.alert-content input').val('');
        $('.upload-popup-box').removeClass('active');
        $(this).parents('.enter-content').removeClass('active');
        $('body').css('overflow', 'auto');
        $('.alert-background').removeClass('active');
    });

    // 공통 : 취소 버튼
    $(document).on('click', '.cancel-btn', function () {
        $(this).parents('.enter-content').removeClass('active');
        $('.alert-content input').val('');
        $('body').css('overflow', 'auto');
        $('.alert-background').removeClass('active');
    });

    // 공통 : confirm-modal 내 닫기 버튼 
    $(document).on('click', '#last-confirm-btn', function () {
        $(this).parents('.confirm-content').removeClass('active');
        $('body').css('overflow', 'auto');
        $('.alert-background').removeClass('active');
    });

    // 해상도 따른 트리메뉴 초기화
    $(window).resize(function () {
        var width = $(window).width();
        if (width > 1034) {
            $('.drive-list-wrap').css('left', '0');
            $('#upload-btn, #new-folder-btn').css('visibility', 'visible');
            $('.top-right').show();
        } else if (width < 1034) {
            $('.drive-list-wrap').css('left', '-300px');
            $('#upload-btn, #new-folder-btn').css('visibility', 'visible');
            $('.top-right').show();
            $('.mobile').removeClass('active')
        }
    });
});

// 모달 바로 닫기
function closeThisModal(e) {
    $(e).parents('.enter-content').removeClass('active');
    $('body').css('overflow', 'auto');
    $('.alert-background').removeClass('active');
}

// 이중 모달 
function closeOnlyThisModal(e) {
    $(e).parents('.enter-content').removeClass('active');
}

// 입장요청 버튼
function acceptInvitation(e) {
    var content = `입장 요청이 <span id="name">{$계정명$}</span>님께 <span class="mobile1 ht0"><br /></span>전달되었습니다.<br />
    요청이 수락되면 협업 드라이브에<br />입장하실 수 있습니다.`;
    $(e).parents('.invite-confirm-content').removeClass('active');
    $('.confirm-content .modal-text').html(content);
    $('.confirm-content').addClass('active');
}

// 모달 별로 안내 텍스트 달리 해야할 경우
// button.confirm-btn에서 'confirm-btn' 클래스 지우고 onclick="openConfirm(this,string);" 추가
function openConfirm(e, string) {
    var value = string;
    if (value == 'add') {
        $(e).parents('.enter-content').removeClass('active');
        $('.confirm-content .modal-text').text('중복된 협업명이 존재 합니다.');
        $('.confirm-content').addClass('active');
    } else if (value == 'move') {
        $(e).parents('.enter-content').removeClass('active');
        $('.confirm-content .modal-text').text('완료되었습니다.');
        $('.confirm-content').addClass('active');
    }
}



$('body').on('click', function (e) {
    var exceptArea = $(e.target).parents('.file-list').length;
    if (exceptArea == 0 && $('.file-list li.checked').length>0) {
        $('.file-list li').removeClass('checked');
    }
});

// profile-box
$(document).on('click', '.profile-btn', function(){
    var $target = $(this).next();
    if($target.css('display') == "none") {
        $target.show(100);
    }else if($target.css('display') == "block") {
        $target.hide(100);
    }
});
