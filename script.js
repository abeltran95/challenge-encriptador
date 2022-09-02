function colocarfondo(){
    var encriptado = document.getElementById("textencriptado");
    if (window.matchMedia("(min-width: 768px)").matches) {
        encriptado.style.backgroundImage = 'url(img/Imagen.svg)'; 
    } else {
        encriptado.style.backgroundImage = 'none';
    }
}

function encriptar (){
    var texto = document.querySelector(".textinput").value;
    texto.toLowerCase();
    var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".textencriptado").value = textoEncriptado;
    document.querySelector(".textinput").value = "";

    var encriptado = document.getElementById("textencriptado");
    encriptado.style.backgroundImage = 'none';
    }

function desencriptar (){ 
    var texto = document.querySelector(".textinput").value; 
    texto.toLowerCase();
    var textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".textencriptado").value = textoDesencriptado; 
    document.querySelector(".textinput").value = "";

    var encriptado = document.getElementById("textencriptado");
    encriptado.style.backgroundImage = 'none';
}

function validarOnInput(){

    document.querySelector(".textinput").value = document.querySelector(".textinput").value.replace(/[^a-zñ]/,'');

}

function copiar() {

    var content = document.getElementById("textencriptado");
    content.select();
    document.execCommand("copy");
    alert("Texto Copiado");
    document.querySelector(".textencriptado").value = "";
    colocarfondo();
}