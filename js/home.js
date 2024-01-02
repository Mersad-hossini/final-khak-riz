let owlContainer = document.querySelector(".owl-container");

function adabiatSotiApi() {
  let adabiatSotiArray = [
    {
      id: 1,
      img: "./image/book.jpg",
      title: "کتاب صوتی 1",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "بوشهر",
      sound: "./media/bazar.m4a",
    },
    {
      id: 2,
      img: "./image/book.jpg",
      title: "کتاب صوتی 2",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "تهران",
      sound: "./media/bazar.m4a",
    },
    {
      id: 3,
      img: "./image/book.jpg",
      title: "کتاب صوتی 3",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "شیراز",
      sound: "./media/bazar.m4a",
    },
    {
      id: 4,
      img: "./image/book.jpg",
      title: "کتاب صوتی 4",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "ساری",
      sound: "./media/bazar.m4a",
    },
    {
      id: 5,
      img: "./image/book.jpg",
      title: "کتاب صوتی 5",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "خوزستان",
      sound: "./media/bazar.m4a",
    },
    {
      id: 6,
      img: "./image/book.jpg",
      title: "کتاب صوتی 6",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "کرج",
      sound: "./media/bazar.m4a",
    },
    {
      id: 7,
      img: "./image/book.jpg",
      title: "کتاب صوتی 7",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "هرمزگان",
      sound: "./media/bazar.m4a",
    },
    {
      id: 8,
      img: "./image/book.jpg",
      title: "کتاب صوتی 8",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "اصفهان",
      sound: "./media/bazar.m4a",
    },
    {
      id: 9,
      img: "./image/book.jpg",
      title: "کتاب صوتی 9",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "مشهد",
      sound: "./media/bazar.m4a",
    },
    {
      id: 10,
      img: "./image/book.jpg",
      title: "کتاب صوتی 10",
      des: "سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران متن‌تان را روان و خوانش‌پذیر می‌کند و خواننده را تا انتها همراه‌تان نگه می‌دارد.",
      writer: "نویسنده هستم",
      publisher: "کتابخانه مرکزی",
      Translator: "مترجم هستم",
      dataPublish: 20,
      PublishAddress: "لرستان",
      sound: "./media/bazar.m4a",
    },
  ];
  sotiSeparator(adabiatSotiArray);
}
$(".owl-one").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  // autoplayTimeout: 3000,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

$(".owl-two").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  // autoplayTimeout: 3000,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

$(".owl-three").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

// function sotiSeparator(sotiArray) {
//   let newSotiArray = [];
//   let randomIndex = "";
//   let randomElement = "";

//   while (newSotiArray.length < 6) {
//     randomIndex = Math.floor(Math.random() * sotiArray.length);
//     randomElement = sotiArray[randomIndex];

//     if (!newSotiArray.includes(randomElement)) {
//       newSotiArray.push(randomElement);
//     }
//   }

//   cardSotiGenerator(newSotiArray);
// }

// function cardSotiGenerator(newSotiArray) {
//   let card = "";

//   newSotiArray.forEach((soti) => {
//     card += `
//       <div class="item">
//         <div class="card text-center shadow">
//           <img src="${soti.img}" alt="" />
//           <div class="card-body">
//             <h5 class="card-title">${soti.title}</h5>
//             <p class="card-text">${soti.des}</p>
//             <a href="index.html?title=${soti.title}" target="_blank" class="btn btn-sm btn-success border-0 w-100 slider-button">مشاهده</a>
//           </div>
//         </div>
//       </div>`;
//   });

//   owlContainer.insertAdjacentHTML("beforeend", card);
// }

// window.addEventListener("load", adabiatSotiApi);