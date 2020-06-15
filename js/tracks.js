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
<h4><a href= "yatra.html">${track.artist.name}</a> </h4>
<h4> Album: ${track.album.title}</h4>
<h4>${track.duration}Seg</h4>
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
</div>
`
let ContenedorFooter = document.querySelector (".futer")  

ContenedorFooter.innerHTML = `
<footer>
        <div class="footer2">
        <img class="deezer" src="img2/Como llora foto.png" alt="">
         <div class="alumnos">
          <audio class="audio" src="${track.preview}" controls="controls" type="audio/mpeg" preload="preload">
          </audio>
           

          </div>
        </div>
      </div>
     </footer> 
`
}).catch(function(error){
    console.error(error)
})


   


    .catch(function(error){
        console.error(error)
    })
    


    let albuminfo = album.tracks.id
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + albuminfo+ "/tracks")
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        let Albumes = data.data
        let contenedorAlbumes= document.querySelector(".nuevoslanzamientos2");
        console.log(Albumes);
        
        for (const albums of Albumes) {
             contenedorAlbumes.innerHTML += `
        
            
            
               <div><a href="playa.html"><img class="inolvidable" src="img2/inolvidable.jpg" alt=""></a>
           <h4 align=""> nombre lanzamiento </h4></div>
               <div><a href="oye.html"><img class="inolvidable" src="img2/favoritocamilo.jpg" alt=""></a>
                 <h4 align=""> nombre lanzamiento </h4></div>
               <div><a href="dipi.html"><img class="inolvidable" src="img2/dipy.jpg" alt=""></a>
             <h4 align=""> nombre lanzamiento </h4></div>
             </div>
           </div>            
                
        `
        }
       
    
    
        }).catch(function(error){
            console.error(error)
        })
        
