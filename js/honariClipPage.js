let videoContainer = document.querySelector(".video-container");
let descriptionContainer = document.querySelector(".description-container");
let infoContainer = document.querySelector(".info-container");
let downloadBtn = document.querySelector(".download");

function determineApiAndCall() {
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
    let apiData = condition.api();

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

function filmApi() {
  return [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "فیلم 1",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "فیلم 2",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "فیلم 3",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "فیلم 4",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "فیلم 5",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "فیلم 6",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "فیلم 7",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "فیلم 8",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "فیلم 9",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "فیلم 10",
      clip: "./media/Rec 0001.mp4",
      writer: "من نویسنده هستم",
      director: "من کارگردان هستم",
      actors: "بازیگران",
    },
  ];
}

function motionApi() {
  return [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "موشن 1",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "موشن 2",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "موشن 3",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "موشن 4",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "موشن 5",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "موشن 6",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "موشن 7",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "موشن 8",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "موشن 9",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "موشن 10",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
      designer: "من طراح هستم",
      director: "من کارگردان هستم",
    },
  ];
}

function videoMusicApi() {
  return [
    {
      id: 1,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 1",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 2",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 3",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 4",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 5",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 6",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 7",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 8",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 9",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      clip: "./media/Rec 0001.mp4",
      title: "ویدئو موزیک 10",
      singer: "خواننده هستم",
      director: "کارگردان هستم",
      poet: "شاعر هستم",
      composer: "اهنگساز هستم",
    },
  ];
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
        <video poster="${img}" class="img-fluid" controls>
            <source src="${clip}">
        </video>
        </div>`;

  let cardInfo = `
        <hr>
        <h5>خواننده:
            <p class="d-inline-block mt-2">${singer}</p>
        <h5>تدوین:
            <p class="d-inline-block mt-2">${editing}</p>
        <h5>شاعر:
            <p class="d-inline-block mt-2">${poet}</p>
        <h5>کارگردان:
            <p class="d-inline-block mt-2">${director}</p>
        <h5>بازیگران:
            <p class="d-inline-block mt-2">${actors}</p>
        <h5>نویسنده:
            <p class="d-inline-block mt-2">${writer}</p>
        <h5>طراح:
            <p class="d-inline-block mt-2">${designer}</p>
        <h5>اهنگ ساز:
            <p class="d-inline-block mt-2">${composer}</p>`;

  let descriptionCard = `
        <hr class="mt-4 ">
        <h3>معرفی ${title}</h3>
        <p>${director}</p>`;

  videoContainer.insertAdjacentHTML("beforeend", cardVideo);
  infoContainer.insertAdjacentHTML("beforeend", cardInfo);
  descriptionContainer.insertAdjacentHTML("beforeend", descriptionCard);
  downloadBtn.setAttribute("href", clip);
}

window.addEventListener("load" , determineApiAndCall)