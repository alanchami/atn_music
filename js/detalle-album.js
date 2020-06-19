//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var albumId = objetoQuery.get('id');




fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+albumId)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        
        let contenedorData = document.querySelector(".playa");
        let album = data
        console.log(album);
       
        contenedorData.innerHTML =
    `
    <img class="playaimg" align= "left" src="${album.cover_xl}" alt="">
<h5>${album.type}</h5>
<h1>${album.title}</h1>
<a href="detalle-artista.html?id=${album.artist.id}">
<h4>${album.artist.name}</h4>
</a>
<h4>${album.release_date} </h4>

    `
    let cancionesAlbum = album.tracks.data
    let contenedorPlaylist = document.querySelector(".electronica");
    
    console.log(cancionesAlbum);
    
    for (const cancion of cancionesAlbum) {
        contenedorPlaylist.innerHTML +=`
        
        <div class="song" id=${cancion.id}>
    <p><audio  class="audio1" align="center" src="${cancion.preview}" controls="controls" type="audio/mpeg" preload="preload">
      <p >${cancion.title_short}</p>
      <p >${cancion.title}</p> 
      <p >${cancion.rank}</p>
  </div>
        
        
        
        
        
        `
    }
    let divisionCancion = document.querySelectorAll('.song');
        for (const cancion of divisionCancion) {
            cancion.onclick = function (event) {
                event.preventDefault();
                window.location.href ="detalles-track.html?id="+this.id
                
            }
        console.log(this)
    }


}).catch(function(error){
    console.error(error)
})

    

    