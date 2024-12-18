var commonMenuList = [
  { file: "user.html", name: "사용자 관리" },
  { file: "user_group.html", name: "사용자그룹 관리" },
  { file: "code.html", name: "코드 관리" },
  { file: "", name: "메뉴 관리" },
  { file: "", name: "공지사항" },
  { file: "", name: "게시판" },
  { file: "", name: "분석사용자 관리" },
  { file: "", name: "요구사항 관리" },
  { file: "", name: "Watch-Dog" },
];

function inputHeader(strMenuName) {
  const strMainMenu = [
    "공통",
    "기준정보",
    "환경설정",
    "소재",
    "영업",
    "카테고리",
    "인벤토리",
    "계약",
    "편성",
    "청구정산",
    "리포트",
    "분석",
  ];

  var headerElements = document.querySelector(".header_wrapper");
  headerElements.innerHTML = `<div class="header_logo"><img></div>`;

  var tagMenu = `<ul class="main_menu">`;
  strMainMenu.map((str) => {
    if (str == strMenuName) {
      tagMenu += `<li class="active" onclick="clickMainMenu(event)">`;
    } else {
      tagMenu += `<li  onclick="clickMainMenu(event)">`;
    }
    tagMenu += str + "</li>";
  });
  tagMenu += "</ul>";

  headerElements.innerHTML += tagMenu;
  headerElements.innerHTML += `<div class="header_button">
            <button class="menu_button">로그아웃</button>
            <button class="menu_button">정보수정</button>
        </div>
        `;
}

function inputSubMenu() {
  var filename = document.URL.substring(
    document.URL.lastIndexOf("/") + 1,
    document.URL.length
  );
  var subMenuElements = document.querySelector(".sub_menu");
  var subMenuTag = "";
  commonMenuList.map((list) => {
    if (list.file == filename) {
      subMenuTag += `<li class="active" onclick="clickSubMenu(event)">`;
    } else {
      subMenuTag += '<li onclick="clickSubMenu(event)">';
    }
    subMenuTag += list.name + "</li>";
  });
  subMenuElements.innerHTML = subMenuTag;
}


function setActiveTab(e) {
  const parent = e.target.parentElement;
  [...parent.children].forEach((sib) => sib.classList.remove("active"));
  e.target.classList.add("active");
}

// header menu click event
function clickMainMenu(e) {}

//subMenu Click Event
function clickSubMenu(e) {
  var strHtml = subMenuList.find(
    (list) => list.name == e.target.innerHTML
  ).file;
  location.href = strHtml;
}
