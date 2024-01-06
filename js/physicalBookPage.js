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
    let title = bookObj.title || "—"
    let image = bookObj.image || "./image/placeholder.png"
    let author = bookObj.author || "—"
    let publisher = bookObj.publisher || "—"
    let publication_date = bookObj.publication_date || "—"
    let publication_place= bookObj.publication_place || "—"
    let description= bookObj.description || "—"

    let cardImg = `
        <h3 class="text-center">معرفی ${title}</h4>
        <hr />
        <div class="bgImgBook p-4">
        <img src="https://server.khakrizedarya.ir${image}" class="img-fluid d-block float-start rounded-1"/>
    `;

    let cardDetails = `
      <hr>
      <h5>نویسنده:
        <p class="d-inline-block">${author}</p>
      </h5>
      <h5>ناشر:
        <p class="d-inline-block mt-2">${publisher}</p>
      </h5>
      <h5>تاریخ نشر:
        <p class="d-inline-block mt-2">${publication_date}</p>
      </h5>
      <h5>محل نشر:
        <p class="d-inline-block mt-2">${publication_place}</p>
      </h5>
    `;

    let cardDescription = `
      <hr class="mt-2 ">
      <h3> معرفی و توضیحات ${title}</h3>
      <p>${description}</p>
    `;

  imageContainer.insertAdjacentHTML("beforeend", cardImg);
  detailsContainer.insertAdjacentHTML("beforeend", cardDetails);
  bookDescription.insertAdjacentHTML("beforeend", cardDescription);
}

bookAddressBtn.addEventListener("click" , () => {
    window.scrollTo(0, document.body.scrollHeight);
})
window.addEventListener("load", physicalBookApi);