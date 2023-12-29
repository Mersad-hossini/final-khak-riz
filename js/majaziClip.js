let clipContainer = document.querySelector(".clip-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

let locationSearch = new URLSearchParams(location.search);
let getLocation = locationSearch.get("title");

if (getLocation === "videoClip") {
    clipApi();
} else if (getLocation === "motinGrapic") {
    motionApi();
} else [
    window.location.href = "index.html"
]

function clipApi() {
  let clipArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "کلیپ 1",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "کلیپ 2",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "کلیپ 3",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "کلیپ 4",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "کلیپ 5",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "کلیپ 6",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "کلیپ 7",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "کلیپ 8",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "کلیپ 9",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "کلیپ 10",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
  ];
  displayClipCard(clipArray,clipContainer,rowsCount,currentPage)
  setUpPagination(clipArray, paginationContainer, rowsCount)
}

function motionApi() {
  let motinArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "موشن 1",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "موشن 2",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "موشن 3",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "موشن 4",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "موشن 5",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "موشن 6",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "موشن 7",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "موشن 8",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "موشن 9",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "موشن 10",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
  ];
  displayClipCard(motinArray,clipContainer,rowsCount,currentPage)
  setUpPagination(motinArray, paginationContainer, rowsCount)
}

function cardGenerator(clipArray) {
    let card = `
    <div class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center">
    <div class="card h-100" style="width: 16rem">
      <a href="./majaziClipPage.html?title=${clipArray.title}"><img src="${clipArray.img}" class="card-img-top img-fluid" alt="image book pdf"/></a>
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