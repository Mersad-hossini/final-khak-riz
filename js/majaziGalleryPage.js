let imageContainer = document.querySelector(".image-container")
let infoContainer = document.querySelector(".info-container")
let majaziDescription = document.querySelector(".majazi-description")
let downloadBtn = document.querySelector(".download")

async function majaziGrapicApi() {
  let res = "";
  let majaziGrapicArray = "";
  try {
    res = await fetch("data/majaziGrapic.json");
    if (res.ok) {
      majaziGrapicArray = await res.json();
      console.log(majaziGrapicArray);
      getUrl(majaziGrapicArray)
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
    let cardImg = `
        <h3 class="text-center">معرفی ${mainmajaziObj.title}</h4>
        <hr />
        <div class="bgImgBook p-4">
        <img src="${mainmajaziObj.img}" class="img-fluid d-block float-start rounded-1"/>`;

    let cardDetails = `
        <hr>
        <h5>نام اثر:
            <p class="d-inline-block">${mainmajaziObj.title}</p>
        </h5>
        <h5>طراح:
            <p class="d-inline-block mt-2">${mainmajaziObj.designer}</p>`;

    let cardDescription = `
        <hr class="mt-2 ">
        <h3> معرفی و توضیحات ${mainmajaziObj.title}</h3>
        <p>${mainmajaziObj.des}</p> `;

  downloadBtn.setAttribute("href" , mainmajaziObj.img)
  imageContainer.insertAdjacentHTML("beforeend", cardImg);
  infoContainer.insertAdjacentHTML("beforeend", cardDetails);
  majaziDescription.insertAdjacentHTML("beforeend", cardDescription);
}

window.addEventListener("load", majaziGrapicApi);