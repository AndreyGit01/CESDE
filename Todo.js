const Programar = ()=>{
    const tarea = document.getElementById('tarea').value;
    const listado = document.getElementById('pendientes');

    listado.innerHTML += `<li>${tarea}</li>`;
}

const boton =  document.getElementById('btnProgramar');
boton.addEventListener('click', Programar());
