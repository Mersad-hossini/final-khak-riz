let navbarLogoMd = document.getElementById("nav-logo-bigScreen");
let navbarLogoSm = document.getElementById("nav-logo-smallScreen");
let navbar = document.querySelector(".seconde-bar");
let sticky = navbar.offsetTop;

// رفتن به بالا
let goTop = document.getElementById("go-top");
let goTopValue = document.getElementById("go-top-value");

// ارسال مقادیر سرچ با دکمه ذره بین
let searchBtn = document.getElementById("search-btn");
let formSearch = document.getElementById("form-search");

// تابع
function addShadow() {
  let position = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((position * 100) / calcHeight);

  goTop.style.display = position > 100 ? "grid" : "none";
  goTop.style.backgroundImage = `conic-gradient(from 0deg at 50% 50%, #03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

  navbar.style.boxShadow = position > 130 ? "0px 5px 10px #1d1d1d" : "";
}

function submitForm() {
  formSearch.submit();
}

// افزودن گوش کننده به ایونت‌ها
document.addEventListener("scroll", addShadow);
searchBtn.addEventListener("click", submitForm);

goTop.addEventListener("click" , () => {
  document.documentElement.scrollTop = 0;
})