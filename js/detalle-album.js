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
    let CancionAlbum = document.querySelector (".cancionesalbum")
    `
    <h3> ${data.title} </h3>
<img src="${album.tracks}" alt="">
    `



}).catch(function(error){
    console.error(error)
})