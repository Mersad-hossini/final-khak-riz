let imageContainer = document.querySelector(".image-container");
let infoContainer = document.querySelector(".info-container");
let downloadBtn = document.querySelector(".download");

async function majaziGrapicApi() {
  let res = "";
  let majaziGrapicArray = "";
  try {
    res = await fetch(
      "https://server.khakrizedarya.ir/cyberspace/GraphicDesignApi/?format=json"
    );
    if (res.ok) {
      majaziGrapicArray = await res.json();
      getUrl(majaziGrapicArray["GraphicDesignApi"]);
    }
  } catch (err) {
    console.error("Error...");
  }
}

function getUrl(majaziArray) {
  let locationSearch = new URLSearchParams(location.search);
  let getLocation = locationSearch.get("title");

  let mainmajazi = majaziArray.find((majazi) => {
    return majazi.title === getLocation;
  });

  if (!mainmajazi) {
    window.location.href = "page404.html";
  } else {
    cardGenerator(mainmajazi);
  }
}

function cardGenerator(mainmajaziObj) {
  let title = mainmajaziObj.title || "—";
  let image = mainmajaziObj.image || "./image/placeholder.png";
  let designer = mainmajaziObj.designer || "—";

  let cardImg = `
        <h3 class="text-center">معرفی ${title}</h4>
        <hr />
        <div class="bgImgBook p-4">
        <img src="https://server.khakrizedarya.ir${image}" class="img-fluid d-block float-start rounded-1"/>`;

  let cardDetails = `
        <hr>
        <h5>نام اثر:
            <p class="d-inline-block small-size">${title}</p>
        </h5>
        <h5>طراح:
            <p class="d-inline-block mt-2 m-0 small-size">${designer}</p>`;


  downloadBtn.addEventListener("click", async () => {

    let imageUrl = `https://server.khakrizedarya.ir${image}`;
    
    fetch(imageUrl) 
    .then(response => response.blob())
    .then(blob => {
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${image}.jpg`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    })
  });

  downloadBtn.addEventListener("contextmenu" , (e) => {
      e.preventDefault()
  })

  imageContainer.insertAdjacentHTML("beforeend", cardImg);
  infoContainer.insertAdjacentHTML("beforeend", cardDetails);
}

window.addEventListener("load", majaziGrapicApi);
