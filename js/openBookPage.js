let textBookContainer = document.querySelector(".textBook-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

async function adabiatTextApi() {
  let res = "";
  let adabiatTextArray = "";
  try {
    res = await fetch("data/adabiatText.json");
    if (res.ok) {
      adabiatTextArray = await res.json();
      console.log(adabiatTextArray);
      displayTextBook(adabiatTextArray,textBookContainer,rowsCount,currentPage
      );
      setUpPagination(adabiatTextArray, paginationContainer, rowsCount);
    }
  } catch (err) {
    console.log(err);
  }
}

function cardGenerator(textBookArray) {
  let card = `
      <div class="col-lg-3 col col-md-4 col-sm-6 justify-content-center d-flex">
        <div class="card mb-5 h100" style="width: 16rem;">
          <a href="./openBook.html?title=${textBookArray.title}">
            <img src="${textBookArray.img}" class="card-img-top" alt="...">
          </a>
          <div class="card-body">
            <h4 class="text-start">${textBookArray.title}</h4>
            <p class="card-text text-start">${textBookArray.des.substring(
              0,
              30
            )}...</p>
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