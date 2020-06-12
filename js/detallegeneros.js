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
    let contenedorArtistas = document.querySelector(".artistageneros")
    
    for (const artista of artistaGenero) {
        contenedorArtistas.innerHTML += 
        `
        <div>
            <div class="container2">
                <a href="Yatra.html?id=${artista.id}">
                    <img class="imagen-drake" src="${artista.picture_big}" alt="Imagen de ${artista.name}">
                </a>
                <a class="textos" href="details.html?id=${artista.id}">${artista.name}</a>
                <div class="textos2">${artista.type}</div>
            </div>
        </div>
        
        `
    }
    
    
}).catch(function(error){
    console.error(error)
})