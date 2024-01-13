let sotiContainer = document.querySelector(".soti-container");
let textBookContainer = document.querySelector(".text-bookContainer");

async function adabiatSotiApi() {
  let res = "";
  let adabiatSotiArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/literature-history/LHBookAudioApi/?format=json");
    if (res.ok) {
      adabiatSotiArray = await res.json();
      sotiSeparator(adabiatSotiArray["AudioBookAPI"]);
    }
  } catch (err) {
    console.error("Error...");
  }
}

async function adabiatTextApi() {
  let res = "";
  let adabiatTextArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/literature-history/LHBookApi/?format=json");
    if (res.ok) {
      adabiatTextArray = await res.json();
      cardTextSeparator(adabiatTextArray["bookApi"]);
    }
  } catch (err) {
    console.error("Error...");
  }
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
          <a href="./openBookSoti.html?id=${soti.id}">
            <img src="https://server.khakrizedarya.ir${soti.image}" class="card-img-top img-fluid" alt="...">
          </a>
          <div class="card-body">
            <h4 class="text-start">${soti.title}</h4>
            <p class="card-text text-start">${soti.description.substring(0,30)}...</p>
            <div class="botn">
              <a href="./openBookSoti.html?id=${soti.id}" class="btn btn-sm btn-success border-0 float-end btnBxBook">مشاهده</a>
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
          <a href="./openBook.html?id=${txt.id}">
            <img src="https://server.khakrizedarya.ir${txt.image}" class="card-img-top img-fluid" alt="...">
          </a>
          <div class="card-body">
            <h5 class="text-start card-title">${txt.title}</h5>
            <p class="card-text text-start">${txt.description.substring(0,20)}...</p>
            <div class="botn">
              <a href="./openBook.html?id=${txt.id}" class="btn btn-sm btn-success border-0 float-end btnBxBook">مشاهده</a>
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