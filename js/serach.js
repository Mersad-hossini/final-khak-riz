let formInput = document.querySelector("form")
let inputSearch = document.querySelector("input")

async function getSerachApi() {
    let inputSearchVal = inputSearch.value
    console.log(inputSearchVal);
    try {
        let res = await fetch("https://www.server.khakrizedarya.ir/home-object/SerachData/?format=json&search=")
        let serachData = ""
        if(res.ok) {
            serachData = await res.json()
            console.log(serachData);
        } else {
            throw Error
        }
    } catch(err) {
        console.log("Error...");
    }
}

formInput.addEventListener("submit" , (e) => {
    e.preventDefault()
})

window.addEventListener("load" , getSerachApi)