
function imprimir() {

    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var asunto = document.getElementById("asunto");
    var correo = document.getElementById("correo");

    var error = [];

    if (nombre.value === null || nombre.value === "") {
        error.push("Ingresa tu Nombre");
    }
    if (email.value === null || email.value === "") {
        error.push("Ingresa tu Email");
    }
    if (asunto.value === null || asunto.value === "") {
        error.push("Ingresa tu Asunto");
    }
    if (correo.value === null || correo.value === "") {
        error.push("Ingresa tu Correo");
    }
    if (nombre.value !== "" && email.value !== "" && asunto.value !== "" && correo.value !== "") {
        console.log(nombre.value);
        console.log(email.value);
        console.log(asunto.value);
        console.log(correo.value);
        alert("INGRESO EXITOSO");
    }
    if (error.length !== 0) {
        alert(error.join(", "));
    }
}
