let physicalBookContainer = document.querySelector(".physical-book");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

function physicalBookApi() {
  let physicalBooks = [
    {
      id: 1,
      img: "./image/book6.jfif",
      title: "کتاب 1",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "بوشهر",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 2,
      img: "./image/book6.jfif",
      title: "کتاب 2",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "سیراز",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 3,
      img: "./image/book6.jfif",
      title: "کتاب 3",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "مشهد",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 4,
      img: "./image/book6.jfif",
      title: "کتاب 4",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "خوزستان",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 5,
      img: "./image/book6.jfif",
      title: "کتاب 5",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "تهران",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 6,
      img: "./image/book6.jfif",
      title: "کتاب 6",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "کرج",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 7,
      img: "./image/book6.jfif",
      title: "کتاب 7",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "اراک",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 8,
      img: "./image/book6.jfif",
      title: "کتاب 8",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "اصفهان",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 9,
      img: "./image/book6.jfif",
      title: "کتاب 9",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "ساری",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
    {
      id: 10,
      img: "./image/book6.jfif",
      title: "کتاب 10",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      PublishAddress: "لرستان",
      dataPublish: 20,
      des: "وقتی کسی نبود دستت رو بگیره، دستت رو بکن تو جیبت و برو جلو.",
    },
  ];
  displayPhysicalBook(physicalBooks,physicalBookContainer, rowsCount,currentPage);
  setUpPagination(physicalBooks, paginationContainer, rowsCount)
}

function cardGenerator(BookArray) {
  let card = `
        <div
        class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center"
        >
        <div class="card h-100" style="width: 16rem">
            <a href="./physicalBookPage.html?title=${BookArray.title}"
            ><img
                src="${BookArray.img}"
                class="card-img-top img-fluid"
                alt="image book pdf"
            /></a>
            <div class="card-body">
            <h5 class="card-title fw-bolder">${BookArray.title}</h5>
            <p class="card-text">${BookArray.des.substring(0,30)}...</p>
            <a
                href="./physicalBookPage.html?title=${BookArray.title}"
                class="btn btn-success float-end w-100"
                >مشاهده</a
            >
            </div>
        </div>
        </div>
    `;
  physicalBookContainer.insertAdjacentHTML("beforeend", card);
}

function displayPhysicalBook(BookArray,physicalBookContainer,rowsCount,currentPage) {
  physicalBookContainer.innerHTML = "";
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = BookArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(BookArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(BookArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, BookArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, BookArray) {
  let button = document.createElement("button");
  button.innerHTML = page;
  
  if (page === currentPage) {
    button.classList.add("active");
  }
  
  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayPhysicalBook(BookArray,physicalBookContainer,rowsCount,currentPage)
  
    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");
  
    button.classList.add("active");
  });
  
  return button;
}
  
window.addEventListener("load", physicalBookApi);