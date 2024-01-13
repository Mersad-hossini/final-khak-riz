// رفتن به بالا
let goTop = document.getElementById("go-top");
let goTopValue = document.getElementById("go-top-value");

// ارسال مقادیر سرچ با دکمه ذره بین
let inputSearch = document.getElementById("input-search");
let searchBtnIcon = document.getElementById("search-btn");
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

}

document.addEventListener("scroll", addShadow);

goTop.addEventListener("click" , () => {
  document.documentElement.scrollTop = 0;
})

inputSearch.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    const inputValue = inputSearch.value.trim();

    if (!inputValue) {
      formSearch.setAttribute("action", "./page404.html");
    } else {
      formSearch.setAttribute("action", "./resultSearch.html");
    }
  }
});

function submitForm() {
    const inputValue = inputSearch.value.trim();

    if (!inputValue) {
      formSearch.setAttribute("action", "./page404.html");
      formSearch.submit()
    } else {
      formSearch.setAttribute("action", "./resultSearch.html");
      formSearch.submit()
    }
}

searchBtnIcon.addEventListener("click", submitForm);