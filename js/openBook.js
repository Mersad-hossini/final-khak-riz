let imageContainer = document.querySelector(".image-container");
let textBookInfo = document.querySelector(".textBook-info");
let descriptionBook = document.querySelector(".description");
let downloadPdf = document.querySelector(".download-pdf");

async function adabiatTextApi() {
  let res = "";
  let adabiatTextArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/literature-history/LHBookApi/?format=json");
    if (res.ok) {
      adabiatTextArray = await res.json();
      getUrl(adabiatTextArray["bookApi"]);
    }
  } catch (err) {
    console.log(err);
  }
}

function getUrl(textBookArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("title");

  let mainTxt = textBookArray.find((txt) => {
    return txt.title === getLocation;
  });

  if (!mainTxt) {
    window.location.href = "index.html";
  } else {
    cardGenerator(mainTxt);
  }
}

function cardGenerator(mainTxtObj) {
  let title = mainTxtObj.title || "—"
  let subject = mainTxtObj.subject || "—"
  let image = mainTxtObj.image || "./image/placeholder.png"
  let author = mainTxtObj.author || "—"
  let publisher = mainTxtObj.publisher || "—"
  let researcher = mainTxtObj.researcher || "—"
  let description = mainTxtObj.description || "—"
  let pdf = mainTxtObj.pdf_file || "—"
  
  let imgCard = `
    <h4>${title}</h4>
    <hr>
    <div class="bgImgBook">
        <img src="https://server.khakrizedarya.ir${image}" class="img-fluid d-block float-start right-img rounded-1"/>
    </div>
    `;
  let infoCard = `
    <hr>
    <h5>نویسنده:
      <p class="d-inline-block small-size">${author}</p>
    </h5>
    <h5>پژوهشگر:
      <p class="d-inline-block mt-2 small-size">${researcher}</p>
    </h5>
    <h5>ناشر:
      <p class="d-inline-block mt-2 small-size">${publisher}</p>
    </h5>
    `;

    let cardDescriptio = `
    <hr class="mt-1">
    <h3>${subject}</h3>
    <p>${description}</p>
    `

  imageContainer.insertAdjacentHTML("beforeend", imgCard);
  textBookInfo.insertAdjacentHTML("beforeend" , infoCard)
  descriptionBook.insertAdjacentHTML("beforeend" , cardDescriptio)
  downloadPdf.setAttribute("href" , `https://server.khakrizedarya.ir${pdf}`)
  console.log(pdf);
}

window.addEventListener("load", adabiatTextApi);