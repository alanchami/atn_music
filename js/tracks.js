let queryString = window.location.search

   
let objetoQuery = new URLSearchParams(queryString);


let info = objetoQuery.get('id');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" +info)
.then(function(response){
    return response.json()
})
.then(function(data){


let contenedorData = document.querySelector(".playa")
let track = data
console.log(track);


contenedorData.innerHTML =`
<img class="playaimg" align= "left" src="${track.album.cover_xl}" alt="">
<h1>${track.title}</h1>
 <a href "yatra.html?id=${track.artist.id}"> <h4>${track.artist.name}</h4> </a>
<h4> Album: ${track.album.title}</h4>
<h4>${track.duration}Seg</h4>
<div class="ec-stars-wrapper">
	<a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
	<a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
	<a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
	<a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
	<a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
</div>
<br>
<br>
<div> 
  <button class="btn btn-primary" id="agregar"> + Agregar a tu Playlist </button>
</div>
</div>

`
let votacion = document.querySelector ('.estrella') ; 

votacion.onclick = function () { 
    votacion.style.color = 'orange'
}

let ContenedorFooter = document.querySelector (".futer")  

ContenedorFooter.innerHTML = `
<footer>
        <div class="footer2">
        <img class="deezer" src="img2/Como llora foto.png" alt="">
         <div class="alumnos">
          <audio class="audio" src="${track.preview}" controls="controls" type="audio/mpeg" preload="preload">
          </audio>
           

          </div>
        </div>
      </div>
     </footer> 
`
}).catch(function(error){
    console.error(error)
})

let artistainfo = track.artist.id

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistainfo+"/albums")
.then(function(response){
    return response.json()
})
.then (function(data){
    let Albumes = data.data
    let contenedorAlbumes= document.querySelector(".fila3");
    console.log(Albumes);
    
    for (const albums of Albumes) {
         contenedorAlbumes.innerHTML += `
    
        
            <div class="contenedor-imagen">
                <a href="detalles-album.html?id=${albums.id}"><img src="${albums.cover_big}" alt="Imagen de album"></a>
                <h3 class="texto-album">${albums.title}</h3>
            </div>
    `
    

    }
   
    }).catch(function(error){
        console.error(error)
    })
    
