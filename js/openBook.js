let imageContainer = document.querySelector(".image-container");
let downloadImageBtn = document.querySelector(".download-image");
let textBookInfo = document.querySelector(".textBook-info");
let descriptionBook = document.querySelector(".description");

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
  getUrl(adabiatTextArray);
}

function getUrl(textBookArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("title");

  let mainTxt = textBookArray.find((txt) => {
    return txt.title === getLocation;
  });

  if (!mainTxt) {
    window.location.href = "index.html";
  } else {
    cardGenerator(mainTxt);
  }
}

function cardGenerator(mainTxtObj) {
  let imgCard = `
    <h4>معرفی  ${mainTxtObj.title}</h4>
    <hr>
    <div class="bgImgBook">
        <img src="${mainTxtObj.img}" class="img-fluid d-block float-start rounded-1"/>
    </div>
    `;
  let infoCard = `
    <hr>
    <h5>نویسنده:
      <p class="d-inline-block">${mainTxtObj.writer}</p>
    </h5>
    <h5>ناشر:
      <p class="d-inline-block mt-2">${mainTxtObj.publisher}</p>
    </h5>
    <h5>مترجم:
      <p class="d-inline-block mt-2">${mainTxtObj.Translator}</p>
    </h5>
    <h5>تاریخ نشر:
      <p class="d-inline-block mt-2">${mainTxtObj.dataPublish}</p>
    </h5>
    <h5>محل نشر:
      <p class="d-inline-block mt-2">${mainTxtObj.PublishAddress}</p>
    </h5>
    `;

    let cardDescriptio = `
    <hr class="mt-4">
    <h3>معرفی ${mainTxtObj.title}</h3>
    <p>${mainTxtObj.des}</p>
    `

//   downloadImageBtn.setAttribute("href", mainTxtObj.img); // باید یک لینکی از کتاب باشد برای دانلود
  imageContainer.insertAdjacentHTML("beforeend", imgCard);
  textBookInfo.insertAdjacentHTML("beforeend" , infoCard)
  descriptionBook.insertAdjacentHTML("beforeend" , cardDescriptio)
}

window.addEventListener("load", adabiatTextApi);