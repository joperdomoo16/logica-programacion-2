// Esperamos a que la pagina cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("temperatureForm");
    var input = document.getElementById("celsiusInput");
    var errorContainer = document.getElementById("errorContainer");
    var resultContainer = document.getElementById("resultContainer");
    var kelvinResult = document.getElementById("kelvinResult");
    var fahrenheitResult = document.getElementById("fahrenheitResult");

    // Evento al enviar el formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Ocultamos los mensajes en cada intento
        errorContainer.classList.add("d-none");
        resultContainer.classList.add("d-none");

        // Obtenemos y limpiamos el texto ingresado
        var inputValue = input.value.trim();
        var celsius = Number(inputValue);

        // Verificamos si es un numero invalido o si esta vacio
        if (inputValue === "" || isNaN(celsius)) {
            errorContainer.classList.remove("d-none");
            console.error("Error. Los datos de entrada no son validos.");
            input.value = "";
            input.focus();
            return;
        }

        // Calculamos las conversiones
        var kelvin = celsius + 273.15;
        var fahrenheit = (celsius * 9 / 5) + 32;

        // Pasamos los datos al HTML
        kelvinResult.textContent = kelvin;
        fahrenheitResult.textContent = fahrenheit;
        resultContainer.classList.remove("d-none");

        // Imprimimos los resultados en la consola como pide el ejercicio
        console.log("Grados Kelvin: " + kelvin);
        console.log("Grados Fahrenheit: " + fahrenheit);
    });
});
