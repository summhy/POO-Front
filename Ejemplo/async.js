
/*
fetch("./datos.json").then(data=>data.json())
                    .then(resultado => console.log(resultado)) 


fetch("./datos.json")
    .then(function(data){
                return data.json()
          })
        .then(function (resultado){
                    console.log(resultado)
            }) 
*/
async function lectura(){
    let data = await fetch("./datos.json");
    let resultado = await data.json()
    console.log(resultado)
}

lectura()