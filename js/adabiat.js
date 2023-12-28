let sotiContainer = document.querySelector(".soti-container");
let textBookContainer = document.querySelector(".text-bookContainer");

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
  sotiSeparator(adabiatSotiArray);
}

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
  cardTextSeparator(adabiatTextArray);
}


function sotiSeparator(sotiArray) {
  let newSotiArray = [];
  let randomIndex = "";
  let randomElement = "";

  while (newSotiArray.length < 4) {
    randomIndex = Math.floor(Math.random() * sotiArray.length);
    randomElement = sotiArray[randomIndex];

    if (!newSotiArray.includes(randomElement)) {
      newSotiArray.push(randomElement);
    }
  }

  cardSotiGenerator(newSotiArray);
}

function cardSotiGenerator(newSotiArray) {
  let card = "";
  newSotiArray.forEach((soti) => {
    card += `
      <div class="col-lg-3 col col-md-4 col-sm-6 justify-content-center d-flex">
        <div class="card mb-5" style="width: 16rem;">
          <a href="./openBookSoti.html?title=${soti.title}">
            <img src="${soti.img}" class="card-img-top" alt="...">
          </a>
          <div class="imgHedphone imgHedphoneBx">
            <img src="image/headphone-20.png" class="card-img-top" alt="image hedphon on image book soti">
          </div>
          <div class="card-body">
            <h4 class="text-start">${soti.title}</h4>
            <p class="card-text text-start">${soti.des.substring(0,30)}...</p>
            <div class="botn">
              <a href="./openBookSoti.html?title=${soti.title}" class="btn btn-sm btn-success border-0 float-end btnBxBook">مشاهده</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  sotiContainer.insertAdjacentHTML("beforeend", card);
}


function cardTextSeparator(textBookArray) {
  let newtextBookArray = [];
  let randomIndex = "";
  let randomElement = "";

  while (newtextBookArray.length < 4) {
    randomIndex = Math.floor(Math.random() * textBookArray.length);
    randomElement = textBookArray[randomIndex];

    if (!newtextBookArray.includes(randomElement)) {
      newtextBookArray.push(randomElement);
    }
  }
  cardTextGenerator(newtextBookArray);
}

function cardTextGenerator(newtextBookArray) {
  let card = "";
  newtextBookArray.forEach((txt) => {
    card += `
      <div class="col-lg-3 col col-md-4 col-sm-6 justify-content-center d-flex">
        <div class="card mb-5 h100" style="width: 16rem;">
          <a href="./openBook.html?title=${txt.title}">
            <img src="${txt.img}" class="card-img-top" alt="...">
          </a>
          <div class="imgHedphone imgHedphoneBx">
            <img src="image/-book20.png" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h4 class="text-start">${txt.title}</h4>
            <p class="card-text text-start">${txt.des.substring(0,30)}</p>
            <div class="botn">
              <a href="./openBook.html?title=${txt.title}" class="btn btn-sm btn-primary border-0 float-end btnBxBook">مشاهده</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  textBookContainer.insertAdjacentHTML("beforeend", card);
}

window.addEventListener("load", adabiatSotiApi);
window.addEventListener("load", adabiatTextApi);