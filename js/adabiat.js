let sotiContainer = document.querySelector(".soti-container");
let textBookContainer = document.querySelector(".text-bookContainer");

async function adabiatSotiApi() {
  let res = "";
  let adabiatSotiArray = "";
  try {
    res = await fetch("data/adabiatSoti.json");
    if (res.ok) {
      adabiatSotiArray = await res.json();
      console.log(adabiatSotiArray);
      sotiSeparator(adabiatSotiArray);
    }
  } catch (err) {
    console.log(err);
  }
}

async function adabiatTextApi() {
  let res = "";
  let adabiatTextArray = "";
  try {
    res = await fetch("data/adabiatText.json");
    if (res.ok) {
      adabiatTextArray = await res.json();
      console.log(adabiatTextArray);
      cardTextSeparator(adabiatTextArray);
    }
  } catch (err) {
    console.log(err);
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
              <a href="./openBook.html?title=${txt.title}" class="btn btn-sm btn-success border-0 float-end btnBxBook">مشاهده</a>
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