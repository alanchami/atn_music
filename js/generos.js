let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString);

var generoId = objetoQuery.get('id');


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    
    let contenedorGeneros = document.querySelector(".grid-container");
    let generos = data.data
    
    console.log(generos);
    
    
    for (const genero of generos) {
        contenedorGeneros.innerHTML +=
        `
        <div class="grid-container">
        <div class="genero"> 
          <a href="detallegeneros.html?id=${genero.id}">
         <img class="imagen" src="${genero.picture_big}" alt=""> </a>
         <h5>${genero.type}</h5>
         <h4>${genero.name}</h4>
        </div> 
            </div>
        
        `
    }
    
    
    }).catch(function(error){
        console.error(error)
    })