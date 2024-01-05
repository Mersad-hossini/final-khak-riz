let sotiContainer = document.querySelector(".soti-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

async function adabiatSotiApi() {
  let res = "";
  let adabiatSotiArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/literature-history/LHBookAudioApi/?format=json");
    if (res.ok) {
      adabiatSotiArray = await res.json();
      displayBookSoti(adabiatSotiArray["AudioBookAPI"], sotiContainer, rowsCount, currentPage);
      setUpPagination(adabiatSotiArray["AudioBookAPI"], paginationContainer, rowsCount);
    }
  } catch (err) {
    console.log(err);
  }
}

function cardGenerator(sotiArray) {
  let card = `
        <div class="col col-sm-6 col-md-4 col-lg-3 justify-content-center d-flex">
        <div class="card h-100" style="width: 16rem;">
          <a href="./openBookSoti.html?title=${sotiArray.title}">
            <img src="${sotiArray.image}" class="card-img-top img-fluid" alt="image book">
          </a>
          <div class="card-body pb-0">
            <h5 class="text-start">${sotiArray.title}</h5>
            <p class="card-text text-start">${sotiArray.description.substring(0,30)}...</p>
            <a href="./openBookSoti.html?title=${sotiArray.title}" class="btn btn-sm btn-success border-0 float-end btnBxBook mb-3">مشاهده</a>
          </div>
        </div>
      </div>
        `;
  sotiContainer.insertAdjacentHTML("beforeend", card);
}

function displayBookSoti(sotiArray, sotiContainer, rowsCount, currentPage) {
  sotiContainer.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = sotiArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(sotiArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(sotiArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, sotiArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, sotiArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayBookSoti(sotiArray, sotiContainer, rowsCount, currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

window.addEventListener("load", adabiatSotiApi);
