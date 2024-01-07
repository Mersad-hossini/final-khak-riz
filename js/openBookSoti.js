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

async function adabiatSotiApi() {
  let res = "";
  let adabiatSotiArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/literature-history/LHBookAudioApi/?format=json");
    if (res.ok) {
      adabiatSotiArray = await res.json();
      getUrl(adabiatSotiArray["AudioBookAPI"])
    }
  } catch (err) {
    console.log(err);
  }
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
  }
  cardGenerator(mainSoti);
}

function cardGenerator(sotiObj) {
  let title = sotiObj.title || "—" 
  let image = sotiObj.image || "./image/placeholder.png" 
  let author = sotiObj.author || "—" 
  let editor = sotiObj.editor || "—" 
  let narrator = sotiObj.narrator || "—" 
  let description = sotiObj.description || "—" 
  let audioLink = sotiObj.audio_file || "—"

  let cardImg = `
    <h3>${title}</h3>
    <hr>
    <img src="https://server.khakrizedarya.ir${image}" class="img-fluid d-block mt-3 float-start rounded-1 right-img"/>   
    `;

  let cardDetails = `
    <hr>
    <h5> نویسنده:
      <p class="d-inline-block">${author}</p>
    </h5>
    <h5>تدوین و تنظیم:
      <p class="d-inline-block mt-2">${editor}</p>
    </h5>
    <h5>خوانش:
      <p class="d-inline-block mt-2">${narrator}</p>
    </h5>
    `;

  let cardDescription = `
    <hr class="mt-4 ">
    <h3>توضیحات:</h3>
    <p>${description}</p>
    `;

  music.setAttribute("src", `https://server.khakrizedarya.ir${audioLink}`);
  downloadSoundBtn.setAttribute("href", `https://server.khakrizedarya.ir${audioLink}`);
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
  let width = progressContainer.clientWidth;
  let clickX = e.clientX - progressContainer.getBoundingClientRect().left;

  let duration = music.duration;
  let newTime = (clickX / width) * duration;

  music.currentTime = newTime;
  playSong(); // اگر موزیک در حال پخش نیست، آن را پخش کنید
}


playBtn.addEventListener("click", changeState);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

window.addEventListener("load", adabiatSotiApi);