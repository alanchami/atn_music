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
    <div><a href="Yatra.html?id=${artista.id}"><img class="inolvidable" src="${artista.picture_xl}"
 alt=""></a> <div>
 <h5 align="center">${artista.type}</h5>
 <h4 align="center"> ${artista.name} </h4> </div>
    </div>
    `
    
}

let lanzamientos = data.tracks.data
let contenedorTracks = document.querySelector ('.nuevoslanzamientos2')

for (const track of lanzamientos ) {
    contenedorTracks.innerHTML += `
    <div class="nuevoslanzamientos2">
    <div><a href="detalles-track.html?id=${track.id}"><img class="inolvidable" src="${track.album.cover_xl}"
 alt=""></a>  
 <h5 align="center">${track.type}</h5>
 <h4 align= "center"> ${track.title} </h4></div>
    </div>`
}

let albums = data.albums.data
let contenedorAlbums = document.querySelector ('.nuevoslanzamientos3')

for (const album of albums) {
    contenedorAlbums.innerHTML += `
    <div class="nuevoslanzamientos3">
    <div><a href="detallealbumes.html?id=${album.id}"><img class="inolvidable" src="${album.cover_xl}" alt="">
    </a>
    <h5 align="center">${album.type}</h5>
    <h4> ${album.title} </h4></div>
    `
}





})
.catch(function(error){
    console.error(error)
})

var bounceIn = anime({
    targets: '.letter__part',
    translateY: {
                  value: [-30, 0],
                  duration: 900,
          delay: 1000,
                  elasticity: 600,
                  easing: 'easeOutElastic'
              },
              opacity: {
                  value: [0, 1],
                  duration: 300,
                  easing: 'linear',
          delay: 1000
              }
    });

  