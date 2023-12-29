let majaziContaienr = document.querySelector(".majazi-contaienr");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

function majaziGrapicApi() {
  let majaziGrapicArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "اثر شماره 1",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "اثر شماره 2",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "اثر شماره 3",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "اثر شماره 4",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "اثر شماره 5",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "اثر شماره 6",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "اثر شماره 7",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "اثر شماره 8",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "اثر شماره 9",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "اثر شماره 10",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      designer: "من طراح هستم",
    },
  ];
  displayGrapicImg(majaziGrapicArray, majaziContaienr, rowsCount, currentPage);
  setUpPagination(majaziGrapicArray, paginationContainer, rowsCount);
}

function cardGenerator(majaziArray) {
  let card = `
    <div class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center">
        <div class="card h-100" style="width: 16rem">
            <a href="./majaziGalleryPage.html?title=${majaziArray.title}"><img src="${majaziArray.img}" class="card-img-top img-fluid" alt="image book pdf"/></a>
            <div class="card-body">
                <h5 class="card-title fw-bolder">${majaziArray.title}</h5>
                <p class="card-text">${majaziArray.des.substring(0,30)}...</p>
                <a href="./majaziGalleryPage.html?title=${majaziArray.title}" class="btn btn-success float-end w-100">مشاهده</a>
            </div>
        </div>
    </div>`;

  majaziContaienr.insertAdjacentHTML("beforeend", card);
}

function displayGrapicImg(majaziArray,textBookContainer,rowsCount,currentPage) {
  textBookContainer.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = majaziArray.slice(start, end);

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
    displayGrapicImg(majaziArray, majaziContaienr, rowsCount, currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

window.addEventListener("load", majaziGrapicApi);