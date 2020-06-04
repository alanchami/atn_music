//mi fabrica de saludar
function saludar(nombre) {
    //console.log(nombre)
    let saludoGeneral;
   
    if (nombre != '') {
        saludoGeneral = 'Bienvenido'  +  nombre;  
    } else {
        saludoGeneral = 'Bienvenido invitado' ;
    }

    return saludoGeneral;
}