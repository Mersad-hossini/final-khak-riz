let yadmanRow = document.querySelector(".yadman-data");

let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

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
  setUpPagination(yadmanArray, paginationContainer, rowsCount);
  displayYadman(yadmanArray, yadmanRow, rowsCount, currentPage);
}

function cardGenerator(yadmanData) {
  let card = `
      <div class="col-12 col-sm-9 col-md-6 col-lg-4 my-3 mx-auto">
        <div class="card card-box-imgs h-100 text-center">
          <a href="./yadman-mini.html?name=${yadmanData.name}">
            <img
              src="${yadmanData.img}"
              class="card-img-top podcast-img card-box-imgs open-modal"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="fw-bold card-title">${yadmanData.name}</h5>
            <p class="mt-2 card-text">${yadmanData.des.substring(1, 30)}</p>
            <a
              href="./yadman-mini.html?name=${yadmanData.name}"
              class="btn btn-success float-end w-100"
            >مشاهده</a>
          </div>
        </div>
      </div>
    `;
  yadmanRow.insertAdjacentHTML("beforeend", card);
}

function displayYadman(yadmanArray, yadmanRow, rowsCount, currentPage) {
  yadmanRow.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = yadmanArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(yadmanArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(yadmanArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, yadmanArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, yadman) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayYadman(yadman, yadmanRow, rowsCount, currentPage);
    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

yadmanApi();