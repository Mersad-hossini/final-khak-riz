let cardContainer = document.querySelector(".card-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

let locationSearch = new URLSearchParams(location.search);
let getLocation = locationSearch.get("title");

if (getLocation === "videoMusic") {
  videoMusicApi();
} else if (getLocation === "motionGrapic") {
  motionApi();
} else if (getLocation === "film") {
  filmApi();
} else {
  window.location.href = "index.html";
}

async function filmApi() {
  let res = "";
  let honariFilmArray = "";
  try {
    res = await fetch("data/honariFilm.json");
    if (res.ok) {
      honariFilmArray = await res.json();
      console.log(honariFilmArray);
      displayClipCard(honariFilmArray, cardContainer, rowsCount, currentPage);
      setUpPagination(honariFilmArray, paginationContainer, rowsCount);
    }
  } catch (err) {
    console.log(err);
  }

}

async function motionApi() {
  let res = "";
  let honariMotionArray = "";
  try {
    res = await fetch("data/honariMotion.json");
    if (res.ok) {
      honariMotionArray = await res.json();
      console.log(honariMotionArray);
      displayClipCard(honariMotionArray, cardContainer, rowsCount, currentPage);
      setUpPagination(honariMotionArray, paginationContainer, rowsCount);
    }
  } catch (err) {
    console.log(err);
  }  

}

async function videoMusicApi() {
  let res = "";
  let videoMusicArray = "";
  try {
    res = await fetch("data/honariVideoMusic.json");
    if (res.ok) {
      videoMusicArray = await res.json();
      console.log(videoMusicArray);
      displayClipCard(videoMusicArray, cardContainer, rowsCount, currentPage);
      setUpPagination(videoMusicArray, paginationContainer, rowsCount);
    }
  } catch (err) {
    console.log(err);
  }    

}

function cardGenerator(clipArray) {
  let card = `
    <div class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center">
        <div class="card h-100" style="width: 16rem">
            <a href="./honariClipPage.html?title=${clipArray.title}"><img src="${clipArray.img}" class="card-img-top img-fluid" alt="image book pdf"/></a>
            <div class="card-body">
                <h5 class="card-title fw-bolder">${clipArray.title}</h5>
                <p class="card-text">${clipArray.director}</p>
                <a href="./honariClipPage.html?title=${clipArray.title}" class="btn btn-success float-end w-100">مشاهده</a>
            </div>
        </div>
    </div>`;
  cardContainer.insertAdjacentHTML("beforeend", card);
}

function displayClipCard(clipArray, cardContainer, rowsCount, currentPage) {
  cardContainer.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = clipArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(honariArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(honariArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, honariArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, honariArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayClipCard(honariArray, cardContainer, rowsCount, currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}