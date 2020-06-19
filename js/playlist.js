let playlistjson = JSON.parse(window.localStorage.getItem("musicas"))
let playlistContenedor = document.querySelector ('.electronica');

                for (const tracks of playlistjson) {
                    playlistContenedor.innerHTML+=
                    `  
                    
                    
                    <div class="song"></a>
                      <p><audio  class="audio1" align="center" src="${tracks.preview}" controls="controls" type="audio/mpeg" preload="preload">
                        <p >${tracks.title}</p>
                        <p >${tracks.album.title}</p> 
                        <p >${tracks.duration}segs</p>
                    </div>
                    `    
                }
               
                