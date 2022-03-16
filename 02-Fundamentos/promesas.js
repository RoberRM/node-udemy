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

const id=3;
/* getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => console.log(`El usuario: ${empleado} tiene un salario de: ${salario}`))
            .catch(error => console.log(error));
    })
    .catch(error => console.log(`${error}`)); */

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log(`El usuario ${nombre} tiene un salario de: ${salario}`))
    .catch(err => console.log(err))