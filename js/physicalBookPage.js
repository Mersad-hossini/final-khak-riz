let imageContainer = document.querySelector(".image-container");
let detailsContainer = document.querySelector(".details-container");
let bookDescription = document.querySelector(".book-description");
let bookAddressBtn = document.querySelector(".book-address");

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
  getUrl(physicalBooks);
}

function getUrl(BookArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("title");

  let mainBook = BookArray.find((book) => {
    return book.title === getLocation;
  });

  if (!mainBook) {
    window.location.href = "index.html";
  } else {
    cardGenerator(mainBook);
  }
}

function cardGenerator(bookObj) {
    let cardImg = `
        <h3 class="text-center">معرفی ${bookObj.title}</h4>
        <hr />
        <div class="bgImgBook p-4">
        <img src="${bookObj.img}" class="img-fluid d-block float-start rounded-1"/>
    `;

    let cardDetails = `
      <hr>
      <h5>نویسنده:
        <p class="d-inline-block">${bookObj.writer}</p>
      </h5>
      <h5>ناشر:
        <p class="d-inline-block mt-2">${bookObj.publisher}</p>
      </h5>
      <h5>تاریخ نشر:
        <p class="d-inline-block mt-2">${bookObj.dataPublish}</p>
      </h5>
      <h5>محل نشر:
        <p class="d-inline-block mt-2">${bookObj.PublishAddress}</p>
      </h5>
    `;

    let cardDescription = `
      <hr class="mt-2 ">
      <h3> معرفی و توضیحات ${bookObj.title}</h3>
      <p>${bookObj.des}</p>
    `;

  imageContainer.insertAdjacentHTML("beforeend", cardImg);
  detailsContainer.insertAdjacentHTML("beforeend", cardDetails);
  bookDescription.insertAdjacentHTML("beforeend", cardDescription);
}

bookAddressBtn.addEventListener("click" , () => {
    window.scrollTo(0, document.body.scrollHeight);
})
window.addEventListener("load", physicalBookApi);