let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString);

var generoId = objetoQuery.get('id');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+generoId+"/artists")
.then(function(response)
{
    return response.json()
})
.then(function(datos){

    let artistaGenero = datos.data
    let contenedorArtistas = document.querySelector(".grid-container")
    let contador = 0
    for (const artista of artistaGenero) {
        contenedorArtistas.innerHTML += 
        `
       
        <div class="genero"> 
          <a href="yatra.html?id=${artista.id}">
         <img class="imagen" src="${artista.picture_big}" alt=""> </a>
         <h5>${artista.type}</h5>
         <h4>${artista.name}</h4>
        </div> 

        `
    if (contador == 10) {
        break;
    }
    
        contador ++;
    }
    
    
    
}).catch(function(error){
    console.error(error)
})