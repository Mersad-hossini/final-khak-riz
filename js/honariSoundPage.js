let infoContainer = document.querySelector(".info-container");
let infoDescription = document.querySelector(".info-description");
let soundContainer = document.querySelector(".sound-container");

// Player
let playBtn = document.getElementById("play");
let music = document.querySelector("audio");
let isPlaying = false;
let progressContainer = document.querySelector(".progress-container");
let progress = document.querySelector(".progress");
let downloadSoundBtn = document.querySelector(".download-podcast");

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
  getUrl(honariSoundArray);
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
    <img src="${sotiObj.img}" class="img-fluid d-block mt-3 float-start rounded-1 " style="width: 100%;"/>`;

  let cardDetails = `
    <hr>
    <h5>بازیگران:
        <p class="d-inline-block">${sotiObj.actors}</p>
    </h5>
    <h5>ندوین:
        <p class="d-inline-block mt-2">${sotiObj.editing}</p>
    </h5>
    <h5>نویسنده:
        <p class="d-inline-block mt-2">${sotiObj.writer}</p>
    </h5>
    <h5>کارگردان:
        <p class="d-inline-block mt-2">${sotiObj.director}</p>
    </h5>`;

  let cardDescription = `
    <hr class="mt-4 ">
    <h3>توضیحات ${sotiObj.title}</h3>
    <p>${sotiObj.editing}</p>`;

  music.setAttribute("src", sotiObj.audio);
  downloadSoundBtn.setAttribute("href", sotiObj.audio);
  soundContainer.insertAdjacentHTML("beforeend", cardImg);
  infoContainer.insertAdjacentHTML("beforeend", cardDetails);
  infoDescription.insertAdjacentHTML("beforeend", cardDescription);
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
window.addEventListener("load", honariSoundApi);