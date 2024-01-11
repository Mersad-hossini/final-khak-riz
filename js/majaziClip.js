let clipContainer = document.querySelector(".clip-container");
let currentPage = 1;
let rowsCount = 8;
const paginationContainer = document.getElementById("pagination");

let locationSearch = new URLSearchParams(location.search);
let getLocation = locationSearch.get("title");

if (getLocation === "videoClip") {
    clipApi();
} else if (getLocation === "motinGrapic") {
    motionApi();
} else {
    window.location.href = "page404.html"
}

async function clipApi() {
  let res = "";
  let majaziClipArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cyberspace/VideoClipApi/?format=json");
    if (res.ok) {
      majaziClipArray = await res.json();
      displayClipCard(majaziClipArray["VideoClipApi"],clipContainer,rowsCount,currentPage)
      setUpPagination(majaziClipArray["VideoClipApi"], paginationContainer, rowsCount)
    }
  } catch (err) {
    console.error("Error...");
  }
}

async function motionApi() {
  let res = "";
  let majaziMotinArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cyberspace/MotionGraphiApi/?format=json");
    if (res.ok) {
      majaziMotinArray = await res.json();
      displayClipCard(majaziMotinArray["MotionGraphiApi"],clipContainer,rowsCount,currentPage)
      setUpPagination(majaziMotinArray["MotionGraphiApi"], paginationContainer, rowsCount)
    }
  } catch (err) {
    console.error("Error...");
  }
}

function cardGenerator(clipArray) {
  console.log(clipArray.thumbnail);
    let card = `
    <div class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center">
    <div class="card h-100" style="width: 16rem">
      <a href="./majaziClipPage.html?title=${clipArray.title}"><img src="https://server.khakrizedarya.ir${clipArray.thumbnail}" class="card-img-top img-fluid" alt="image book pdf"/></a>
      <div class="card-body">
        <h5 class="card-title fw-bolder">${clipArray.title}</h5>
        <p class="card-text">${clipArray.editing}...</p>
         <a href="./majaziClipPage.html?title=${clipArray.title}" class="btn btn-success float-end w-100">مشاهده</a>
      </div>
    </div>
    </div>
    `
    clipContainer.insertAdjacentHTML("beforeend" , card)
}

function displayClipCard(clipArray,clipContainer,rowsCount,currentPage) {
    clipContainer.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = clipArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(majaziArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(majaziArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, majaziArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, majaziArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayClipCard(majaziArray, clipContainer, rowsCount, currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}