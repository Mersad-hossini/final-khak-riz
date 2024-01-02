let imageContainer = document.querySelector(".image-container");
let detailsContainer = document.querySelector(".details-container");
let bookDescription = document.querySelector(".book-description");
let bookAddressBtn = document.querySelector(".book-address");

async function physicalBookApi() {
  let res = "";
  let physicalBookArray = "";
  try {
    res = await fetch("data/physicalBook.json");
    if (res.ok) {
      physicalBookArray = await res.json();
      console.log(physicalBookArray);
      getUrl(physicalBookArray)
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