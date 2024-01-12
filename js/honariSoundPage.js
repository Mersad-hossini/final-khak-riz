let infoContainer = document.querySelector(".info-container");
let soundContainer = document.querySelector(".sound-container");

// Player
let playBtn = document.getElementById("play");
let music = document.querySelector("audio");
let isPlaying = false;
let progressContainer = document.querySelector(".progress-container");
let progress = document.querySelector(".progress");
let downloadSoundBtn = document.querySelector(".download-podcast");

async function honariSoundApi() {
  let res = "";
  let honariSoundArray = "";
  try {
    res = await fetch(
      "https://server.khakrizedarya.ir/cinamtic-art/RadioApiAll/?format=json"
    );
    if (res.ok) {
      honariSoundArray = await res.json();
      getUrl(honariSoundArray["RadioApiAll"]);
    }
  } catch (err) {
    console.error("Error...");
  }
}

function getUrl(sotiArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("title");

  let mainSoti = sotiArray.find((soti) => {
    return soti.title === getLocation;
  });

  if (!mainSoti) {
    window.location.href = "page404.html";
  } else {
    cardGenerator(mainSoti);
  }
}

function cardGenerator(sotiObj) {
  let cardImg = `
    <h3>معرفی  ${sotiObj.title}</h3>
    <hr>
    <img src="https://server.khakrizedarya.ir${sotiObj.audio_image}" class="img-fluid d-block right-img mt-3 float-start rounded-1 " style="width: 100%;"/>`;

  let cardDetails = `
    <hr>
    <h5>بازیگران:
        <p class="d-inline-block small-size">${sotiObj.actors}</p>
    </h5>
    <h5>تدوین :
        <p class="d-inline-block mt-2 small-size">${sotiObj.editor}</p>
    </h5>
    <h5>نویسنده:
        <p class="d-inline-block mt-2 small-size">${sotiObj.writer}</p>
    </h5>
    <h5>کارگردان:
        <p class="d-inline-block mt-2 mb-0 small-size">${sotiObj.director}</p>
    </h5>`;

  soundContainer.insertAdjacentHTML("beforeend", cardImg);
  infoContainer.insertAdjacentHTML("beforeend", cardDetails);

  downloadSoundBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let clipUrl = `https://server.khakrizedarya.ir${sotiObj.audio}`;
    fetch(clipUrl)
      .then((res) => res.blob())
      .then((blob) => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = sotiObj.audio;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      });
  });

  downloadSoundBtn.addEventListener("contextmenu" , (e) => {
      e.preventDefault()
  })

  fetch(`https://server.khakrizedarya.ir${sotiObj.audio}`)
    .then((res) => res.blob())
    .then((blob) => {
      music.src = URL.createObjectURL(blob);
    })
    .catch((error) => {
      console.error("Error fetching audio file:", error);
    });
}

window.addEventListener("load", honariSoundApi);