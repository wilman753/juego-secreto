let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



// // * Desafíos

// // ? Crea una lista vacía llamada "listaGenerica".

//     let listaGenerica = [];
//     // console.log(listaGenerica);

// // ? Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

//     let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
//     // console.log(lenguagesDeProgramacion);

// // ? Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

//     lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');
//     // console.log(lenguagesDeProgramacion);

// // ? Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

//     function mostrarFuncion() {
//         let i = 0;
//         while(i<lenguagesDeProgramacion.length){
//             console.log(lenguagesDeProgramacion[i]);
//             i++;
//         }
        
//     }

//     mostrarFuncion();

// // ? Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

//     function mostrarFuncionReversa() {
//         let reverso = lenguagesDeProgramacion.reverse();
//         let i = 0;
//         while(i<reverso.length){
//             console.log(reverso[i]);
//             i++;
//         }
//     }
//     mostrarFuncionReversa();

// // ? Crea una función que calcule el promedio de los elementos en una lista de números.

//     function calcularPromedio(numeros) {
//         // Si está vacío no divide por 0
//         if(numeros.length === 0){
//             return 0;
//         }
//         // inicializar suma en cero
//         let suma = 0;

//         //Calcular suma
//         let i = 0;
//         while(i < numeros.length){
//             suma += numeros[i];
//             i++;
//         }
//         //Calcular promedio

//         let promedio = suma / numeros.length;
//         return promedio;

//     }

//     let listaNumeros = [10, 20, 30, 40, 50];
//     console.log(calcularPromedio(listaNumeros));

// // ? Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

//     function numerosMaxMin (numeros){
//         let max = Math.max(...numeros);
//         let min = Math.min(...numeros);
        
//         console.log(`El número más grande es ${max}`);
//         console.log(`El número más pequeño es ${min}`);

//     }

//     let listado = [8, 1, 5, 20];
//     numerosMaxMin(listado);

// // ? Crea una función que devuelva la suma de todos los elementos en una lista.

//     function suma (numeros){
//         if(numeros.length === 0){
//             return 0;
//         }

//         let suma = 0;
//         let i = 0;

//         while (i<numeros.length){
//             suma += numeros[i];
//             i++;
//         }
//         return suma;
//     }
//     console.log(suma(listado));

// // ? Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

//     function posicion (elemento){
//         return listaPalabras.indexOf(elemento);
//     }

//     let listaPalabras = ["perro", "gato", "loro", "arroz"]
//     console.log(posicion("loro"));

// // ? Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

//     function sumarLista (lista1, lista2){
    
//     if(lista1.length!=lista2.length){
//         return "El tamaño de las listas no es igual"
//     }

//     let suma = 0;
//     let i = 0;
//     let listaTotal = [];
//     while(i<lista1.length){
//         suma = lista1[i]+lista2[i]
//         listaTotal.push(suma);
//         i++
//     }
//     return listaTotal;
//     }
//     let lista1 = [5, 7, 6];
//     let lista2 = [9, 12, 15];
//     console.log(sumarLista(lista1, lista2));

// // Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

//     function listaCuadrado (numero){
//         let resultado = 0;
//         let i = 0;
//         let cuadrado = [];
//         while(i<numero.length){
//             resultado = numero[i]**2;
//             cuadrado.push(resultado);
//             i++;
//         }
//         return cuadrado;
//     }

//     let listCua = [5, 2, 3];
//     console.log(listaCuadrado(listCua));