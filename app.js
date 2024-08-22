
function encriptar() { 
    let texto = document.getElementById("textoUsuario").value; 
    if(texto!=""){
        let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("imagenDetective").style.display = "none";
    document.getElementById("mensajeInicial2").style.display = "none";
    document.getElementById("botonCopiar").style.display ="block"
    const list = document.getElementById("textoBoton").classList
    list.add("ajustar__espacios")
    document.getElementById("salidaTexto").value = textoEncriptado;
    } else {
        alert ("Debe ingresar el texto")
    }
        
        

}

function desencriptar() {
    let texto = document.getElementById("textoUsuario").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("salidaTexto").value = textoDesencriptado;
}

function copiar() {
    let textoCopiado = document.getElementById("salidaTexto");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function validarTexto() {
    let input = document.getElementById("textoUsuario");
    let texto = input.value;
    let textoSinMayusculasYAcentos = texto.replace(/[A-ZÁÉÍÓÚáéíóú]/g, "");

    if (texto !== textoSinMayusculasYAcentos) {
        alert("No se permiten mayúsculas ni acentos.");
        input.value = textoSinMayusculasYAcentos;
    }
}



