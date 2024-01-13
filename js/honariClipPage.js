let videoContainer = document.querySelector(".video-container");
let infoContainer = document.querySelector(".info-container");
let downloadBtn = document.querySelector(".download");

async function determineApiAndCall() {
  let locationSearch = new URLSearchParams(location.search);
  let key = "id"; // Adjust the key based on your needs
  let getlocation = locationSearch.get(key);

  let apiConditions = [
    {
      api: filmApi,
      condition: (data) => data.some((item) => item[key] === Number(getlocation)),
    },
    {
      api: motionApi,
      condition: (data) => data.some((item) => item[key] === Number(getlocation)),
    },
    {
      api: videoMusicApi,
      condition: (data) => data.some((item) => item[key] === Number(getlocation)),
    },
    // Add more conditions as needed
  ];

  for (let condition of apiConditions) {
    let apiData = await condition.api();

    if (apiData && condition.condition(apiData)) {
      let matchingItem = apiData.find((item) => item[key] === Number(getlocation));

      if (matchingItem) {
        // Call cardGenerator with the matching item
        cardGenerator(matchingItem);
        return; // Stop the loop once a matching API is found
      }
    }
  }
  window.location.href = "./page404.html";
}

async function filmApi() {
  let res = "";
  let honariFilmArray = "";
  try {
    res = await fetch(
      "https://server.khakrizedarya.ir/cinamtic-art/MovieApi/?format=json"
    );
    if (res.ok) {
      honariFilmArray = await res.json();
    }
  } catch (err) {
    console.error("Error...");
  }
  return honariFilmArray["MovieApi"];
}

async function motionApi() {
  let res = "";
  let honariMotionArray = "";
  try {
    res = await fetch(
      "https://server.khakrizedarya.ir/cinamtic-art/MotionGraphicApi/?format=json"
    );
    if (res.ok) {
      honariMotionArray = await res.json();
    }
  } catch (err) {
    console.error("Error...");
  }
  return honariMotionArray["MotionGraphicApi"];
}

async function videoMusicApi() {
  let res = "";
  let videoMusicArray = "";
  try {
    res = await fetch(
      "https://server.khakrizedarya.ir/cinamtic-art/VideoMusicApi/?format=json"
    );
    if (res.ok) {
      videoMusicArray = await res.json();
    }
  } catch (err) {
    console.error("Error...");
  }
  return videoMusicArray["VideoMusicApi"];
}

function cardGenerator(clipObj) {
  // Check if individual properties are undefined and provide default values
  let title = clipObj.title || "-";
  let img = clipObj.image || "./default-image.jpg";
  let clip = clipObj.clip || "./default-video.mp4";
  let designer = clipObj.designer || "—";
  let editing = clipObj.editing || "—";
  let director = clipObj.director || "—";
  let singer = clipObj.singer || "—";
  let poet = clipObj.poet || "—";
  let composer = clipObj.composer || "—";
  let writer = clipObj.writer || "—";
  let actors = clipObj.actors || "—";

  fetch(`https://server.khakrizedarya.ir${clip}`)
    .then((res) => res.blob())
    .then((blob) => {
      videoContainer.innerHTML = "";
      let h4Elem = document.createElement("h4");
      h4Elem.innerHTML = title;
      let hrElem = document.createElement("hr");
      let videoElem = document.createElement("video");
      videoElem.controls = true;
      videoElem.setAttribute("poster", `https://server.khakrizedarya.ir${img}`);
      videoElem.className = "img-fluid video-size";

      let sourceElem = document.createElement("source");
      sourceElem.src = URL.createObjectURL(blob);

      videoElem.append(sourceElem);
      videoContainer.append(h4Elem, hrElem, videoElem);
    });

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
            <p class="d-inline-block mt-2 mb-0 small-size">${composer}</p>`;


  downloadBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let clipUrl = `https://server.khakrizedarya.ir${clip}`;

    fetch(clipUrl)
      .then((res) => res.blob())
      .then((blob) => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = clip;
        link.setAttribute("download" , clip)

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      });
  });

  infoContainer.insertAdjacentHTML("beforeend", cardInfo);
}

window.addEventListener("load", determineApiAndCall);
