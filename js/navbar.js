// کوچک و بزرگ شدن نوبار با اسکرول کردن



let navbarLogo_md = document.getElementById("nav-logo-bigScreen");
let navbarLogo_sm = document.getElementById("nav-logo-smallScreen");
let navbar = document.querySelector(".seconde-bar");
let sticky = navbar.offsetTop;

// ارسال مقادیر سرچ با دکمه ذره بین
let searchBtn = document.getElementById("search-btn");
let formSearch = document.getElementById("form-search");

// Function

function addShadow() {
  let scrollSize = document.documentElement.scrollTop;
  if (scrollSize > 130) {
    navbar.style.boxShadow = "0px 5px 10px #1d1d1d";
  } else {
    navbar.style.boxShadow = "";
  }
}

function submitBtn() {
  formSearch.submit();
}

// add event listener
document.addEventListener("scroll", addShadow);
searchBtn.addEventListener("click", submitBtn);