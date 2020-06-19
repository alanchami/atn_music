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
        let contenedorCanciones = document.querySelector(".nuevoslanzamientos1");
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
    
    contenedorCanciones.innerHTML =
    `
    <a href="Yatra.html"><img class="inolvidable" src="img2/yatra.jpg" alt=""></a>
   <a href="badbunny.html"><img class="inolvidable" src="img2/camilo.jpg" alt=""></a>
   <a href="tini.html"><img class="inolvidable" src="img2/martina.jpg" alt=""></a>
    
    `


}).catch(function(error){
    console.error(error)
})