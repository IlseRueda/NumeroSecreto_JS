/*Ahora estamos escribiendo los datos de h y p desde js*/
let numSecr = 0;
let intentos = 0;
let listNumSort = [];
let numMax = 10;

console.log(numSecr);/*para checar el num en inspeccionar*/

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';

function asignarTxtElem(elemento, texto){ /*Se encapsulo a una funcion */
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verIntento(){
    let numUser = parseInt(document.getElementById('valorUser').value);/*obtener el valor de id*/
    /*console.log(typeof(numUser));
    console.log(numSecr);
    console.log(typeof(numSecr));
    console.log(numUser);
    console.log(numUser === numSecr); /*Comparación true/false  doble igualdad*/
    console.log(intentos);
    if(numUser === numSecr){
        asignarTxtElem('p', `Acertaste el número en ${intentos} ${(intentos === 1)?'vez' : 'veces'}`);/*operador ternario, hace comparacion*/
        document.getElementById('reiniciar').removeAttribute('disabled');/*se habilita boton nuevo juego*/
    }else{
        /* El usuario no acertó*/
        if(numUser>numSecr){
            asignarTxtElem('p', 'El número secreto es menor');
        }else{
            asignarTxtElem('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){/*Cada que no atien el numero, se borra para ingresar otro */
   /* let valorCaja = document.querySelector('#valorUser');
    valorCaja.value = ''; manera mas larga*/
    /*manera mas corta*/
    document.querySelector('#valorUser').value = '';//valor del id
}

function genNumSecr(){/*Para generar un numero random del 1 al 10 */
    let numSecr = Math.floor(Math.random()*numMax)+1;
   //Si ya sorteamos todos los numeros
   if(listNumSort.length == numMax){
    asignarTxtElem('p', 'Ya se sortearon todos los numeros')
   }else{
    //Si el numero generado esta incluido en la lista
    if(listNumSort.includes()){ //si el num generado esta incluido en la lista
        return genNumSecr();
    }else{
        listNumSort.push(numSecr);
        return numSecr;
    }
   }
}
function msjsIni(){//encapsulado
    asignarTxtElem('h1', 'Juego del numero secreto');
    asignarTxtElem('p', `Indica un numero del 1 al ${numMax}` );
    numSecr = genNumSecr();
    intentos = 1;
}
function reiniJuego(){
    /*limpia caja
    indica mensaje de intervalo de numeros
    genera num aleatorio
    deshabilita el boto nuevo juego
    inicializa num de intentos*/
    
    limpiarCaja();
    msjsIni();
    document.querySelector('#reiniciar').setAttribute('disable','true');//se puede reiniciar el juego en cualquier momento
}

msjsIni();