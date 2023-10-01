document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8" // Agrega charset=UTF-8
        },
        body: JSON.stringify(data)

    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:", data);
        alert("Registro exitoso. ID del usuario: " + data.id);
    })
    .catch(error => {
        console.error("Error al enviar datos:", error);
        alert("Error al enviar datos. Por favor, inténtalo de nuevo.");
    });
});