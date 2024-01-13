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
    res = await fetch(
      "https://server.khakrizedarya.ir/literature-history/LHBookAudioApi/?format=json"
    );
    if (res.ok) {
      adabiatSotiArray = await res.json();
      getUrl(adabiatSotiArray["AudioBookAPI"]);
    }
  } catch (err) {
    console.error("Error...");
  }
}

function getUrl(sotiArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("id");

  let mainSoti = sotiArray.find((soti) => {
    return soti.id === Number(getLocation);
  });


  if (!mainSoti) {
    window.location.href = "page404.html";
  } else {
  }
  cardGenerator(mainSoti);
}

function cardGenerator(sotiObj) {
  let title = sotiObj.title || "—";
  let image = sotiObj.image || "./image/placeholder.png";
  let author = sotiObj.author || "—";
  let editor = sotiObj.editor || "—";
  let narrator = sotiObj.narrator || "—";
  let description = sotiObj.description || "—";
  let audioLink = sotiObj.audio_file || "—";

  let cardImg = `
    <h3>${title}</h3>
    <hr>
    <img src="https://server.khakrizedarya.ir${image}" class="img-fluid d-block mt-3 float-start rounded-1 right-img"/>   
    `;

  let cardDetails = `
    <hr>
    <h5> نویسنده:
      <p class="d-inline-block small-size">${author}</p>
    </h5>
    <h5>تدوین و تنظیم:
      <p class="d-inline-block mt-2 small-size">${editor}</p>
    </h5>
    <h5>خوانش:
      <p class="d-inline-block mt-2 small-size">${narrator}</p>
    </h5>
    `;

  let cardDescription = `
    <hr class="mt-4 ">
    <h3>توضیحات:</h3>
    <p>${description}</p>
    `;

  imgContainer.insertAdjacentHTML("beforeend", cardImg);
  sotiDetails.insertAdjacentHTML("beforeend", cardDetails);
  sotiDescription.insertAdjacentHTML("beforeend", cardDescription);

  fetch(`https://server.khakrizedarya.ir${audioLink}`)
    .then((res) => res.blob())
    .then((blob) => {
      music.src = URL.createObjectURL(blob);
    })
    .catch((error) => {
      console.error("Error fetching audio file:", error);
    });

  downloadSoundBtn.setAttribute("href" , `https://server.khakrizedarya.ir${audioLink}`)
  downloadSoundBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let musicUrl = `https://server.khakrizedarya.ir${audioLink}`;

    fetch(musicUrl)
      .then((res) => res.blob())
      .then((blob) => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = audioLink;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      });
  });

}

window.addEventListener("load", adabiatSotiApi);
