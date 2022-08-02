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
    respText = JSON.stringify(pokeData, null, 2);
    //console.log('Type: ', typeof pokeData);
    //console.log('Contents: ', pokeData)

    // Get name
    let pkmn_name = pokeData["name"];

    // Get abilities
    let abilities_string = "";
    let pkmn_abilities = pokeData["abilities"].forEach((dict) => {
        abilities_string += dict["ability"]["name"] + "\n";
    });

    // Get moves
    let moves_string = "";
    let pkmn_moves = pokeData["moves"].forEach((dict) => {
        moves_string += dict["move"]["name"] + "\n";
    });

    // Get sprite
    let pkmn_sprite_path_string = pokeData["sprites"]["front_default"];
    console.log(pkmn_sprite_path_string);

    //Object.keys(pokeData).forEach((key) => { console.log(key + ": " + pokeData[key])});

    //console.log(respText);
    document.getElementById("phdata").innerHTML = respText;
    document.getElementById("pokemon_name").innerHTML = pkmn_name;
    document.getElementById("pokemon_sprite").setAttribute("src", pkmn_sprite_path_string);
    document.getElementById("pokemon_sprite").setAttribute("visible", "true");
    document.getElementById("pokemon_abilities").innerHTML = abilities_string;
    document.getElementById("pokemon_moves").innerHTML = moves_string;

    document.getElementById("parent_content_div").setAttribute("visible", "true");
}


