const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/32e95c6c-e4f3-4705-90f3-15269fcbb862', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value,
            "Telefono": formulario.telefono.value,
            "Foto": formulario.foto.value
        })
    });
})