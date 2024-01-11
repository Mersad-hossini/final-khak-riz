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
  window.location.href = "page404.html";
}

async function clipApi() {
  let res = "";
  let majaziClipArray = "";
  try {
    res = await fetch(
      "https://server.khakrizedarya.ir/cyberspace/VideoClipApi/?format=json"
    );
    if (res.ok) {
      majaziClipArray = await res.json();
    }
  } catch (err) {
    console.error("Error...");
  }
  return majaziClipArray["VideoClipApi"];
}

async function motionApi() {
  let res = "";
  let majaziMotinArray = "";
  try {
    res = await fetch(
      "https://server.khakrizedarya.ir/cyberspace/MotionGraphiApi/?format=json"
    );
    if (res.ok) {
      majaziMotinArray = await res.json();
    }
  } catch (err) {
    console.error("Error...");
  }
  return majaziMotinArray["MotionGraphiApi"];
}

function cardGenerator(clipObj) {
  // Check if individual properties are undefined and provide default values
  let title = clipObj.title || "—";
  let img = clipObj.thumbnail || "./image/placeholder.png";
  let clip = clipObj.clip || "./image/placeholder.png";
  let editing = clipObj.editing || "—";
  let director = clipObj.director || "—";
  let designer = clipObj.designer || "—";

  fetch(`https://server.khakrizedarya.ir${clip}`)
    .then((res) => res.blob())
    .then((blob) => {
      videoContainer.innerHTML = ""
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
        <h5>تدوین و تنظیم:
            <p class="d-inline-block m-0 mt-2 small-size">${editing}</p>
        <h5>کارگردان:
            <p class="d-inline-block m-0 mt-2 small-size">${director}</p>
        <h5>طراح:
            <p class="d-inline-block m-0 mt-2 small-size">${designer}</p>
        `;

  infoContainer.insertAdjacentHTML("beforeend", cardInfo);

  downloadBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let clipUrl = `https://server.khakrizedarya.ir${clip}`;

    fetch(clipUrl)
      .then((res) => res.blob())
      .then((blob) => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = clip;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      });
  });
}

window.addEventListener("load", determineApiAndCall);