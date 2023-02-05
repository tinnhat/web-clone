//menu navbar
document.addEventListener(
  "DOMContentLoaded",
  function () {
    let menu = document.querySelector(".header-box__menu-navbar");
    let menuNavbar = document.querySelector(".menu-navbar-content");
    let mobileNav = document.querySelector(".nav-bar-mobile");
    console.log(mobileNav);
    let close = document.querySelector(".icon-close");
    let closeMb = document.querySelector(".icon-close-mb");
    // if (window.innerWidth < 1240) {
    //   menuNavbar.classList.add("disable");
    //   menu.onclick = function () {
    //     mobileNav.classList.add("dichtrai");
    //   };
    //   close.onclick = function () {
    //     mobileNav.classList.remove("dichtrai");
    //   };
    // }
    // else {
    //   menu.onclick = function () {
    //     menuNavbar.classList.add("dichtrai");
    //   };
    //   close.onclick = function () {
    //     menuNavbar.classList.remove("dichtrai");
    //   };
    // }
    $(window).on("load resize", function () {
      var width = $(document).width();

      if (width < 1240) {
        menuNavbar.classList.add("disable");
        menu.onclick = function () {
          mobileNav.classList.remove("dichphai");
        };
        closeMb.onclick = function () {
          mobileNav.classList.add("dichphai");
        };
      } else {
        menuNavbar.classList.remove("disable");
        menu.onclick = function () {
          menuNavbar.classList.add("dichtrai");
        };
        close.onclick = function () {
          menuNavbar.classList.remove("dichtrai");
        };
      }
    });
  },
  false
);
const header = document.querySelector(".header");
window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 1) {
    header.classList.add("bkg-header");
  } else {
    header.classList.remove("bkg-header");
  }
};
