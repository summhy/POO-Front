const listado = document.getElementById("listado")

function dibujarEstudiante(obj){
    //creación de elementos del dom
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    //personalización de elementos nuevos
    div.id = "div-"+obj.id;
    h1.innerHTML = obj.nombre + " " + obj.apellido
    //agregr h1 al div
    div.appendChild(h1);
    //agregr div al main
    listado.appendChild(div);
}

const persona = {"id":2,"nombre":"Rodrigo", "apellido":"Pequeño"};
dibujarEstudiante(persona)