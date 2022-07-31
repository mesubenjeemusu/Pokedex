function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
  }

  let respText = httpGet('https://pokeapi.co/api/v2/pokemon/ditto');
  console.log(respText);
  document.getElementById("phdata").innerHTML = respText;