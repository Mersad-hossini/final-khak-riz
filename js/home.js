let owlContainer = document.querySelector(".owl-container");
let carouselSliderHeader = document.getElementById("carousel-slider");

// Slider
async function headerSliderApi() {
  try {
    let res = await fetch(
      "https://server.khakrizedarya.ir/home-object/sliderSiteApi/?format=json"
    );
    let sliderArray = "";
    if (res.ok) {
      sliderArray = await res.json();
      sliderGenerator(sliderArray["SliderSiteAPI"]);
    } else {
      throw Error;
    }
  } catch (err) {
    console.log(err);
  }
}

function sliderGenerator(sliderImage) {
  let card = "";
  carouselSliderHeader.innerHTML = "";

  sliderImage.forEach((slider, index) => {
    let isActive = "";

    if (index === 0) {
      isActive = "active";
    }

    card += `
      <div class="carousel-item carousel-item-slider ${isActive}" data-bs-interval="3000">
        <img src="https://server.khakrizedarya.ir${slider.image}" class="d-block img-fluid" alt="slider" />
      </div>
    `;
  });

  carouselSliderHeader.insertAdjacentHTML("beforeend", card);
}

window.addEventListener("load", headerSliderApi);

// owl Carousel 1(Radi)
$(document).ready(function () {
  let apiUrl =
    "https://server.khakrizedarya.ir/cinamtic-art/RadioApi/?format=json";

  $.get(apiUrl, function (data) {
    // Shuffle the array of items
    const shuffledItems = shuffleArray(data["RadioApi"]);

    // Take only the first 5 items
    const selectedItems = shuffledItems.slice(0, 5);

    selectedItems.forEach(function (item) {
      $(".owl-one").append(`            
      <div class="item">
        <div class="card mb-4 text-center shadow">
          <img src="https://server.khakrizedarya.ir${item.audio_image}" alt="" />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <a href="./honariSoundPage.html?title=${item.title}" target="_blank" class="btn btn-sm btn-success border-0 w-100 slider-button">مشاهده</a>
          </div>
        </div>
      </div>`);
    });

    // Initialize the owl carousel
    $(".owl-one").owlCarousel({
      rtl: true,
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      stagePadding: 50,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        468: {
          items: 2,
          nav: false,
        },
        768: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
          loop: true,
        },
      },
    });
  });

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});

// owl Carousel 2(clip)
$(document).ready(function () {
  let apiUrl =
    "https://server.khakrizedarya.ir/cyberspace/VideoClipApi/?format=json";

  $.get(apiUrl, function (data) {
    // Shuffle the array of items
    const shuffledItems = shuffleArray(data["VideoClipApi"]);

    // Take only the first 5 items
    const selectedItems = shuffledItems.slice(0, 5);

    selectedItems.forEach(function (item) {
      $(".owl-two").append(`            
      <div class="item">
        <div class="card mb-4 text-center shadow">
          <img src="https://server.khakrizedarya.ir${item.thumbnail}" alt="" />
          <div class="card-body">
            <h5 class="card-title mb-3">${item.title}</h5>
            <a href="./majaziClipPage.html?title=${item.title}" target="_blank" class="btn btn-sm btn-success border-0 w-100 slider-button">مشاهده</a>
          </div>
        </div>
      </div>`);
    });

    // Initialize the owl carousel
    $(".owl-two").owlCarousel({
      rtl: true,
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      stagePadding: 50,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        468: {
          items: 2,
          nav: false,
        },
        768: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
          loop: true,
        },
      },
    });
  });

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});

// owl Carousel 3(gallery)
$(document).ready(function () {
  let apiUrl =
    "https://server.khakrizedarya.ir/cyberspace/GraphicDesignApi/?format=json";

  $.get(apiUrl, function (data) {
    // Shuffle the array of items
    const shuffledItems = shuffleArray(data["GraphicDesignApi"]);

    // Take only the first 5 items
    const selectedItems = shuffledItems.slice(0, 5);

    selectedItems.forEach(function (item) {
      $(".owl-three").append(`            
      <div class="item">
        <div class="card mb-4 text-center shadow">
          <img src="https://server.khakrizedarya.ir${item.image}" alt="" />
          <div class="card-body">
            <h5 class="card-title mb-3">${item.title}</h5>
            <a href="./majaziGalleryPage.html?title=${item.title}" target="_blank" class="btn btn-sm btn-success border-0 w-100 slider-button">مشاهده</a>
          </div>
        </div>
      </div>`);
    });

    // Initialize the owl carousel
    $(".owl-three").owlCarousel({
      rtl: true,
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      stagePadding: 50,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        468: {
          items: 2,
          nav: false,
        },
        768: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
          loop: true,
        },
      },
    });
  });

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});
