function encriptar(){
 var frase = document.getElementById("textoEncriptado").value.toLowerCase();
 var textoEncriptado= frase.replace(/e/img, "enter");
 var textoEncriptado= frase.replace(/o/img, "ober"); 
 var textoEncriptado= frase.replace(/i/img, "imes"); 
 var textoEncriptado= frase.replace(/a/img, "ai"); 
 var textoEncriptado= frase.replace(/u/img, "ufat");  
 document.getElementById("mensaje").innerHTML= textoEncriptado;
}

function desencriptar(){
    var frase = document.getElementById("textoDesencriptado").value.toLowerCase();
    var textoEncriptado= frase.replace(/enter/img, "e");
    var textoEncriptado= frase.replace(/ober/img, "o"); 
    var textoEncriptado= frase.replace(/imes/img, "i"); 
    var textoEncriptado= frase.replace(/ai/img, "a"); 
    var textoEncriptado= frase.replace(/ufat/img, "u");  
    document.getElementById("mensaje").innerHTML= textoEncriptado;
   }