let textBookContainer = document.querySelector(".textBook-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

async function adabiatTextApi() {
  let res = "";
  let adabiatTextArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/literature-history/LHBookApi/?format=json");
    if (res.ok) {
      adabiatTextArray = await res.json();
      displayTextBook(adabiatTextArray["bookApi"],textBookContainer,rowsCount,currentPage);
      setUpPagination(adabiatTextArray["bookApi"], paginationContainer, rowsCount);
    }
  } catch (err) {
    console.log(err);
  }
}

function cardGenerator(textBookArray) {
  let card = `
      <div class="col-lg-3 col col-md-4 col-sm-6 justify-content-center d-flex">
        <div class="card h-100" style="width: 16rem;">
          <a href="./openBook.html?title=${textBookArray.title}">
            <img src="https://server.khakrizedarya.ir${textBookArray.image}" class="card-img-top image" alt="...">
          </a>
          <div class="card-body">
            <h5 class="text-start card-title">${textBookArray.title}</h5>
            <p class="card-text text-start">${textBookArray.description.substring(0,60)}...</p>
            <div class="botn">
              <a href="./openBook.html?title=${
                textBookArray.title
              }" class="btn btn-sm btn-success border-0 float-end btnBxBook">مشاهده</a>
            </div>
          </div>
        </div>
      </div>
    `;
  textBookContainer.insertAdjacentHTML("beforeend", card);
}

function displayTextBook(textBookArray,textBookContainer,rowsCount,currentPage) {
  textBookContainer.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = textBookArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(textBookArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(textBookArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, textBookArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, textBookArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayTextBook(textBookArray, textBookContainer, rowsCount, currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

window.addEventListener("load", adabiatTextApi);