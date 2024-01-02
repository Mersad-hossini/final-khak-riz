let soundContainer = document.querySelector(".sound-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

async function honariSoundApi() {
  let res = "";
  let honariSoundArray = "";
  try {
    res = await fetch("data/honariSound.json");
    if (res.ok) {
      honariSoundArray = await res.json();
      console.log(honariSoundArray);
      displaySound(honariSoundArray, soundContainer, rowsCount, currentPage);
      setUpPagination(honariSoundArray, paginationContainer, rowsCount);
    }
  } catch (err) {
    console.log(err);
  }
}

function cardGenerator(soundObj) {
  let card = `
        <div class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center">
            <div class="card h-100" style="width: 16rem">
                <a href="./honariSoundPage.html?title=${soundObj.title}"><img src="${soundObj.img}" class="card-img-top img-fluid" alt="image book pdf"/></a>
                <div class="card-body">
                    <h5 class="card-title fw-bolder">${soundObj.title}</h5>
                    <p class="card-text">${soundObj.editing}...</p>
                    <a href="./honariSoundPage.html?title=${soundObj.title}" class="btn btn-success float-end w-100">مشاهده</a>
                </div>
            </div>
        </div>`;

  soundContainer.insertAdjacentHTML("beforeend", card);
}

function displaySound(honariArray, soundContainer, rowsCount, currentPage) {
  soundContainer.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = honariArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(soundArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(soundArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, soundArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, soundArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displaySound(soundArray, soundContainer, rowsCount, currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

window.addEventListener("load", honariSoundApi);