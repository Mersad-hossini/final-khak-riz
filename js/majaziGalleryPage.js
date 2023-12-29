let imageContainer = document.querySelector(".image-container")
let infoContainer = document.querySelector(".info-container")
let majaziDescription = document.querySelector(".majazi-description")
let downloadBtn = document.querySelector(".download")

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
  getUrl(majaziGrapicArray)
}

function getUrl(majaziArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("title");

  let mainmajazi = majaziArray.find((majazi) => {
    return majazi.title === getLocation;
  });

  if (!mainmajazi) {
    window.location.href = "index.html";
  } else {
    cardGenerator(mainmajazi);
  }
}

function cardGenerator(mainmajaziObj) {
    let cardImg = `
        <h3 class="text-center">معرفی ${mainmajaziObj.title}</h4>
        <hr />
        <div class="bgImgBook p-4">
        <img src="${mainmajaziObj.img}" class="img-fluid d-block float-start rounded-1"/>`;

    let cardDetails = `
        <hr>
        <h5>نام اثر:
            <p class="d-inline-block">${mainmajaziObj.title}</p>
        </h5>
        <h5>طراح:
            <p class="d-inline-block mt-2">${mainmajaziObj.designer}</p>`;

    let cardDescription = `
        <hr class="mt-2 ">
        <h3> معرفی و توضیحات ${mainmajaziObj.title}</h3>
        <p>${mainmajaziObj.des}</p> `;

  downloadBtn.setAttribute("href" , mainmajaziObj.img)
  imageContainer.insertAdjacentHTML("beforeend", cardImg);
  infoContainer.insertAdjacentHTML("beforeend", cardDetails);
  majaziDescription.insertAdjacentHTML("beforeend", cardDescription);
}

window.addEventListener("load", majaziGrapicApi);