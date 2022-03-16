const getUsuarioById = (id, callback) => {
    const user = {
        id, nombre: 'Roberto'
    }
    setTimeout(() => {
        callback(user)
    }, 1500)
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})