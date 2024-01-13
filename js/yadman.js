let yadmanRow = document.querySelector(".yadman-data");

let currentPage = 1;
let rowsCount = 8;
const paginationContainer = document.getElementById("pagination");

let allInput = document.querySelectorAll(".form-check-input");

window.addEventListener('pageshow', function(event) {
  // Check if it's a navigation or a reload
  if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
    // Reset filters when the page is shown (either back navigation or reload)
    resetFilters();
  }
});

function resetFilters() {
  let inputCheckboxes = document.querySelectorAll("form input[type='checkbox']");
  inputCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  change();
}

async function yadmanApi() {
  let res = "";
  let yadmanDatas = "";
  try {
    res = await fetch("https://server.khakrizedarya.ir/martyr/YademanPathAPI");
    if (res.ok) {
      yadmanDatas = await res.json();
      setUpPagination(yadmanDatas["martyrApi"], paginationContainer, rowsCount);
      displayYadman(
        yadmanDatas["martyrApi"],
        yadmanRow,
        rowsCount,
        currentPage
      );
    }
  } catch (err) {
    console.error(err);
  }
}

function cardGenerator(yadmanData) {
  let card = `
      <div class="col-12 col-sm-9 col-md-6 col-lg-4 my-3 mx-auto">
        <div class="card card-box-imgs h-100 text-center">
          <a href="./yadman-mini.html?id=${yadmanData.id}">
            <img
              src="https://server.khakrizedarya.ir${yadmanData.image}"
              class="card-img-top img-fluid"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="fw-bold mb-3 card-title">${yadmanData.name}</h5>
            <a
              href="./yadman-mini.html?id=${yadmanData.id}"
              class="btn btn-success float-end w-100"
            >مشاهده</a>
          </div>
        </div>
      </div>
    `;
  yadmanRow.insertAdjacentHTML("beforeend", card);
}

function toggleAllCheckboxes(allCheckbox) {
  let inputCheckboxes = document.querySelectorAll("form input[type='checkbox']");

  let allChecked = true;
  inputCheckboxes.forEach((checkbox) => {
    checkbox.checked = allCheckbox.checked;
    if (!checkbox.checked) {
      allChecked = false;
    }
  });
    change();
}

function change() {
  let input = document.querySelectorAll("form input[type='checkbox']");
  let filters = {
    models: getClassOfCheckedCheckboxes(input),
  };
  filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  let classes = [];
  if (checkboxes && checkboxes.length > 0) {
    for (let i = 0; i < checkboxes.length; i++) {
      let cb = checkboxes[i];
      if (cb.checked) {
        classes.push(cb.getAttribute("id"));
      }
    }
  }
  return classes;
}

function filterResults(filters) {
  fetch("https://server.khakrizedarya.ir/martyr/YademanPathAPI")
    .then(res => res.json())
    .then(yadmanData => {
      const yadmanArray = yadmanData["martyrApi"];
      
      yadmanRow.innerHTML = "";
      paginationContainer.innerHTML = ""; // Clear pagination container

      let filteredProducts = [];

      if (filters.models.length > 0) {
        filteredProducts = yadmanArray.filter(product => filters.models.includes(product.city));
      } else {
        // If no filters selected, display all products
        filteredProducts = [...yadmanArray];
      }

      setUpPagination(filteredProducts, paginationContainer, rowsCount);
      displayYadman(filteredProducts, yadmanRow, rowsCount, currentPage);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function displayYadman(yadmanArray, yadmanRow, rowsCount, currentPage) {
  yadmanRow.innerHTML = ""; // Fixed typo
  let end = rowsCount * currentPage;
  let start = end - rowsCount;

  let paginated = yadmanArray.slice(start, end);

  paginated.forEach((paginatedBtn) => {
    cardGenerator(paginatedBtn); // Call cardGenerator to generate cards
  });
}

function setUpPagination(yadmanArray, paginationContainer, rowsCount) {
  paginationContainer.innerHTML = "";
  let pageCount = Math.ceil(yadmanArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, yadmanArray);
    paginationContainer.append(btn);
  }
}

function buttonGenerator(page, yadman) {
  let button = document.createElement("button");
  button.innerHTML = page;
  button.className = "m-2";

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    displayYadman(yadman, yadmanRow, rowsCount, currentPage);
    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

function getUrl() {
  let locationSearch = new URLSearchParams(location.search);
  let getSearchParam = locationSearch.getAll("city");

  let inputCheckboxes = document.querySelectorAll(
    "form input[type='checkbox']"
  );

  inputCheckboxes.forEach((checkbox) => {
    if (getSearchParam.includes(checkbox.getAttribute("id"))) {
      checkbox.checked = true;
    }
  });
  change();
}

window.addEventListener("load", yadmanApi);
window.addEventListener("load" , getUrl)
allInput.forEach((input) => {
  input.addEventListener("change", change);
});