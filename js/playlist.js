let playlistjson = JSON.parse(window.localStorage.getItem("playlist"))
let playlistContenedor = document.querySelector ('.electronica');

                for (const tracks of playlistjson) {
                    playlistContenedor.innerHTML+=
                    `  
                    <div class="electronica" >
                    <h2 align="center"></h2>
                    <div class="song-info"> 
                      <p >#</p>
                        <p >Titulo</p>
                        <p >Album</p> 
                        <p >Reproducciones</p>
                    </div>
                    <br>
                    <div class="song"></a>
                      <p><audio  class="audio1" align="center" src="${tracks.preview}" controls="controls" type="audio/mpeg" preload="preload">
                        <p >${tracks.title}</p>
                        <p >${tracks.album.title}</p> 
                        <p >${tracks.artist.name}</p>
                    </div>
                    `    
                }
               
                