let videoContainer = document.querySelector(".video-container");
let downloadBtn = document.querySelector(".download");
let infoContainer = document.querySelector(".info-container");
let clipDescription = document.querySelector(".clip-description");

async function determineApiAndCall() {
  let locationSearch = new URLSearchParams(location.search);
  let key = "title"; // Adjust the key based on your needs
  let getlocation = locationSearch.get(key);

  let apiConditions = [
    {
      api: clipApi,
      condition: (data) => data.some((item) => item[key] === getlocation),
    },
    {
      api: motionApi,
      condition: (data) => data.some((item) => item[key] === getlocation),
    },
  ];

  for (let condition of apiConditions) {
    let apiData = await condition.api();

    if (apiData && condition.condition(apiData)) {
      let matchingItem = apiData.find((item) => item[key] === getlocation);

      if (matchingItem) {
        cardGenerator(matchingItem);
        return;
      }
    }
  }
  window.location.href = "index.html";
}

async function clipApi() {
  let res = "";
  let majaziClipArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cyberspace/VideoClipApi/?format=json");
    if (res.ok) {
      majaziClipArray = await res.json();
    }
  } catch (err) {
    console.log(err);
  }
  return majaziClipArray["VideoClipApi"];
}

async function motionApi() {
  let res = "";
  let majaziMotinArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cyberspace/MotionGraphiApi/?format=json");
    if (res.ok) {
      majaziMotinArray = await res.json();
    }
  } catch (err) {
    console.log(err);
  }
  return majaziMotinArray["MotionGraphiApi"]
}

function cardGenerator(clipObj) {
  // Check if individual properties are undefined and provide default values
  let title = clipObj.title || "—";
  let img = clipObj.thumbnail || "./image/placeholder.png";
  let clip = clipObj.clip || "./image/placeholder.png";
  let designer = clipObj.designer || "—";
  let editing = clipObj.editing || "—";
  let director = clipObj.director || "—";

  let cardVideo = `
        <h4>${title}</h4>
        <hr>
        <div class="card-body p-0 m-0">
            <video poster="https://server.khakrizedarya.ir${img}" class="img-fluid video-size" controls>
                <source src="https://server.khakrizedarya.ir${clip}">
            </video>
        </div>
        `;

  let cardInfo = `
        <hr>
        <h5>طراح:
            <p class="d-inline-block mt-2">${designer}</p>
        <h5>تدوین:
            <p class="d-inline-block mt-2">${editing}</p>
        <h5>کارگردان:
            <p class="d-inline-block mt-2">${director}</p>
        `;

  let descriptionCard = `
        <hr class="mt-4">
        <h3>${title}</h3>
        <p></p>
        `;

  downloadBtn.setAttribute("href", `https://server.khakrizedarya.ir${clip}`);
  videoContainer.insertAdjacentHTML("beforeend", cardVideo);
  infoContainer.insertAdjacentHTML("beforeend", cardInfo);
  clipDescription.insertAdjacentHTML("beforeend", descriptionCard);
}

window.addEventListener("load", determineApiAndCall);