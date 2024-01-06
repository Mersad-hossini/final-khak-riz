let locationSearch = new URLSearchParams(location.search);
let getLocation = locationSearch.get("name");

let containerInfo = document.querySelector(".container-info");
let yadmanConainerCard = document.querySelector(".yadman-info");

async function yadmanApi() {
  let res = "";
  let yadmanDatas = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/martyr/YademanApi/?format=json");
    if (res.ok) {
      yadmanDatas = await res.json();
      showInfo(yadmanDatas["martyrApi"]);
    }
  } catch (err) {
    console.log(err);
  }
}

async function yadmanSubsetApi() {
  let res = "";
  let subsetDatas = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/martyr/YademanShohadaApi/?format=json");
    if (res.ok) {
      subsetDatas = await res.json();
      console.log(subsetDatas["YademanShohadaAPI"]);
      // showInfo(subsetDatas["YademanShohadaAPI"]);
    }
  } catch (err) {
    console.log(err);
  }
}

yadmanSubsetApi()

function showInfo(yadmanData) {
  let mainYadman = yadmanData.find((yadman) => {
    return yadman.name === getLocation;
  });

  if (!mainYadman) {
    window.location.href = "index.html";
  } else {
    generateSection(mainYadman, yadmanData);
    // generateYadmanCard(mainYadman);
  }
}

function generateSection(mainYadman, yadmanData) {
  let name = mainYadman.name || "—"
  let image = mainYadman.image || "./image/placeholder.png"
  let yadmnaPlace = mainYadman.place_of_martyrdom || "—"
  let address = mainYadman.address || "—"
  let data = mainYadman.construction_date || "—"
  console.log(image);
  if (getLocation > yadmanData.length) {
    location.href = "./index.html";
  } else {
    containerInfo.insertAdjacentHTML(
      "beforeend",
      `<div class="card p-0 p-md-5">
      <img height="250px" src="https://server.khakrizedarya.ir${image}" class="card-img-top img-fluid"
        alt="...">
      <div class="card-body">
        <h3 class="card-title">نام یادمان: ${name}</h3>
        <p class="card-text"><h3 class="d-inline-block card-title">توضیحات:</h3> ${yadmnaPlace}</p>
        <h5 class="card-text">نشانی یادمان: ${address}</h5>
        <h5 class="card-text">تاریخ احداث یادمان: ${data}</h5>
      </div>
    </div>`
    );
  }
}

// function generateYadmanCard(mainYadman) {
//   console.log(mainYadman);
//   mainYadman.forEach((yadmanInfo) => {
//     yadmanConainerCard.insertAdjacentHTML(
//       "beforeend",
//       `<div class="col-md-6 col-lg-4">
//         <div class="card" style="background-color: rgb(255, 241, 221);">
//           <img src="${yadmanInfo.image}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-text">نام: ${yadmanInfo.place_of_martyrdom}</h5>
//             <h5 class="card-text">تاریخ: ${yadmanInfo.place_of_martyrdom}</h5>
//             <h5 class="card-text">محل شهادت: ${yadmanInfo.place_of_martyrdom}</h5>
//           </div>
//         </div>
//       </div>`
//     );
//   });
// }

window.addEventListener("load", yadmanApi);