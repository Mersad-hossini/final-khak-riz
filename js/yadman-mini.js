let locationSearch = new URLSearchParams(location.search);
let getLocation = locationSearch.get("name");

let containerInfo = document.querySelector(".container-info");
let yadmanConainerCard = document.querySelector(".yadman-info");

async function yadmanApi() {
  let res = "";
  let yadmanDatas = "";
  try {
    res = await fetch("data/yadman.json");
    if (res.ok) {
      yadmanDatas = await res.json();
      showInfo(yadmanDatas);
    }
  } catch (err) {
    console.log(err);
  }
}

function showInfo(yadmanData) {
  let mainYadman = yadmanData.find((yadman) => {
    return yadman.name === getLocation;
  });

  if (!mainYadman) {
    window.location.href = "index.html";
  } else {
    generateSectin(mainYadman, yadmanData);
    generateYadmanCard(mainYadman);
  }
}

function generateSectin(mainYadman, yadmanData) {
  if (getLocation > yadmanData.length) {
    location.href = "./index.html";
  } else {
    containerInfo.insertAdjacentHTML(
      "beforeend",
      `<div class="card p-0 p-md-5">
      <img height="400px" src="./image/9414lgmuq.jpg" class="card-img-top img-fluid"
        alt="...">
      <div class="card-body">
        <h3 class="card-title">نام یادمان: ${mainYadman.name}</h3>
        <p class="card-text"><h3 class="d-inline-block card-title">توضیحات:</h3> ${mainYadman.des}/p>
        <h5 class="card-text">نشانی یادمان: ${mainYadman.yadmanAdress}</h5>
        <h5 class="card-text">تاریخ احداث یادمان: ${mainYadman.yadmanData}</h5>
      </div>
    </div>`
    );
  }
}

function generateYadmanCard(mainYadman) {
  let yadman = mainYadman["subsetYadman"];
  yadman.forEach((yadmanInfo) => {
    yadmanConainerCard.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 col-lg-4">
        <div class="card" style="background-color: rgb(255, 241, 221);">
          <img src="${yadmanInfo.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-text">نام: ${yadmanInfo.yadmanName}</h5>
            <h5 class="card-text">تاریخ: ${yadmanInfo.data}</h5>
            <h5 class="card-text">محل شهادت: ${yadmanInfo.adress}</h5>
          </div>
        </div>
      </div>`
    );
  });
}

window.addEventListener("load", yadmanApi);