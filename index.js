const empleados = [
  {
    id: 1,
    nombre: "Jonathan",
    telefono: "1234343",
  },

  {
    id: 2,
    nombre: "santiago",
    telefono: "1234343",
  },

  {
    id: 3,
    nombre: "Jonathan",
    telefono: "1234343",
  },
];

const salarios = [
  {
    id: 1,
    salarios: 100000,
  },

  {
    id: 2,
    salarios: 200000,
  },

  {
    id: 3,
    salarios: 30000,
  },
];

// funcion para devolver el nombre del empleado dependiendo del ID que tenga en el array
// luego ingresamos una funcion dentro de una promesa

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find(emp => emp.id === id); // metodo .filter  y .find para filtrar y buscar en un array

    if (empleado) {
      setTimeout(() => {
        resolve(empleado);
      }, 4000);
    }
    else{
      reject(`El empleado con Id: ${id} no se encuentra registrado`);
    }
  });
};

// para ejecutar una promesa necesitamos llamar el metodo .then
getEmpleado(2)
  .then(empleado=> console.log(empleado))
  .catch(error=> console.log(error));


  const getSalario = (id) => {
    return new Promise((resolve, reject) => {
      const salario = salarios.find(emp => emp.id === id); // metodo .filter  y .find para filtrar y buscar en un array
  
      if (salario) {
        setTimeout(() => {
          resolve(salario);
        }, 8000);
      }
      else{
        reject(`El empleado con Id: ${id} no tiene salario registrado`);
      }
    });
  };
  

  // para ejecutar una promesa necesitamos llamar el metodo .then
   // para manejar los errores una promesa lo hacemos con el metodo .catch
  getSalario(1)
    .then(salario=> console.log(salario))
    .catch(error=> console.log(error));  
  
  