let majaziContaienr = document.querySelector(".majazi-contaienr");
let currentPage = 1;
let rowsCount = 8;
const paginationContainer = document.getElementById("pagination");

async function majaziGrapicApi() {
  let res = "";
  let majaziGrapicArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/cyberspace/GraphicDesignApi/?format=json");
    if (res.ok) {
      majaziGrapicArray = await res.json();
      displayGrapicImg(majaziGrapicArray["GraphicDesignApi"], majaziContaienr, rowsCount, currentPage);
      setUpPagination(majaziGrapicArray["GraphicDesignApi"], paginationContainer, rowsCount);
    }
  } catch (err) {
    console.error("Error...");
  }
}

function cardGenerator(majaziArray) {
  let card = `
    <div class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center">
        <div class="card h-100" style="width: 16rem">
            <a href="./majaziGalleryPage.html?id=${majaziArray.id}"><img src="https://server.khakrizedarya.ir${majaziArray.image}" class="card-img-top img-fluid" alt="image book pdf"/></a>
            <div class="card-body">
                <h5 class="card-title fw-bolder">${majaziArray.title}</h5>
                <p class="card-text">${majaziArray.designer.substring(0,30)}...</p>
                <a href="./majaziGalleryPage.html?id=${majaziArray.id}" class="btn btn-success float-end w-100">مشاهده</a>
            </div>
        </div>
    </div>`;

  majaziContaienr.insertAdjacentHTML("beforeend", card);
}

function displayGrapicImg(majaziArray,textBookContainer,rowsCount,currentPage) {
  textBookContainer.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = majaziArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(majaziArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(majaziArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, majaziArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, majaziArray) {
  let button = document.createElement("button");
  button.innerHTML = page;
  button.className = "m-2"

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayGrapicImg(majaziArray, majaziContaienr, rowsCount, currentPage);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

window.addEventListener("load", majaziGrapicApi);