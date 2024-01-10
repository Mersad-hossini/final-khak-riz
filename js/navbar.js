const navbarLogoMd = document.getElementById("nav-logo-bigScreen");
const navbarLogoSm = document.getElementById("nav-logo-smallScreen");
const navbar = document.querySelector(".seconde-bar");
const sticky = navbar.offsetTop;

// رفتن به بالا
const goTop = document.getElementById("go-top");
const goTopValue = document.getElementById("go-top-value");

// ارسال مقادیر سرچ با دکمه ذره بین
const searchBtn = document.getElementById("search-btn");
const formSearch = document.getElementById("form-search");

// تابع
function addShadow() {
  const position = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = Math.round((position * 100) / calcHeight);

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
goTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
