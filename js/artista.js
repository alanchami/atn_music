let queryString = window.location.search

   
let objetoQuery = new URLSearchParams(queryString);


let info = objetoQuery.get('id');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + info)
.then(function(response){
    return response.json() ;
})
.then(function(data){ 

console.log (data);
let contenedorData = document.querySelector(".artistaar")
let artista = data

contenedorData.innerHTML +=
    
`<div class="artistaar">
        <h2 align="center"> Sebastián Yatra</h2>
        <h2>${artista.name}</h2>
        <h3 align="center">Followers: 33M</h3>
        <img class="yatraci" src="${artista.picture_big}"  align="center" alt="${artista.name}"> 
    </div>`

}).catch(function(error){
    console.error(error)
})
