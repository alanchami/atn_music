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

<img class="playaimg" src="${track.album.cover_xl}" alt="">

<h4>Cancion: ${track.title}</h4>
<h4>Artista:${track.artist.name} </h4>
<h4>Album: ${track.album.title}</h4>
<a href="playlist.html"><h4>Agregar a tu Playlist</h4></a>
</div>
<div class="musica">
    <audio  align="center" src="${track.preview}" controls="controls" type="audio/mpeg" preload="preload">
    </audio>
</div>

`
}).catch(function(error){
    console.error(error)
})



