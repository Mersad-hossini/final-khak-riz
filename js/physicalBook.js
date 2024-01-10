let physicalBookContainer = document.querySelector(".physical-book");
let currentPage = 1;
let rowsCount = 9;
const paginationContainer = document.getElementById("pagination");

async function physicalBookApi() {
  let res = "";
  let physicalBookArray = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/library/physicalbookApi/?format=json");
    if (res.ok) {
      physicalBookArray = await res.json();
      displayPhysicalBook(physicalBookArray['GraphicDesignApi'],physicalBookContainer, rowsCount,currentPage);
      setUpPagination(physicalBookArray['GraphicDesignApi'], paginationContainer, rowsCount)
    }
  } catch (err) {
    console.error("Error...");
  }
}

function cardGenerator(BookArray) {
  let card = `
        <div
        class="col-lg-3 col col-md-4 col-sm-6 d-flex justify-content-center"
        >
        <div class="card h-100" style="width: 16rem">
            <a href="./physicalBookPage.html?title=${BookArray.title}"
            ><img
                src="https://server.khakrizedarya.ir${BookArray.image}"
                class="card-img-top img-fluid"
                alt="image book pdf"
            /></a>
            <div class="card-body">
            <h5 class="card-title fw-bolder">${BookArray.title}</h5>
            <p class="card-text">${BookArray.description.substring(0,30)}...</p>
            <a
                href="./physicalBookPage.html?title=${BookArray.title}"
                class="btn btn-success float-end w-100"
                >مشاهده</a
            >
            </div>
        </div>
        </div>
    `;
  physicalBookContainer.insertAdjacentHTML("beforeend", card);
}

function displayPhysicalBook(BookArray,physicalBookContainer,rowsCount,currentPage) {
  physicalBookContainer.innerHTML = "";
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = BookArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(BookArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(BookArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, BookArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, BookArray) {
  let button = document.createElement("button");
  button.innerHTML = page;
  
  if (page === currentPage) {
    button.classList.add("active");
  }
  
  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayPhysicalBook(BookArray,physicalBookContainer,rowsCount,currentPage)
  
    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");
  
    button.classList.add("active");
  });
  
  return button;
}
  
window.addEventListener("load", physicalBookApi);