let queryString = window.location.search

   
let objetoQuery = new URLSearchParams(queryString);


let info = objetoQuery.get('id');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + info)
.then(function(response){
    return response.json() ;
})
.then(function(data){ 

console.log (data);
let contenedorData = document.querySelector(".artistaar")
let artista = data

contenedorData.innerHTML +=
    
`<div class="artistaar">
        <h2 align="center">${artista.name}</h2>
        <h3 align="center">Followers: ${artista.nb_fan}</h3>
        <img class="yatraci" src="${artista.picture_xl}"  align="center" alt="${artista.name}"> 
    </div>`

}).catch(function(error){
    console.error(error)
})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+info+"/top")
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let playlist = data.data
        let contenedorPlaylist = document.querySelector(".electronica");

        for (const cancion of playlist) {
           
            contenedorPlaylist.innerHTML +=`
            
            <div class="song" id=${cancion.id}>
            
        <p><audio  class="audio1" align="center" src="${cancion.preview}" controls="controls" type="audio/mpeg" preload="preload">
          <p class="">${cancion.title_short}</p>
          <p class= "">${cancion.album.title}</p> 
          <p class= "">${cancion.rank}</p>
          
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

  
    