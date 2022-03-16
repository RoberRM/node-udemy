const empleados = [
    {
        id: 1,
        nombre: 'Roberto'
    },
    {
        id: 2,
        nombre: 'Marina'
    },
    {
        id: 3,
        nombre: 'Rodofredo'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id, callback) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    });
}

const getSalario = (id, callback) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((e) => e.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe salario con id ${id}`);
    });
}

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de: ${salario}`;
    } catch (error) {
        return error;
    }
}
const id = 3;
getInfoUsuario(id)
    .then( msg => console.log(msg))
    .catch( err => console.log(err));


