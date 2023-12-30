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

function filmApi() {
  let filmArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "فیلم 1",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "فیلم 2",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "فیلم 3",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "فیلم 4",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "فیلم 5",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "فیلم 6",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "فیلم 7",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "فیلم 8",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "فیلم 9",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "فیلم 10",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
  ];
  displayClipCard(filmArray, cardContainer, rowsCount, currentPage);
  setUpPagination(filmArray, paginationContainer, rowsCount);
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
  displayClipCard(motinArray, cardContainer, rowsCount, currentPage);
  setUpPagination(motinArray, paginationContainer, rowsCount);
}

function videoMusicApi() {
  let videoMusicArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 1",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 2",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 3",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 4",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 5",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 6",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 7",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 8",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 9",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 10",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
  ];
  displayClipCard(videoMusicArray, cardContainer, rowsCount, currentPage);
  setUpPagination(videoMusicArray, paginationContainer, rowsCount);
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