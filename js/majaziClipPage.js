let videoContainer = document.querySelector(".video-container");
let downloadBtn = document.querySelector(".download");
let infoContainer = document.querySelector(".info-container");
let clipDescription = document.querySelector(".clip-description");

function clipApi() {
  let clipArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "کلیپ 1",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "کلیپ 2",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "کلیپ 3",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "کلیپ 4",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "کلیپ 5",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "کلیپ 6",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "کلیپ 7",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "کلیپ 8",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "کلیپ 9",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "کلیپ 10",
      clip: "./media/Rec 0001.mp4",
      editing: "من تدوین گر هستم",
    },
  ];
  searchArrayByTitle(clipArray, "title");
}

function motionApi() {
  let motionArray = [
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
  searchArrayByTitle(motionArray, "title");
}

function searchArrayByTitle(array, key) {
  console.log(key);
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get(key);

  if (getLocation) {
    let item = array.find((array) => array.title === getLocation);
    if (item) {
      cardGenerator(item);
    }
  }
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

motionApi();
clipApi();