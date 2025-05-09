document.querySelector("form").addEventListener("submit", function (e) { e.preventDefault();
    const nombre = this.querySelector('input[placeholder="Nombre"]').value.trim();
    const apellidos = this.querySelector('input[placeholder="Apellidos"]').value.trim();
    const correo = this.querySelector('input[placeholder="Correo"]').value.trim();
    const direccion = this.querySelector('input[placeholder="Dirección"]').value.trim();
    const consulta = this.querySelector('textarea').value.trim();
    
    if (!nombre || !apellidos || !correo || !direccion || !consulta) {
        alert("Por favor, rellena todos los campos.");
        return;
    }

    alert("Gracias por contactar con nosotros. Pronto responderemos tu consulta.");
    this.reset();
});
