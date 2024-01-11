let cardContainer = document.querySelector(".card-container");
let currentPage = 1;
let rowsCount = 8;
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
  window.location.href = "./page404.html";
}

async function filmApi() {
  let res = "";
  let honariFilmArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cinamtic-art/MovieApi/?format=json");
    if (res.ok) {
      honariFilmArray = await res.json();
      displayClipCard(honariFilmArray["MovieApi"], cardContainer, rowsCount, currentPage);
      setUpPagination(honariFilmArray["MovieApi"], paginationContainer, rowsCount);
    }
  } catch (err) {
    console.log(err);
  }
}

async function motionApi() {
  let res = "";
  let honariMotionArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cinamtic-art/MotionGraphicApi/?format=json");
    if (res.ok) {
      honariMotionArray = await res.json();
      displayClipCard(honariMotionArray["MotionGraphicApi"], cardContainer, rowsCount, currentPage);
      setUpPagination(honariMotionArray["MotionGraphicApi"], paginationContainer, rowsCount);
    }
  } catch (err) {
    console.error("Error...");
  }  
}

async function videoMusicApi() {
  let res = "";
  let videoMusicArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cinamtic-art/VideoMusicApi/?format=json");
    if (res.ok) {
      videoMusicArray = await res.json();
      displayClipCard(videoMusicArray["VideoMusicApi"], cardContainer, rowsCount, currentPage);
      setUpPagination(videoMusicArray["VideoMusicApi"], paginationContainer, rowsCount);
    }
  } catch (err) {
    console.error("Error...");
  }    
}

function cardGenerator(clipArray) {
  let card = `
    <div class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center">
        <div class="card h-100" style="width: 16rem">
            <a href="./honariClipPage.html?title=${clipArray.title}"><img src="https://server.khakrizedarya.ir${clipArray.img}" class="card-img-top img-fluid" alt="image book pdf"/></a>
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