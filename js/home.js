let owlContainer = document.querySelector(".owl-container");
let carouselSliderHeader = document.getElementById("carousel-slider")

async function headerSliderApi() {
    try {
        let res = await fetch("https://server.khakrizedarya.ir/home-object/sliderSiteApi/?format=json")
        let sliderArray = ""
        if(res.ok) {
            sliderArray = await res.json()
            sliderGenerator(sliderArray["SliderSiteAPI"])
        } else {
          throw Error
        }
    } catch(err) {
      console.log(err);
    }
}

function sliderGenerator(sliderImage) {
    let card = ""
    carouselSliderHeader.innerHTML = ""
    sliderImage.forEach(slider => {
        card += `
        <div class="carousel-item carousel-item-slider active" data-bs-interval="3000">
          <img src = https://server.khakrizedarya.ir${slider.image} id="image-slider1" class="d-block img-fluid" alt="..." />
        </div>
        `
    });
    carouselSliderHeader.insertAdjacentHTML("beforeend" , card)
}

window.addEventListener("load" , headerSliderApi)

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
// $(".owl-one").owlCarousel({
//   rtl: true,
//   loop: true,
//   margin: 10,
//   nav: false,
//   autoplay: false,
//   // autoplayTimeout: 3000,
//   stagePadding: 50,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     768: {
//       items: 2,
//     },
//     992: {
//       items: 3,
//     },
//   },
// });

$(document).ready(function () {
    let apiUrl = "https://server.khakrizedarya.ir/literature-history/LHBookApi/?format=json"

    $.get(apiUrl, function (data) {
      data["bookApi"].forEach(function (item) {
        $('#owl-carousel').append(`<div class="item"><img src="https://server.khakrizedarya.ir${item.image}" alt="${item.title}"></div>`);
      });
  
      // Initialize the owl carousel
      $('.owl-one').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        stagePadding: 50,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 5,
            nav: true,
            loop: false
          }
        }
      });
    });
})

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
