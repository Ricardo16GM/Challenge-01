var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var seccion2 = document.querySelector(".seccion2");
var titulo3 = document.querySelector(".msj-3");
var titulo4 = document.querySelector(".msj-4");

var containerMuneco = document.querySelector(".container-muneco");
var containerTitulo = document.querySelector(".container-titulo");
var containerTexto = document.querySelector(".container-texto")
var resultadoFinal = document.querySelector(".texto-resultado");


/*====================== botones ====================== */ 

botonEncriptar.onclick = encriptarResultado;
botonDesencriptar.onclick = desencriptarResultado;
botonCopiar.onclick = copiar;

/*====================== fin botones ====================== */ 

function ocultarFrente() {
    containerMuneco.classList.add("ocultar");
    containerTitulo.classList.add("ocultar");
    containerTexto.classList.add("ocultar");
}

function textoObtenido() {
    
    var areaTexto = document.querySelector(".area-texto");
    return areaTexto.value;
}


function encriptarTexto(mensaje) {
    seccion2.classList.add("rotate-vertical-center");
    titulo4.classList.add("ocultar");
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]; 
        }
    }

    return textoFinal;
}


function desencriptarTexto(mensaje) {
    seccion2.classList.add("rotate-vertical-center");
    titulo3.classList.add("ocultar");
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i]; 
        }
    }

    return textoFinal;
   
}



function encriptarResultado() {
    ocultarFrente();
    var textoFinal = textoObtenido();
    resultadoFinal.textContent = encriptarTexto(textoFinal); 
}


function desencriptarResultado() {
    ocultarFrente();
    var textoFinal = textoObtenido();
    resultadoFinal.textContent = desencriptarTexto(textoFinal);

}

function copiar() {

    var content = document.getElementById('textArea');
    
    content.select();
    document.execCommand('copy');

    alert("Copiado! 📗");
    location.reload();
}







