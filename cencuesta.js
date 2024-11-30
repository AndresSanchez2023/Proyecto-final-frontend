// Función para mostrar la ventana emergente
document.getElementById('guardarEncuesta').addEventListener('click', function() {
    document.getElementById('confirmacion').classList.remove('hidden');
});

// Funciones para manejar las acciones del popup
function guardarEncuesta() {
    alert('Encuesta guardada');
    window.location.href = 'portalEncuestas.html';  // Redirige al portal de encuestas
}

function editarEncuesta() {
    alert('Puedes editar la encuesta');
    document.getElementById('confirmacion').classList.add('hidden');
}

function cancelarEncuesta() {
    alert('Encuesta no guardada');
    document.getElementById('confirmacion').classList.add('hidden');
}
