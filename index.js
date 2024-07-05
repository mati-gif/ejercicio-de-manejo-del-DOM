
//1. Capturar el H1, mediante un ID, en una variable llamada "titulo". 

let titulo = document.getElementById("main-tittle");
console.log(titulo);

//2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas"
// y cambiar el contenido del título por el de esta variable.

let tituloPrincipal = "frutas";


//forma de hacerlo 1 :
titulo.innerHTML = "frutas";
titulo.classList.add("text-4xl");
titulo.classList.add("text-red-500");



//forma de hacerlo 2 :
// titulo.innerHTML = tituloPrincipal;

//forma de hacerlo 3 :
// titulo.textContent = tituloPrincipal;


//forma de hacerlo 4 :
// titulo.innerText = "frutas"







//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja. 




//1ra forma de hacerlo:

// let headerYFooter = document.querySelectorAll(".color") ;
// header[1].style.backgroundColor = "orange" ;
// header[0].style.backgroundColor = "green" ;
// console.log(headerYFooter);



//2da forma de hacerlo:
// let header = document.querySelectorAll(".color") ;

// for(let i = 0 ; i < header.length ; i++ ){

//     header[i].style.backgroundColor = "orange" ;

// }



//3ra forma de hacerlo:

// let header = document.querySelector("header.color");

// header.style.backgroundColor = "red" ;

// console.log(header)

// footer = document.querySelector("footer.color");

// header.style.backgroundColor = "red" ;

// console.log(footer);


//4ta forma de hacerlo:

let header = document.querySelector("header.color");
let footer = document.querySelector("footer.color");
header.classList.add("bg-orange-500");
footer.classList.add("bg-orange-500");


//practicando (no forma parte del ejercicio).
// let edad = Number(prompt("ingrese su edad"));
// if(edad >= 20){
//     header.classList.remove("bg-orange-500");
//     footer.classList.remove("bg-orange-500");

// }

//--4 Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 


//1ra forma de hacerlo:
let parrafo = document.querySelector("footer p");
parrafo.innerHTML = " Matias  MindHub cohort 55";
console.log(parrafo);

//2daforma de hacerlo:
// let paragraphe = footer.querySelector("p");
// console.log(paragraphe.innerText);
// paragraphe.innerHTML = " Matias  MindHub cohort 54"
// console.log(paragraphe);

//--5.Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id.;

let main = document.querySelector(".main");
let nuevoDiv = document.createElement("div");
nuevoDiv.id = "contenedor";
main.appendChild(nuevoDiv);
console.log(nuevoDiv);

let divCreado = document.getElementById("contenedor");

//-- 6:  Crear una función que devuelva la estructura de una card.
// La función debe devolver un string para más adelante utilizar innerHTML. 
//(La card debe contener los siguientes datos: nombre, foto y descripción). 


function cardEstructure(nombre,foto,descripcion){

    let card = `
    <div class="w-52 border-black border-4 m-5 max-h-fit flex flex-col justify-center items-center p-2">
    <h3>
    ${nombre}
    </h3>
    <img src =${foto} class="w-28 h-object-cover"  alt = ${nombre}/> 
    <p>
    ${descripcion}
    </p>
    </div>

    `

    return card;

}



//7. Con el archivo data que se encuentra en la carpeta, 
//realizar un bucle para crear cards con los datos de las frutas, 
//utilizando la función del punto 6. (Este bucle podría meterse en otra función 
//y recibir el array por parámetro).


// let divCard = document.getElementById("contenedor");


// for(let i = 0; i <= frutas.length;i++ ){

//     let respuesta = cardEstructure(frutas[i].nombre,frutas[i].foto, frutas[i].descripcion);

//     divCard.innerHTML += respuesta;

// }





let divCard = document.getElementById("contenedor");
divCard.classList.add("w-full");
divCard.classList.add("border-red-500" );
divCard.classList.add("border-4");
divCard.classList.add("flex");
divCard.classList.add("justify-center");
divCard.classList.add("flex-wrap");
divCard.classList.add("gap-10");


console.log(divCard)


for(let i = 0 ; i < frutas.length; i++){


    let arrayFrutas = cardEstructure(frutas[i].nombre,frutas[i].foto,frutas[i].descripcion);

    divCard.innerHTML += arrayFrutas;


}


//9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id.
// Agregar al div el título "Frutas Dulces".

    main = document.querySelector(".main");
    let divListaFrutas = document.createElement("div");
    divListaFrutas.id = "lista";
    divListaFrutas.innerHTML = "<h4>Frutas Dulces</h4>";
    main.appendChild(divListaFrutas);

    let ultimoDivCreado = document.getElementById("lista");
    console.log(ultimoDivCreado);


    //10. Crear una función que reciba un array y devuelva una lista desordenada
    //utilizando nodos (createElement).
    //Cada elemento de la lista será el nombre de una fruta.
    //Para esta lista usar las frutas cuya propiedad "esDulce" sea true. 


function listaDesordenada (nombre){


    let cartas = `
    
        <li> ${nombre}</li>
    `


    return cartas

}

let ul = document.createElement("ul");//creo la etiqueta ul
ul.id = "ul-list"// le creo un id a la etiqueta ul

console.log(ul);

ultimoDivCreado.appendChild(ul)// coloco el ul con todos los li dentro del div con el idlista (es el ultimo div que creamos)


for(let i = 0; i < frutas.length;i++){


    if(frutas[i].esDulce == true){
    let todasLasFrutas = listaDesordenada(frutas[i].nombre);
    ul.innerHTML += todasLasFrutas;
    }


}

//no forma parte del ejercicio:es para ver que elementos no deben estar dentro del ul 
// for(let i = 0; i <= frutas.length;i++ ){
// if(frutas[i].esDulce == false){
// console.log(frutas[i].id,frutas[i].nombre,frutas[i].esDulce)

// }

// }



//INTENTO 2 :

function listaDesordenadaa (nombre){

    let lii = document.createElement("li");

    lii.innerHTML = nombre


    return lii;
}



let ull = document.createElement("ul");
ull.id = "ul-listtt";
console.log(ull);

ultimoDivCreado.appendChild(ull)


for(let i = 0; i < frutas.length;i++){


    if(frutas[i].esDulce == true){
    let todasLasFrutass = listaDesordenadaa(frutas[i].nombre);
    ull.appendChild(todasLasFrutass);
    }


}


//INTENTO 3 :

function listaDesordenadaaa (nombre){
    let listaDeNombres = [];

    let liii = document.createElement("li");

    liii.innerHTML = nombre

listaDeNombres.push("li");
console.log(listaDeNombres)

    return liii;
}


let ulll = document.createElement("ul");
ulll.id = "ul-listttt";
console.log(ulll);

ultimoDivCreado.appendChild(ulll)

for(let i = 0; i < frutas.length;i++){


    if(frutas[i].esDulce == true){
    let todasLasFrutasss = listaDesordenadaaa(frutas[i].nombre);
    ulll.appendChild(todasLasFrutasss);
    }


}


//11. Mostrar la lista de frutas dulces en el div "#lista". 

divListas = document.getElementById("lista");

divListas.classList.add("bg-lime-400");
divListas.classList.add("flex");
divListas.classList.add("flex-col");
divListas.classList.add("gap-10");

ul__list = document.getElementById("ul-list");
ul__list.classList.add("bg-red-400")
ul__list.classList.add("list-disc")
ul__list.classList.add("p-20")
ul__list.classList.add("flex");
ul__list.classList.add("flex-col");
ul__list.classList.add("gap-10");
ul__list.classList.add("text-lg");

console.log(divListas);







