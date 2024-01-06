let imageContainer = document.querySelector(".image-container")
let infoContainer = document.querySelector(".info-container")
let majaziDescription = document.querySelector(".majazi-description")
let downloadBtn = document.querySelector(".download")

async function majaziGrapicApi() {
  let res = "";
  let majaziGrapicArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cyberspace/GraphicDesignApi/?format=json");
    if (res.ok) {
      majaziGrapicArray = await res.json();
      getUrl(majaziGrapicArray["GraphicDesignApi"])
    }
  } catch (err) {
    console.log(err);
  }
}

function getUrl(majaziArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("title");

  let mainmajazi = majaziArray.find((majazi) => {
    return majazi.title === getLocation;
  });

  if (!mainmajazi) {
    window.location.href = "index.html";
  } else {
    cardGenerator(mainmajazi);
  }
}

function cardGenerator(mainmajaziObj) {
    let title = mainmajaziObj.title || "—"
    let image = mainmajaziObj.image || "./image/placeholder.png"
    let designer = mainmajaziObj.designer || "—"

    let cardImg = `
        <h3 class="text-center">معرفی ${title}</h4>
        <hr />
        <div class="bgImgBook p-4">
        <img src="https://server.khakrizedarya.ir${image}" class="img-fluid d-block float-start rounded-1"/>`;

    let cardDetails = `
        <hr>
        <h5>نام اثر:
            <p class="d-inline-block">${title}</p>
        </h5>
        <h5>طراح:
            <p class="d-inline-block mt-2">${designer}</p>`;

    let cardDescription = `
        <hr class="mt-2 ">
        <h3> معرفی و توضیحات ${title}</h3>
        <p>${designer}</p> `;

  downloadBtn.setAttribute("href" , `https://server.khakrizedarya.ir${image}`)
  imageContainer.insertAdjacentHTML("beforeend", cardImg);
  infoContainer.insertAdjacentHTML("beforeend", cardDetails);
  majaziDescription.insertAdjacentHTML("beforeend", cardDescription);
}

window.addEventListener("load", majaziGrapicApi);