let yadmanRow = document.querySelector(".yadman-data");

let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

async function yadmanApi() {
  let res = "";
  let yadmanDatas = "";
  try {
    res = await fetch("data/yadman.json");
    if (res.ok) {
      yadmanDatas = await res.json();
      console.log(yadmanDatas);
      setUpPagination(yadmanDatas, paginationContainer, rowsCount);
      displayYadman(yadmanDatas, yadmanRow, rowsCount, currentPage);
    }
  } catch (err) {
    console.log(err);
  }
}

function cardGenerator(yadmanData) {
  let card = `
      <div class="col-12 col-sm-9 col-md-6 col-lg-4 my-3 mx-auto">
        <div class="card card-box-imgs h-100 text-center">
          <a href="./yadman-mini.html?name=${yadmanData.name}">
            <img
              src="${yadmanData.img}"
              class="card-img-top podcast-img card-box-imgs open-modal"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="fw-bold card-title">${yadmanData.name}</h5>
            <p class="mt-2 card-text">${yadmanData.des.substring(1, 30)}</p>
            <a
              href="./yadman-mini.html?name=${yadmanData.name}"
              class="btn btn-success float-end w-100"
            >مشاهده</a>
          </div>
        </div>
      </div>
    `;
  yadmanRow.insertAdjacentHTML("beforeend", card);
}

function displayYadman(yadmanArray, yadmanRow, rowsCount, currentPage) {
  yadmanRow.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = yadmanArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(yadmanArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(yadmanArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, yadmanArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, yadman) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayYadman(yadman, yadmanRow, rowsCount, currentPage);
    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

yadmanApi();