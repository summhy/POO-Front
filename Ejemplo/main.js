//promesa pendiente
//const data = fetch("./datos.txt")
//console.log(data)

let resultado2 = "vacio";

fetch("./datos.json").then(data=>data.json())
                    .then(resultado => {
                       // console.log(resultado)
                        //console.log(resultado.nombre    )
                        resultado2 = resultado;

                        console.log(resultado2)
                    
                    }
                        ) 
console.log(resultado2)

/* 
//promesa pendiente
fetch("./datos.json").then(data=>{
    let resultado = data.json()
    console.log(resultado)
})
 */
