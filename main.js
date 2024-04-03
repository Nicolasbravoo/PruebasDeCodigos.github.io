const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/e296ffed-8b51-411a-b60b-ad8af4dd04f4', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            'Nombre Completo': 'Ejemplo de nombre',
            'Fecha de Nacimiento': 'Ejemplo de Fecha',
            'Email': 'Ejemplo de Email',
            'Subir foto': 'Ejemplo de foto'
        })
    });
})