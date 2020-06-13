let queryString = window.location.search

   
let objetoQuery = new URLSearchParams(queryString);


let busqueda = objetoQuery.get('filtro');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q='+busqueda)
    .then(function(res){
        //transformo en json
        return res.json();
    })
    .then(function(respuesta){

       let tracks = respuesta.data

       let nombre = document.querySelector ('.resultadosca')
      for (const resultado of tracks) {
         console.log(resultado);
         
        nombre.innerHTML += `<a href="detalles-track.html?id=${resultado.id}"><img class="inolvidable" src="${resultado.album.cover_xl}" alt=""><h3>${resultado.artist.name}</h3><h3>${resultado.album.title}</h3></a>`
        
      }  
      
    })
    .catch(function(error){
        console.error(error);
        return null;
    });


