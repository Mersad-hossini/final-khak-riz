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
    res = await fetch("data/majaziClip.json");
    if (res.ok) {
      majaziClipArray = await res.json();
    }
  } catch (err) {
    console.log(err);
  }
  return majaziClipArray;
}

async function motionApi() {
  let res = "";
  let majaziMotinArray = "";
  try {
    res = await fetch("data/majaziMotion.json");
    if (res.ok) {
      majaziMotinArray = await res.json();
    }
  } catch (err) {
    console.log(err);
  }
  return majaziMotinArray
}

function cardGenerator(clipObj) {
  // Check if individual properties are undefined and provide default values
  let title = clipObj.title || "-";
  let img = clipObj.img || "./default-image.jpg";
  let clip = clipObj.clip || "./default-video.mp4";
  let designer = clipObj.designer || "—";
  let editing = clipObj.editing || "—";
  let director = clipObj.director || "—";

  let cardVideo = `
        <h4> معرفی ${title}</h4>
        <hr>
        <div class="card-body p-0 m-0">
            <video poster="${img}" class="img-fluid" controls>
                <source src="${clip}">
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

  downloadBtn.setAttribute("href", clip);
  videoContainer.insertAdjacentHTML("beforeend", cardVideo);
  infoContainer.insertAdjacentHTML("beforeend", cardInfo);
  clipDescription.insertAdjacentHTML("beforeend", descriptionCard);
}

window.addEventListener("load", determineApiAndCall);