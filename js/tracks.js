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
let ContenedorFooter = document.querySelector (".futer")  

contenedorData.innerHTML =`
<img class="playaimg" align= "left" src="${track.album.cover_xl}" alt="">
<div class="textos2">
<h1>${track.title}</h1>
<a href= "detalle-artista.html?id=${track.artist.id}">
<h4>${track.artist.name}</h4></a>
<a href= "detallealbumes.html?id=${track.album.id}">
<h4>Album: ${track.album.title}</h4></a>
<h4>${track.duration}Seg</h4>
</div>
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
let artistId = track.artist.id

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistId+"/albums")
.then(function(response){
    return response.json()
})
.then (function(data){
    let Albumes = data.data
    let contenedorAlbumes= document.querySelector(".todo");
    console.log(Albumes);
    
    for (const albums of Albumes) {
         contenedorAlbumes.innerHTML += `
    
         <h1 class="newlanza" align="center">MAS CANCIONES DEL ARTISTA</h1>
         <div>
           <div class="nuevoslanzamientos1">
              <a href="detalles-track.html"?id=${albums.id}><img class="inolvidable" src="${albums.cover_big}" alt=""></a>
              
             <div>
               
           </div>
         </div>
         </div> 

            
    `
    }
   
    }).catch(function(error){
        console.error(error)
    })


ContenedorFooter.innerHTML = ` 
<footer>
   <div class="footer2">
    <img class="deezer" src="img2/Como llora foto.png" alt=""></div>
     <div class class="alumnos">
   <audio  align="center" src="${track.preview}" controls="controls" type="audio/mpeg" preload="preload"></audio> 
     </div>
 </footer>


`
}).catch(function(error){
    console.error(error)
})

    let artistId = track.artist.id

  