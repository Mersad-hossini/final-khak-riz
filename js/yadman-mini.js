let locationSearch = new URLSearchParams(location.search);
let getLocation = locationSearch.get("id");

let containerInfo = document.querySelector(".container-info");
let yadmanConainerCard = document.querySelector(".yadman-info");

async function yadmanApi() {
  let res = "";
  let yadmanDatas = "";
  try {
    res = await fetch(
      "https://server.khakrizedarya.ir/martyr/YademanPathAPI"
    );
    if (res.ok) {
      yadmanDatas = await res.json();
      showInfo(yadmanDatas["martyrApi"]);
    }
  } catch (err) {
    console.error("Error...");
  }
}

async function yadmanSubsetApi() {
  let res = "";
  let subsetDatas = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/martyr/YademanPathAPI");
    if (res.ok) {
      subsetDatas = await res.json();
      showInfo(subsetDatas["martyrApi"]);
    }
  } catch (err) {
    console.error("Error...");
  }
}

function showInfo(yadmanData) {
  let mainYadman = yadmanData.find((yadman) => {
    return yadman.id === Number(getLocation);
  });

  if (!mainYadman) {
    window.location.href = "page404.html";
  } else {
    generateSection(mainYadman);
    generateYadmanCard(mainYadman);
  }
}

function generateSection(mainYadman) {
  let name = mainYadman.name || "—";
  let image = mainYadman.image || "./image/placeholder.png";
  let funeral_date = mainYadman.funeral_date || "—";
  let address = mainYadman.address || "—";
  let data = mainYadman.construction_date || "—";

  containerInfo.insertAdjacentHTML(
    "beforeend",
    `<div class="card p-0 p-md-5">
      <img src="https://server.khakrizedarya.ir${image}" class="card-img-top img-resize img-fluid"
        alt="...">
      <div class="card-body">
        <h4>نام یادمان:
          <p class="d-inline-block" style="font-size:18px">${name}</p>
        </h4>
        <h4>نشانی یادمان: 
          <p class="d-inline-block" style="font-size:18px">${address}</p>
        </h4>
        <h4>تاریخ تشییع جنازه: 
          <p class="d-inline-block" style="font-size:18px">${funeral_date}</p>
        </h4>
        <h4>تاریخ احداث یادمان:
          <p class="d-inline-block" style="font-size:18px">${data}</p>
        </h4>

      </div>
    </div>`
  );
}

function generateYadmanCard(mainYadman) {
  let subsetInfo = mainYadman.ShohadaLists

  subsetInfo.forEach((yadmanInfo) => {
    let image = yadmanInfo.image || "./image/placeholder.png";
    let place = yadmanInfo.place_of_martyrdom || "—";
    let age = yadmanInfo.age || "—";
    let operation = yadmanInfo.operation || "—";

    yadmanConainerCard.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 col-lg-4">
        <div class="card subset-card">
          <img src="https://server.khakrizedarya.ir/media/${image}" class="card-img-top img-fluid subset-img" alt="...">
          <div class="card-body">
            <h5 class="card-text">سن: ${age}</h5>
            <h5 class="card-text">محل شهادت: ${place}</h5>
            <h5 class="card-text">عملیات: ${operation}</h5>
          </div>
        </div>
      </div>`
    );
  });
}

window.addEventListener("load", yadmanApi);