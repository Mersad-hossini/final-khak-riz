function yadmanApi() {
  let yadmanArray = [
    {
      id: 1,
      city: "بوشهر",
      img: "./image/9414lgmuq.jpg",
      name: "1نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 20,
      yadmanAdress: "بوشهر",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموعه1)",
          data: 20,
          adress: "بوشهر",
        },
      ],
    },
    {
      id: 2,
      city: "گناوه",
      img: "./image/9414lgmuq.jpg",
      name: "2نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 22,
      yadmanAdress: "گناوه",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع2)",
          data: 20,
          adress: "گناوه",
        },
      ],
    },
    {
      id: 3,
      city: "دشتستان",
      img: "./image/9414lgmuq.jpg",
      name: "3نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 23,
      yadmanAdress: "دشتستان",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع3)",
          data: 20,
          adress: "دشتستان",
        },
      ],
    },
    {
      id: 4,
      city: "دیلم",
      img: "./image/9414lgmuq.jpg",
      name: "4نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 24,
      yadmanAdress: "دیلم",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع4)",
          data: 20,
          adress: "دیلم",
        },
      ],
    },
    {
      id: 5,
      city: "تنگستان",
      img: "./image/9414lgmuq.jpg",
      name: "5نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 25,
      yadmanAdress: "تنگستان",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع5)",
          data: 20,
          adress: "تنگستان",
        },
      ],
    },
    {
      id: 6,
      city: "دشتی",
      img: "./image/9414lgmuq.jpg",
      name: "6نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 26,
      yadmanAdress: "دشتی",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع6)",
          data: 20,
          adress: "دشتی",
        },
      ],
    },
    {
      id: 7,
      city: "دیر",
      img: "./image/9414lgmuq.jpg",
      name: "7نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 27,
      yadmanAdress: "دیر",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع7)",
          data: 20,
          adress: "دیر",
        },
      ],
    },
    {
      id: 8,
      city: "جم",
      img: "./image/9414lgmuq.jpg",
      name: "8نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 28,
      yadmanAdress: "جم",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع8)",
          data: 20,
          adress: "جم",
        },
      ],
    },
    {
      id: 9,
      city: "کنگان",
      img: "./image/9414lgmuq.jpg",
      name: "9نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 29,
      yadmanAdress: "کنگان",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع9)",
          data: 20,
          adress: "کنگان",
        },
      ],
    },
    {
      id: 10,
      city: "عسلویه",
      img: "./image/9414lgmuq.jpg",
      name: "10نام شهید",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero sed sit, minus nostrum enim, vitae qui.",
      yadmanData: 30,
      yadmanAdress: "عسلویه",
      subsetYadman: [
        {
          img: "./image/9414lgmuq.jpg",
          yadmanName: "نام شهید (زیر مجموع10)",
          data: 20,
          adress: "عسلویه",
        },
      ],
    },
  ];
  showInfo(yadmanArray);
}

let locationSearch = new URLSearchParams(location.search);
let getLocation = locationSearch.get("name");

let containerInfo = document.querySelector(".container-info");
let yadmanConainerCard = document.querySelector(".yadman-info");

function showInfo(yadmanData) {
  let mainYadman = yadmanData.find((yadman) => {
    return yadman.name === getLocation;
  });
  generateSectin(mainYadman, yadmanData);
  generateYadmanCard(mainYadman);
}

function generateSectin(mainYadman, yadmanData) {
  if (getLocation > yadmanData.length) {
    location.href = "./index.html";
  } else {
    containerInfo.insertAdjacentHTML(
      "beforeend",
      `<div class="card p-5">
      <img height="400px" src="./image/9414lgmuq.jpg" class="card-img-top img-fluid"
        alt="...">
      <div class="card-body">
        <h3 class="card-title">نام یادمان: ${mainYadman.name}</h3>
        <p class="card-text"><h3 class="d-inline-block card-title">توضیحات:</h3> ${mainYadman.des}/p>
        <h5 class="card-text">نشانی یادمان: ${mainYadman.yadmanAdress}</h5>
        <h5 class="card-text">تاریخ احداث یادمان: ${mainYadman.yadmanData}</h5>
      </div>
    </div>`
    );
  }
}

function generateYadmanCard(mainYadman) {
  let yadman = mainYadman["subsetYadman"];
  yadman.forEach((yadmanInfo) => {
    yadmanConainerCard.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 col-lg-4">
        <div class="card" style="background-color: rgb(255, 241, 221);">
          <img src="${yadmanInfo.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-text">نام: ${yadmanInfo.yadmanName}</h5>
            <h5 class="card-text">تاریخ: ${yadmanInfo.data}</h5>
            <h5 class="card-text">محل شهادت: ${yadmanInfo.adress}</h5>
          </div>
        </div>
      </div>`
    );
  });
}

window.addEventListener("load", yadmanApi);