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
<h4>${track.artist.name} </h3>
<h4> Album: ${track.album.title}</h3>
<h4>${track.duration}Seg</h4>
</div>
    <audio  align="center" src="${track.preview}" controls="controls" type="audio/mpeg" preload="preload">
    </audio>
</div>

`
}).catch(function(error){
    console.error(error)
})



