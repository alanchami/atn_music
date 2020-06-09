fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0")
.then(function(response){
    return response.json()
}).then(function(data){ 
console.log (data)

let artistas = data.artists.data 
let contenedorArtistas = document.querySelector ('.nuevoslanzamientos1')
 
for (const artista of artistas) {
    contenedorArtistas.innerHTML += `
    <div class="nuevoslanzamientos1">
    <a href="Yatra.html?id=${artista.id}"><img class="inolvidable" src="${artista.picture_xl}"
 alt=""></a> <h4> ${artista.name} </h4>
    </div>`

}
let lanzamientos = data.tracks.data
let contenedorTracks = document.querySelector ('.nuevoslanzamientos2')

for (const track of lanzamientos ) {
    contenedorTracks.innerHTML += `
    <div class="nuevoslanzamientos2">
    <a href="playa.html?id=${track.id}"><img class="inolvidable" src="${track.album.cover_xl}"
 alt=""></a>  
 <h4> ${track.title} </h4>
    </div>`
}

let albums = data.albums.data
let contenedorAlbums = document.querySelector ('.nuevoslanzamientos3')

for (const album of albums) {
    contenedorAlbums.innerHTML += `
    <div class="nuevoslanzamientos3">
    <a href="regge.html?id=${album.id}"><img class="inolvidable" src="${album.cover_xl}" alt="">
    </a>
    <h4> ${album.title} </h4>
    `
}

})
.catch(function(error){
    console.error(error)
})