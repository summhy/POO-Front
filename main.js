const listado = document.getElementById("listado")

function dibujarEstudiante(obj){
    //creación de elementos del dom
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    //personalización de elementos nuevos
    div.id = "div-"+obj.id;
    h1.innerHTML = obj.nombre + " " + obj.apellido
    p.innerHTML = obj.descripcion
    //agregr h1 y p al div, considerar que el orden afecta
    div.appendChild(h1);
    div.appendChild(p);
    //agregr div al main
    listado.appendChild(div);
}

async function lectura(){
    let data = await fetch("curso.json");
    let resultado = await data.json();
    console.log(resultado)

    resultado.participantes.forEach(element => {
        dibujarEstudiante(element)
    });
    //const persona = {"id":2,"nombre":"Rodrigo", "apellido":"Pequeño", "descripcion": "Me gusta dibujar, tocar el bajo y dedicar serenatas"};

}



lectura()



