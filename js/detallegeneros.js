let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString);

var generoId = objetoQuery.get('id');


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    
    let contenedorGeneros = document.querySelector(".kaka");
    let generos = data.data
    
    console.log(generos);
    
    
    for (const genero of generos) {
        contenedorGeneros.innerHTML +=
        `
       
         <h1>${genero.name}</h1>
        
        `
    }
    
    
    }).catch(function(error){
        console.error(error)
    })

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
          <a href="detalle-artista.html?id=${artista.id}">
         <img class="imagen" src="${artista.picture_big}" alt=""> </a>
         <h5>${artista.type}</h5>
         <h4>${artista.name}</h4>
        </div> 

        `
    if (contador == 9) {
        break;
    }
    
        contador ++;
    }
    
    
    
}).catch(function(error){
    console.error(error)
})