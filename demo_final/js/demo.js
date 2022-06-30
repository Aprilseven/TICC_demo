// 自行加入的JS請寫在這裡
$(function () {
  // 首頁輪播
  $(".bigSlider ul,.mobile_slider ul").slick({
    mobileFirst: true,
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: "ondemand",
    ease: "ease",
  });
  // 廣告輪播
  $(".mutiSlider ul").slick({
    mobileFirst: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: "ondemand",
    ease: "ease",
  });
});

// 固定header
$(function () {
  header_h = Math.floor($("header").outerHeight(true));

  fixedheader_h = Math.floor($(".fixedheader").outerHeight(true) + 10);
  $(".fixedheader").css("top", -fixedheader_h);
  $(window).bind("scroll", function () {
    // console.log(fixedheader_h);
    if ($(this).scrollTop() > fixedheader_h) {
      $(".fixedheader").css({ top: 0 }, 800, "easeOutQuint");
    } else {
      $(".fixedheader").css({ top: -fixedheader_h }, 800, "easeOutQuint");
    }
  });
});
// $(function () {
//   header_h = Math.floor($("header").outerHeight(true));
//   fixedheader_h = Math.floor($(".fixedheader").outerHeight(true) + 10);
//   $(".fixedheader").css("top", -fixedheader_h);
//   $(window).bind("scroll", function () {
//     console.log(fixedheader_h);
//     if ($(this).scrollTop() > header_h) {
//       $(".fixedheader").css({ top: 0 }, 800, "easeOutQuint");
//     } else {
//       $(".fixedheader").css({ top: -fixedheader_h }, 800, "easeOutQuint");
//     }
//   });
// });

// quickmenu
$(function () {
  $(window).bind("load scroll resize", function (e) {
    var ww = $(window).outerWidth(),
      wrap_w = $(".wrap").width(),
      quickmenu_w = $(".quickmenu").width(),
      quickmenu_g = (ww - wrap_w) / 2;
    $(".quickmenu.right").css("right", quickmenu_g);
  });
});

// scrollToTop
$(function () {
  $(window).bind("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  $(".scrollToTop").click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, 800, "easeOutExpo");
    e.preventDefault();
  });
});

// fatfooter
$(function () {
  $(".fatfooter .fatfooter_btn").click(function (e) {
    $(".fatfooter .fatfooter_text").slideToggle();
    e.preventDefault();
  });
});

// 展開收合
$(function () {
  $(".browse_bt").click(function (e) {
    $(".ec_b3_pic01_card10").fadeIn();
    e.preventDefault();
  });

  $(".products_bt").click(function (e) {
    $(".ec_b3_pic01_pop02").fadeIn();
    $(".ec_b3_pic01_pop01").fadeOut();
    e.preventDefault();
  });

  $(".ideas_bt").click(function (e) {
    $(".ec_b4_pic02").fadeIn();
    $(".ec_b4_pic01").fadeOut();
    $(".ec_b4_txt03").fadeIn();
    $(".ec_b4_txt02").fadeOut();
    $(".ec_b4_card01").toggleClass("active");
    $(".ec_b4_card01_h").toggleClass("active");
    $(".ec_b4_card02").toggleClass("active");
    e.preventDefault();
  });

  // $(".browse_bt").click(function(e) {
  //     $(".ec_b3_pic01_card10").slideToggle();
  //     e.preventDefault();
  // });

  $(".ec_b6_card01_bt").click(function (e) {
    $(".ec_b6_card01").toggleClass("active");
    e.preventDefault();
  });

  $(".ec_b6_pic01_bt").hover(function (e) {
    $(".ec_b6_pic01_bt").toggleClass("active");
    $(".ec_b6_txt03").toggleClass("active");
    $(".ec_b6_sq").toggleClass("active");
    e.preventDefault();
  });

  $(".menu_bt").click(function (e) {
    $(".menu").toggleClass("active");
    $(".menu_x_bt").toggleClass("active");
    e.preventDefault();
  });

  $(".menu_x_bt").click(function (e) {
    $(".menu").toggleClass("active");
    $(".menu_x_bt").toggleClass("active");
    e.preventDefault();
  });

  $(".mobilemenu_bt").click(function (e) {
    $(".mobilemenu").toggleClass("active");
    e.preventDefault();
  });
});

// 燈箱
$(function () {
  $(".index02_101").hover(function (e) {
	$(".index02_101").toggleClass("active");
    $(".index02_map").toggleClass("active");
    e.preventDefault();
  });
 
});


$(function () {
  $(".index04_pop01mark").click(function (e) {
	$(".index04_pop01").toggleClass("active");
    e.preventDefault();
  });
 
});


$(function () {
  $(".index04_pop02mark").click(function (e) {
	$(".index04_pop02").toggleClass("active");
    e.preventDefault();
  });
 
});


$(function () {
  $(".index03_tag").click(function (e) {
	$(".index03_vr").toggleClass("active");
	  $(".index03_tag").toggleClass("active");
    e.preventDefault();
  });
 
});


