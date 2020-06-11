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
<h1>${album.title}</h1>
<h4>${album.artist.name} </h3>
</div>
    
</div>


    `
}).catch(function(error){
    console.error(error)
})