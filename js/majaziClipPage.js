let videoContainer = document.querySelector(".video-container");
let downloadBtn = document.querySelector(".download");
let infoContainer = document.querySelector(".info-container");

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
  let editing = clipObj.editing || "—";

  let cardVideo = `
        <h4>${title}</h4>
        <hr/>
        <video preload="auto" poster="https://server.khakrizedarya.ir${img}" class="img-fluid video-size" controls>
            <source src="https://server.khakrizedarya.ir${clip}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        `;

  let cardInfo = `
        <hr>
        <h5>تدوین و تنظیم:
            <p class="d-inline-block m-0 mt-2">${editing}</p>
        `;

  downloadBtn.setAttribute("href", `https://server.khakrizedarya.ir${clip}`);
  videoContainer.insertAdjacentHTML("beforeend", cardVideo);
  infoContainer.insertAdjacentHTML("beforeend", cardInfo);
}

window.addEventListener("load", determineApiAndCall);