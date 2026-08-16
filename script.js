const generar = document.getElementById("generar");
const copiar = document.getElementById("copiar");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");

generar.addEventListener("click", generarPassword);

function generarPassword() {

    const longitud = parseInt(document.getElementById("longitud").value);

    const mayusculas = document.getElementById("mayusculas").checked;
    const minusculas = document.getElementById("minusculas").checked;
    const numeros = document.getElementById("numeros").checked;
    const simbolos = document.getElementById("simbolos").checked;

    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caracteresNumeros = "0123456789";
    const caracteresSimbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let caracteres = "";

    if (mayusculas) {
        caracteres += caracteresMayusculas;
    }

    if (minusculas) {
        caracteres += caracteresMinusculas;
    }

    if (numeros) {
        caracteres += caracteresNumeros;
    }

    if (simbolos) {
        caracteres += caracteresSimbolos;
    }

    if (caracteres === "") {
        password.value = "";
        mensaje.textContent = "Selecciona al menos una opción.";
        return;
    }

    if (longitud < 4 || longitud > 50) {
        password.value = "";
        mensaje.textContent = "El tamaño debe estar entre 4 y 50 caracteres.";
        return;
    }

    let resultado = "";

    for (let i = 0; i < longitud; i++) {
        const posicion = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[posicion];
    }

    password.value = resultado;
    mensaje.textContent = "¡Contraseña generada correctamente!";
}

copiar.addEventListener("click", function() {

    if (password.value === "") {
        mensaje.textContent = "Primero genera una contraseña.";
        return;
    }

    navigator.clipboard.writeText(password.value);

    mensaje.textContent = "¡Contraseña copiada!";
});