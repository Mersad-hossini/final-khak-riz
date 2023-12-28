let sotiContainer = document.querySelector(".soti-container");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

function adabiatSotiApi() {
  let adabiatSotiArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "کتاب صوتی 1",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "بوشهر",
      sound:'./media/bazar.m4a',
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "کتاب صوتی 2",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "تهران",
      sound:'./media/bazar.m4a',
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "کتاب صوتی 3",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "شیراز",
      sound:'./media/bazar.m4a',
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "کتاب صوتی 4",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "ساری",
      sound:'./media/bazar.m4a',
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "کتاب صوتی 5",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "خوزستان",
      sound:'./media/bazar.m4a',
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "کتاب صوتی 6",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "کرج",
      sound:'./media/bazar.m4a',
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "کتاب صوتی 7",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "هرمزگان",
      sound:'./media/bazar.m4a',
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "کتاب صوتی 8",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "اصفهان",
      sound:'./media/bazar.m4a',
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "کتاب صوتی 9",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "مشهد",
      sound:'./media/bazar.m4a',
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "کتاب صوتی 10",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "لرستان",
      sound:'./media/bazar.m4a',
    },
  ];
  displayBookSoti(adabiatSotiArray, sotiContainer, rowsCount, currentPage);
  setUpPagination(adabiatSotiArray, paginationContainer, rowsCount)
}

function cardGenerator(sotiArray) {
  let card = `
        <div class="col col-sm-6 col-md-4 col-lg-3 justify-content-center d-flex">
        <div class="card h-100" style="width: 16rem;">
          <a href="./openBookSoti.html?title=${sotiArray.title}">
            <img src="${sotiArray.img}" class="card-img-top img-fluid" alt="image book">
          </a>
          <div class="card-body pb-0">
            <h5 class="text-start">${sotiArray.title}</h5>
            <p class="card-text text-start">${sotiArray.des.substring(0,30)}...</p>
            <a href="./openBookSoti.html?title=${sotiArray.title}" class="btn btn-sm btn-success border-0 float-end btnBxBook mb-3">مشاهده</a>
          </div>
        </div>
      </div>
        `;
  sotiContainer.insertAdjacentHTML("beforeend", card);
}

function displayBookSoti(sotiArray, sotiContainer, rowsCount, currentPage) {
  sotiContainer.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = sotiArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(sotiArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(sotiArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, sotiArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, sotiArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayBookSoti(sotiArray, sotiContainer, rowsCount, currentPage)
    
    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

window.addEventListener("load", adabiatSotiApi);