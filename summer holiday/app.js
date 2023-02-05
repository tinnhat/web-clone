// for()
//menu navbar
let iconMenu = document.querySelector(".icon-menu-mobile");
let navbarmobile = document.querySelector(".nav-bar-mobile");
let close = document.querySelector(".icon-close-mb");
document.addEventListener(
  "DOMContentLoaded",
  function () {
    $(window).on("load resize", function () {
      var width = $(document).width();

      if (width < 1024) {
        iconMenu.classList.remove("disable");
        iconMenu.onclick = () => {
          console.log("t");
          navbarmobile.classList.remove("disable");
          navbarmobile.classList.remove("dichphai");
        };
        close.onclick = () => {
          console.log("a");
          navbarmobile.classList.add("dichphai");
        };
      } else {
        console.log("g");
        iconMenu.classList.add("disable");
        navbarmobile.classList.add("disable");
      }
    });
  },
  false
);
