fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0")
.then(function(response){
    return response.json()
}).then(function(data){ 
console.log (data)

let artistas = data.artists.data 
let contenedorArtisitas = document.querySelector ('.nuevoslanzamientos')
 
for (const artista of artistas) {
    contenedorArtisitas.innerHTML += `
    <div class="nuevoslanzamientos">
    <a href="Yatra.html"><img class="inolvidable" src="${artista.picture_big}"
 alt=""></a>  
    </div>`

}
})
.catch(function(error){
    console.error(error)
})