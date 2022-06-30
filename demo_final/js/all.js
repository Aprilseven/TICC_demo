// HTML CSS JSResult Skip Results Iframe
var frameNumber = 0, // start video at frame 0
  // lower numbers = faster playback
  playbackConst = 500,
  // get page height from video duration
  setHeight = 2000,
  // select video element
  vid = document.getElementById("estadio");
// var vid = $('#v0')[0]; // jquery option

// e => console.log('scroll handler is triggered in window during capture phase.'), true)

var header = $("header");
var range = 200;

const checkpoint = 100;
let opacity;
let opacity2;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  //標題一 ＋ 背景
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
    bgopacity = 0;
  } else {
    opacity = 0;
    bgopacity = Math.abs(1 - currentScroll / checkpoint);
  }

  document.querySelector(".front").style.opacity = opacity;

  //標題二
  if (currentScroll > 100) {
    document.querySelector(".front2").style.opacity = "1";
  } else {
    document.querySelector(".front2").style.opacity = "0";
  }

  //圖縮放
  let scrollImg = document.querySelector("#bgcarousel_img");
  if (currentScroll > 120) {
    //let size = (scrollImg.style.width = 100 - scrollY / 50 + "%");
    let size = (scrollImg.style.backgroundSize = 100 - currentScroll / 5 + "%");
  }
  if (currentScroll < 120) {
    //let size = (scrollImg.style.width = 100 - scrollY / 50 + "%");
    let num = 100 + currentScroll / 10;

    if (parseInt(num / 2) * 2 > 100) {
      size = "100%";
    } else {
      let size = (scrollImg.style.backgroundSize = num + "%");
      let l_btn = document.querySelector(".carousel_btn_left");
      let R_btn = document.querySelector(".carousel_btn_right");
      l_btn.style.display = "none";
      R_btn.style.display = "none";
    }
  }

  if (scrollY > 361) {
    //scrollImg.style.backgroundSize = "27.8%";
    scrollImg.style.backgroundSize = "29.3%";
    let l_btn = document.querySelector(".carousel_btn_left");
    let R_btn = document.querySelector(".carousel_btn_right");
    l_btn.style.display = "block";
    R_btn.style.display = "block";
  }
  if (scrollY < 865) {
    //把video打開
    let videoimg = document.querySelector(".viedo_img");
    videoimg.style.display = "block";
  }
  if (scrollY > 950) {
    //把video隱藏
    let videoimg = document.querySelector(".viedo_img");
    videoimg.style.display = "none";
  }
});

$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});

//仿輪播效果
let btn_L = document.querySelector(".carousel_btn_left");
btn_L.addEventListener("click", function () {
  let bgimg = document.querySelector(".block_carousel_content");
  let imgBtnList = document.querySelector(".block_carousel_imgBtnList");
  imgBtnList.innerHTML = '	<img src="images/index_img/btn_list.png" alt="">';
  bgimg.style.marginLeft = "-2605px";
});
let btn_R = document.querySelector(".carousel_btn_right");
btn_R.addEventListener("click", function () {
  let bgimg = document.querySelector(".block_carousel_content");
  let imgBtnList = document.querySelector(".block_carousel_imgBtnList");
  imgBtnList.innerHTML = '	<img src="images/index_img/btn_list_02.png" alt="">';
  bgimg.style.marginLeft = "-3000px";
});

//let block_warming = document.querySelector(".block_warming");
//let warming_btn = document.querySelector(".warming_btn");
//warming_btn.addEventListener("click", function () {
 // block_warming.style.height = "0px";
//});

// menu展開收合
$(function () {
  $(".slideToggle_bt").click(function (e) {
    $(".menu_po_js").slideToggle();
    e.preventDefault();
    let qmenu = document.querySelector(".quickmenu");
    qmenu.style.display = "none";
  });
  $(".menu_po_js").click(function (e) {
    $(".menu_po_js").slideUp();
    e.preventDefault();
    let qmenu = document.querySelector(".quickmenu");
    qmenu.style.display = "block";
  });
});

//直播視窗按鈕
let video_btn = document.querySelector(".video_btn");
video_btn.addEventListener("click", function () {
  document.querySelector(".video_content").style.display = "none";
});
//顯示直播視窗按鈕
let show_video_btn = document.querySelector(".show_video_btn");
show_video_btn.addEventListener("click", function () {
  document.querySelector(".video_content").style.display = "block";
});
//圖片hover效果
let hover_img_btn = document.querySelector(" .hover_img_btn");
hover_img_btn.addEventListener("click", function () {
  document.querySelector(".index_mark_pop").style.display = "block";
});
//彈跳視窗關閉效果
let mark_pop_btn = document.querySelector(".mark_pop_btn");
mark_pop_btn.addEventListener("click", function () {
  document.querySelector(".index_mark_pop").style.display = "none";
});
