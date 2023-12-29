let imgContainer = document.querySelector(".img-container");
let sotiDetails = document.querySelector(".details");
let sotiDescription = document.querySelector(".description");

// Player
let playBtn = document.getElementById("play");
let music = document.querySelector("audio");
let isPlaying = false;
let progressContainer = document.querySelector(".progress-container");
let progress = document.querySelector(".progress");
let downloadSoundBtn = document.querySelector(".download-podcast");

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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
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
      sound: "./media/bazar.m4a",
    },
  ];
  getUrl(adabiatSotiArray);
}

function getUrl(sotiArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("title");

  let mainSoti = sotiArray.find((soti) => {
    return soti.title === getLocation;
  });

  if (!mainSoti) {
    window.location.href = "index.html";
  } else {
    cardGenerator(mainSoti);
  }
}

function cardGenerator(sotiObj) {
  let cardImg = `
    <h3>معرفی  ${sotiObj.title}</h3>
    <hr>
    <img src="${sotiObj.img}" class="img-fluid d-block mt-3 float-start rounded-1 " style="width: 100%;"/>   
    `;

  let cardDetails = `
    <hr>
    <h5>نویسنده:
      <p class="d-inline-block">${sotiObj.writer}</p>
    </h5>
    <h5>ناشر:
      <p class="d-inline-block mt-2">${sotiObj.publisher}</p>
    </h5>
    <h5>مترجم:
      <p class="d-inline-block mt-2">${sotiObj.Translator}</p>
    </h5>
    <h5>تاریخ نشر:
      <p class="d-inline-block mt-2">${sotiObj.dataPublish}</p>
    </h5>
    <h5>محل نشر:
      <p class="d-inline-block mt-2">${sotiObj.PublishAddress}</p>
    </h5>
    `;

  let cardDescription = `
    <hr class="mt-4 ">
    <h3> معرفی و توضیحات ${sotiObj.title}</h3>
    <p>${sotiObj.des}</p>
    `;

  music.setAttribute("src", sotiObj.sound);
  downloadSoundBtn.setAttribute("href", sotiObj.sound);
  imgContainer.insertAdjacentHTML("beforeend", cardImg);
  sotiDetails.insertAdjacentHTML("beforeend", cardDetails);
  sotiDescription.insertAdjacentHTML("beforeend", cardDescription);
}

function playSong() {
  isPlaying = true;
  playBtn.setAttribute("src", "./image/pause.png");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.setAttribute("src", "./image/play.png");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

function changeState() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function updateProgressBar(e) {
  if (isPlaying) {
    let duration = e.srcElement.duration;
    let currentTime = e.srcElement.currentTime;
    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + "%";
  }
}

function setProgressBar(e) {
  let width = this.clientWidth;
  let clickX = e.offsetX;
  let duration = music.duration;
  music.currentTime = (clickX / width) * duration;
  playSong();
}

playBtn.addEventListener("click", changeState);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

window.addEventListener("load", adabiatSotiApi);