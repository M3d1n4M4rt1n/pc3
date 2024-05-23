const personas = [
    { 
        nombre: "Angelo Urbano", 
        oficio: "Ingeniero" },
    { 
        nombre: "Franchesco de la Rosa", 
        oficio: "Ingeniero" },
    { 
        nombre: "Juan Sandoval", 
        oficio: "Electricista" },
    { 
        nombre: "Daniela Torres", 
        oficio: "Obstetra" },
    { 
        nombre: "Amelia Huaccha", 
        oficio: "Dentista" },
    { 
        nombre: "Jose Zegarra", 
        oficio: "Ingeniero" },
    { 
        nombre: "Maximiliana Pagano", 
        oficio: "Obstetra" }
];

function mostrarPersonas() {
    const lista = document.getElementById('lista-personas').querySelector('tbody');
    lista.innerHTML = ''; 
    personas.forEach(persona => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.oficio}</td>
            <td><button class="btn-contratar" data-nombre="${persona.nombre}">Contratar</button></td>
        `;
        lista.appendChild(fila);
    });
    agregarEventosContratar();
}


function agregarEventosContratar() {
    document.querySelectorAll('.btn-contratar').forEach(boton => {
        boton.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre');
            console.log(`Contratado: ${nombre}`);
            Swal.fire('Contratado', `Has contratado a ${nombre}`, 'success');
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    mostrarPersonas();
});
