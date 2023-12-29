let soundContainer = document.querySelector(".sound-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

function honariSoundApi() {
  let honariSoundArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "صوت شماره 1",
      audio: "./media/bazar.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "صوت شماره 2",
      audio: "./media/html.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "صوت شماره 3",
      audio: "./media/kar.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "صوت شماره 4",
      audio: "./media/bazar.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "صوت شماره 5",
      audio: "./media/html.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "صوت شماره 6",
      audio: "./media/kar.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "صوت شماره 7",
      audio: "./media/bazar.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "صوت شماره 8",
      audio: "./media/html.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "صوت شماره 9",
      audio: "./media/kar.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "صوت شماره 10",
      audio: "./media/bazar.m4a",
      actors: "بازیگران",
      editing: "ادیتور هستم",
      writer: "نویسنده هستمم",
      director: "کارگردان هستم",
      designer: "من طراح هستم",
    },
  ];
  displaySound(honariSoundArray, soundContainer, rowsCount, currentPage);
  setUpPagination(honariSoundArray, paginationContainer, rowsCount);
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