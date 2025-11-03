// //mobile nav
// $(".mobile_nav >.sub").css("display", "none");

// $(".mobile_nav>li>a").click(function () {
//   var status = $(this).next(".sub").css("display"); //next→ 선택한 요소의 바로 다음에 위치한 형제 요소를 선택한다.
//   if (status === "none") {
//     $(".sub").slideUp(); //재클릭할 때 열려있는.sub가 닫히게
//     $(this).next(".sub").slideDown();
//   } else {
//     $(".sub").slideUp(); //열려있는 .sub를 클릭하면 닫히게
//   }
//   return false;
// });
$(function () {
  // 1. 서브 메뉴만 jQuery로 숨깁니다 (CSS에도 display:none 있음).
  $(".mobile_nav > ul > li > .sub").hide();

  // A. 전체 모바일 메뉴 토글 (.mobile_tab 클릭 시)
  $(".mobile_tab").click(function (e) {
    e.preventDefault();

    // **수정된 부분:** slideToggle 대신 CSS 클래스 active를 토글합니다.
    $(".mobile_nav").toggleClass("active");

    // 메뉴가 닫힐 때 열려있던 서브 메뉴도 닫아 초기화합니다.
    if (!$(".mobile_nav").hasClass("active")) {
      // active 클래스가 제거될 때
      $(".mobile_nav > ul > li > .sub").slideUp(300);
    }
  });

  //   // B. 서브 메뉴 아코디언 기능 (이전과 동일하게 수직 slideToggle 사용)
  //   $(".mobile_nav > ul > li > a").click(function (e) {
  //     e.preventDefault();
  //     var $clickedSub = $(this).next(".sub");
  //     $clickedSub.slideToggle(300);
  //     $(".mobile_nav > ul > li > .sub").not($clickedSub).slideUp(300);
  //   });
  // });

  // $(function () {
  //   // 1. 초기 상태 숨김 (전체 메뉴는 CSS active로 제어)
  //   $(".mobile_nav > ul > li > .sub").hide();

  //   // A. 전체 모바일 메뉴 토글 (이전과 동일)
  //   $(".mobile_tab").click(function (e) {
  //     e.preventDefault();
  //     $(".mobile_nav").toggleClass("active");

  //     // 메뉴가 닫힐 때 서브 메뉴 초기화
  //     if (!$(".mobile_nav").hasClass("active")) {
  //       // 닫힐 때는 서브 메뉴도 바로 숨깁니다.
  //       $(".mobile_nav > ul > li > .sub").hide();
  //     }
  //   });

  // B. 서브 메뉴 아코디언 기능 (수정된 부분)
  $(".mobile_nav > ul > li > a").click(function (e) {
    e.preventDefault();

    var $clickedSub = $(this).next(".sub");

    // 닫혀있다면 (is:hidden),
    if ($clickedSub.is(":hidden")) {
      // 1. 열려있던 다른 메뉴들은 애니메이션 없이 즉시 숨깁니다. (slideUp 대신 hide)
      $(".mobile_nav > ul > li > .sub").not($clickedSub).hide();

      // 2. 클릭된 메뉴만 부드럽게 아래로 펼칩니다. (slideDown)
      $clickedSub.slideDown(300);
    } else {
      // 이미 열려 있다면, 클릭 시 부드럽게 위로 접습니다. (slideUp)
      $clickedSub.slideUp(300);
    }
  });
});
