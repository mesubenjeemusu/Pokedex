function GetSearchTerm() {
    return document.getElementById("search_name").value;
}

function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
}

let pokeData;

function QueryPokeAPI() {

    let searchTerm = GetSearchTerm();
    let respText = httpGet("https://pokeapi.co/api/v2/pokemon/" + searchTerm);

    pokeData = JSON.parse(respText);
    console.log('Type: ', typeof pokeData);
    console.log('Contents: ', pokeData)

    let pkmn_name = pokeData["name"];
    Object.keys(pokeData).forEach((key) => { console.log(key + ": " + pokeData[key])});

    console.log(respText);
    document.getElementById("phdata").innerHTML = respText;
    document.getElementById("pokemon_name").innerHTML = pkmn_name;
}


