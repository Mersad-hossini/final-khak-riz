let imageContainer = document.querySelector(".image-container");
let detailsContainer = document.querySelector(".details-container");
let bookDescription = document.querySelector(".book-description");
let bookAddressBtn = document.querySelector(".book-address");

async function physicalBookApi() {
  let res = "";
  let physicalBookArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/library/physicalbookApi/?format=json");
    if (res.ok) {
      physicalBookArray = await res.json();
      getUrl(physicalBookArray["GraphicDesignApi"])
    }
  } catch (err) {
    console.log(err);
  }
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
        <img src="${bookObj.image}" class="img-fluid d-block float-start rounded-1"/>
    `;

    let cardDetails = `
      <hr>
      <h5>نویسنده:
        <p class="d-inline-block">${bookObj.author}</p>
      </h5>
      <h5>ناشر:
        <p class="d-inline-block mt-2">${bookObj.publisher}</p>
      </h5>
      <h5>تاریخ نشر:
        <p class="d-inline-block mt-2">${bookObj.publication_date}</p>
      </h5>
      <h5>محل نشر:
        <p class="d-inline-block mt-2">${bookObj.publication_place}</p>
      </h5>
    `;

    let cardDescription = `
      <hr class="mt-2 ">
      <h3> معرفی و توضیحات ${bookObj.title}</h3>
      <p>${bookObj.description}</p>
    `;

  imageContainer.insertAdjacentHTML("beforeend", cardImg);
  detailsContainer.insertAdjacentHTML("beforeend", cardDetails);
  bookDescription.insertAdjacentHTML("beforeend", cardDescription);
}

bookAddressBtn.addEventListener("click" , () => {
    window.scrollTo(0, document.body.scrollHeight);
})
window.addEventListener("load", physicalBookApi);