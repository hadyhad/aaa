let input = document.querySelector("#search")
let btn = document.querySelector("#searchbtn")
let result = document.querySelector("#result")

btn.addEventListener("click", ()=>{
    let value = input.value.trim()
    if (value === ""){
        result.innerHTML = "<p>entrez un nom de pays: "
        return
    }
    console.log(value)
    recherchepays(value)
})

async function recherchepays(nom) {
    result.innerHTML = "<p>Recherche en cours</p>"
    try {
        const response = await fetch(`https://countriesnow.space/api/v0.1/countries/capital/q?country=${nom}`)
        // ,{
        //     method: "POST",
        //     headers: {'Content-type': "application/json"},
        //     body: JSON.stringify({country:nom})
        // });
        console.log(response)
        let donnees = await response.json()
        console.log(donnees)

        result.innerHTML = `
        <h3>${donnees.data.name}</h3>
        <p>${donnees.data.capital}</p>`   
    } catch (error){
        result.innerHTML = `<p>${error.message}</p>`
    }
}

// ==============================================

async function displaycountry() {
    let country = document.querySelector("#countries")
    country.innerHTML = "<li>loading...</li>"
    try{
        let response = await fetch("https://countriesnow.space/api/v0.1/countries")
        let donnees = await response.json()
        country.textContent = ""
        console.log(donnees)
        donnees.data.forEach(pays => {
            country.innerHTML += `<li>${pays.country}</li>`
        });
    } catch(error) {
        country.innerHTML = `<li>${error.message}</li>`
    }
}

displaycountry()