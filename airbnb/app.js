// hiệu ứng scroll chuột thay đổi màu header
// const header = document.querySelector(".header");
// window.onscroll = function () {
//   let top = window.scrollY;
//   if (top >= 1) {
//     header.classList.add("navbar-fixed-top");
//   } else {
//     header.classList.remove("navbar-fixed-top");
//   }
// };
//dung cho box text
// tổng quát hóa viết cho 1 lần các lần sau thì tự động dùng lại
document.addEventListener(
  "DOMContentLoaded",
  function () {
    let header = document.getElementsByClassName("header");
    let header_text = document.getElementsByClassName("header-box-world__button");
    let header_icon = document.getElementsByClassName("header-box__icon-world");
    let header_logo = document.getElementsByClassName("header__logo-link");
    let header_searh = document.getElementsByClassName("header__box-search");
    let header_menu = document.getElementsByClassName("header__box-search__menu");

    window.onscroll = function () {
      let top = window.scrollY;
      if (top >= 1) {
        // đã scroll chuột

        header_text[0].classList.add("text-color-black");
        header[0].classList.add("navbar-fixed-top");
        header_icon[0].classList.add("text-color-black");
        header_logo[0].classList.add("header__logo_change");
        header_menu[0].classList.add("disable");
        header_searh[0].classList.remove("disable");
      }
      // chưa scroll chuột
      else {
        header[0].classList.remove("navbar-fixed-top");
        header_text[0].classList.remove("text-color-black");
        header_icon[0].classList.remove("text-color-black");
        header_logo[0].classList.remove("header__logo_change");
        header_menu[0].classList.remove("disable");
        header_searh[0].classList.add("disable");
      }
    };
  },
  false
);

//các thành phần trên nav
let click = document.getElementsByClassName("header__box-search__item");
for (let i = 0; i < 2; i++) {
  click[i].onclick = function () {
    for (let k = 0; k < 2; k++) {
      click[k].classList.remove("active_click");
      click[k].children[0].classList.add("disable");
    }
    this.classList.add("active_click");
    this.children[0].classList.remove("disable");
  };
}
// login/register

// let x = document.getElementById("login-header");

// x.onclick = function () {
//
// };

let x = document.getElementById("login-header");
let hideid = document.getElementById("box-click-login-header");
console.log(x.classList);
document.onclick = function (e) {
  if (e.target.id == "login-header") {
    x.children[2].classList.toggle("disable");
  } else {
    x.children[2].classList.add("disable");
  }
};

const logs = document.querySelectorAll(".js-log");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modal_close = document.querySelector(".js-close");
//hàm hiển thị modal

//hàm ko cho scroll disable thanh cuộn ở bên phải
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "initial";
}
function showlog() {
  disableScroll();
  modal.classList.add("open");
}
//hàm đóng modal
function hidelog() {
  modal.classList.remove("open");
  enableScroll();
}

for (const log of logs) {
  log.addEventListener("click", showlog);
}
modal_close.addEventListener("click", hidelog);

//click ra ngoài modal thì đóng

modal.addEventListener("click", hidelog);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// if ($(window).width <= 740) {
//   $(".travel-position-row").slick();
// }
document.addEventListener("DOMContentLoaded", function () {}, false);
