let textBookContainer = document.querySelector(".textBook-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

function adabiatTextApi() {
  let adabiatTextArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "کتاب متنی 1",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "بوشهر",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "کتاب متنی 2",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "تهران",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "کتاب متنی 3",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "شیراز",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "کتاب متنی 4",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "ساری",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "کتاب متنی 5",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "خوزستان",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "کتاب متنی 6",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "کرج",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "کتاب متنی 7",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "هرمزگان",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "کتاب متنی 8",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "اصفهان",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "کتاب متنی 9",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "مشهد",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "کتاب متنی 10",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "لرستان",
    },
  ];
  displayTextBook(adabiatTextArray, textBookContainer, rowsCount, currentPage);
  setUpPagination(adabiatTextArray, paginationContainer, rowsCount)
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
              }" class="btn btn-sm btn-primary border-0 float-end btnBxBook">مشاهده</a>
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
    displayTextBook(textBookArray,textBookContainer,rowsCount,currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

window.addEventListener("load", adabiatTextApi);