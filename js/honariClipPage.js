let videoContainer = document.querySelector(".video-container");
let descriptionContainer = document.querySelector(".description-container");
let infoContainer = document.querySelector(".info-container");
let downloadBtn = document.querySelector(".download");

async function determineApiAndCall() {
  let locationSearch = new URLSearchParams(location.search);
  let key = "title"; // Adjust the key based on your needs
  let getlocation = locationSearch.get(key);

  let apiConditions = [
    {
      api: filmApi,
      condition: (data) => data.some((item) => item[key] === getlocation),
    },
    {
      api: motionApi,
      condition: (data) => data.some((item) => item[key] === getlocation),
    },
    {
      api: videoMusicApi,
      condition: (data) => data.some((item) => item[key] === getlocation),
    },
    // Add more conditions as needed
  ];
  
  for (let condition of apiConditions) {
    let apiData = await condition.api();

    if (apiData && condition.condition(apiData)) {
      let matchingItem = apiData.find((item) => item[key] === getlocation);

      if (matchingItem) {
        // Call cardGenerator with the matching item
        cardGenerator(matchingItem);
        return; // Stop the loop once a matching API is found
      }
    }
  }
  window.location.href = "index.html"
}

async function filmApi() {
  let res = "";
  let honariFilmArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cinamtic-art/MovieApi/?format=json");
    if (res.ok) {
      honariFilmArray = await res.json();
    }
  } catch (err) {
    console.log(err);
  }
  return honariFilmArray["MovieApi"]
}

async function motionApi() {
  let res = "";
  let honariMotionArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cinamtic-art/MotionGraphicApi/?format=json");
    if (res.ok) {
      honariMotionArray = await res.json();
    }
  } catch (err) {
    console.log(err);
  }  
  return honariMotionArray["MotionGraphicApi"]
}

async function videoMusicApi() {
  let res = "";
  let videoMusicArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cinamtic-art/VideoMusicApi/?format=json");
    if (res.ok) {
      videoMusicArray = await res.json();
    }
  } catch (err) {
    console.log(err);
  }    
  return videoMusicArray["VideoMusicApi"]
}

function cardGenerator(clipObj) {
  // Check if individual properties are undefined and provide default values
  let title = clipObj.title || "-";
  let img = clipObj.img || "./default-image.jpg";
  let clip = clipObj.clip || "./default-video.mp4";
  let designer = clipObj.designer || "—";
  let editing = clipObj.editing || "—";
  let director = clipObj.director || "—";
  let singer = clipObj.singer || "—";
  let poet = clipObj.poet || "—";
  let composer = clipObj.composer || "—";
  let writer = clipObj.writer || "—";
  let actors = clipObj.actors || "—";

  let cardVideo = `
        <h4>${title}</h4>
        <hr>
        <div class="card-body p-0 m-0">
        <video poster="https://server.khakrizedarya.ir${img}" class="img-fluid" controls>
            <source src="https://server.khakrizedarya.ir${clip}">
        </video>
        </div>`;

  let cardInfo = `
        <hr>
        <h5>خواننده:
            <p class="d-inline-block mt-2 small-size">${singer}</p>
        <h5>تدوین:
            <p class="d-inline-block mt-2 small-size">${editing}</p>
        <h5>شاعر:
            <p class="d-inline-block mt-2 small-size">${poet}</p>
        <h5>کارگردان:
            <p class="d-inline-block mt-2 small-size">${director}</p>
        <h5>بازیگران:
            <p class="d-inline-block mt-2 small-size">${actors}</p>
        <h5>نویسنده:
            <p class="d-inline-block mt-2 small-size">${writer}</p>
        <h5>طراح:
            <p class="d-inline-block mt-2 small-size">${designer}</p>
        <h5>اهنگ ساز:
            <p class="d-inline-block mt-2 small-size">${composer}</p>`;

  let descriptionCard = `
        <hr class="mt-4 ">
        <h3>معرفی ${title}</h3>
        <p>${director}</p>`;

  videoContainer.insertAdjacentHTML("beforeend", cardVideo);
  infoContainer.insertAdjacentHTML("beforeend", cardInfo);
  descriptionContainer.insertAdjacentHTML("beforeend", descriptionCard);
  downloadBtn.setAttribute("href", `https://server.khakrizedarya.ir${clip}`);
}

window.addEventListener("load" , determineApiAndCall)