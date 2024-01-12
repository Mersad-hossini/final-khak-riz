let searchResultsContainer = document.querySelector(".serachResult-container");
let searchBtnIcon = document.getElementById("search-btn");
let showSearchResult = document.querySelector(".small-size")

// pagination
let currentPage = 1;
let rowsCount = 8;
const paginationContainer = document.getElementById("pagination");

async function search() {
  let inputSearch = document.getElementById("input-search");
  let url =
    "https://server.khakrizedarya.ir/home-object/SerachData/?format=json";

  try {
    let res = await fetch(url);
    let searchData = [];

    if (res.ok) {
      let searchDatas = await res.json();

      searchData.push(searchDatas["BookModel"]);
      searchData.push(searchDatas["AudioBook"]);
      searchData.push(searchDatas["PhysicalBook"]);
      searchData.push(searchDatas["GraphicDesign"]);
      searchData.push(searchDatas["VideoClip"]);
      //   searchData.push(searchDatas["MotionGraphic"]);
      searchData.push(searchDatas["VideoMusic"]);
      searchData.push(searchDatas["Radio"]);
      //   searchData.push(searchDatas["Movie"]);
      //   searchData.push(searchDatas["CaMotionGraphic"]);
      searchData.push(searchDatas["Yademan"]);
      searchData.push(searchDatas["YademanShohada"]);

      let flattenedData = searchData.flat();

      let filterResult = flattenedData.filter((result) => {
        return (
          (result.title && result.title.includes(inputSearch.value)) ||
          (result.name && result.name.includes(inputSearch.value)) ||
          (result.subject && result.subject.includes(inputSearch.value)) ||
          (result.researcher &&
            result.researcher.includes(inputSearch.value)) ||
          (result.author && result.author.includes(inputSearch.value)) ||
          (result.publisher && result.publisher.includes(inputSearch.value)) ||
          (result.narrator && result.narrator.includes(inputSearch.value)) ||
          (result.editor && result.editor.includes(inputSearch.value)) ||
          (result.publication_place &&
            result.publication_place.includes(inputSearch.value)) ||
          (result.designer && result.designer.includes(inputSearch.value)) ||
          (result.singer && result.singer.includes(inputSearch.value)) ||
          (result.composer && result.composer.includes(inputSearch.value)) ||
          (result.lyricist && result.lyricist.includes(inputSearch.value)) ||
          (result.director && result.director.includes(inputSearch.value)) ||
          (result.actors && result.actors.includes(inputSearch.value)) ||
          (result.writer && result.writer.includes(inputSearch.value)) ||
          (result.address && result.address.includes(inputSearch.value))
        );
      });

      if (filterResult.length <= 0 || inputSearch.value === "") {
        window.location.href = "page404.html";
      } else {
        showSearchResult.innerHTML = inputSearch.value
        displayCard(filterResult,searchResultsContainer,rowsCount,currentPage);
        setUpPagination(filterResult, paginationContainer, rowsCount);
      }
    } else {
      throw Error;
    }
  } catch (err) {
    console.log(err);
  }
}

function displayCard(resultSearchArray,searchContainer,rowsCount,currentPage) {
  searchContainer.innerHTML = "";
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = resultSearchArray.slice(start, end);
  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function cardGenerator(searchResults) {
  let card = `
      <div class="col col-sm-6 col-md-4 col-lg-3 justify-content-center d-flex">
          <div class="card h-100" style="width: 16rem;">
              <a href="#">
                  <img src="https://server.khakrizedarya.ir${
                    searchResults.image || searchResults.thumbnail
                  }" class="card-img-top img-fluid" alt="image book">
              </a>
              <div class="card-body pb-0">
                  <h5 class="text-start">${
                    searchResults.title || searchResults.name
                  }</h5>
                  <a href="#" class="btn btn-sm btn-success border-0 float-end btnBxBook mb-3">مشاهده</a>
              </div>
          </div>                
      </div>`;
  searchResultsContainer.insertAdjacentHTML("beforeend", card);
}

function setUpPagination(resultSearchArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(resultSearchArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, resultSearchArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, resultSearchArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayCard(resultSearchArray,searchResultsContainer,rowsCount,currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

// اجرای search در صورت وجود title در URL
window.addEventListener("DOMContentLoaded", () => {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("search");
  if (getLocation) {
    document.getElementById("input-search").value = getLocation;
    search();
  }
});
