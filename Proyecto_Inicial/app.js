//alert('Holaaa');
let numSecreto = Math.floor(Math.random()*10)+1;
let numUser = 0;
let intentos = 1;
/*let palabraVec = 'vez';*/
let maxIntentos = 3;

while (numUser != numSecreto) {
    numUser = parseInt(prompt("Ingresa un número entre 1 y 10:"));

    // Validar que la entrada del usuario sea un número válido
    if (isNaN(numUser)) {
        alert("Por favor, ingresa un número válido.");
    } else {
        if (numUser == numSecreto) {
            alert(`Acertaste el número es: ${numUser}. Lo adivinaste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`); 
            break; // Salir del bucle si el usuario adivina el número
        } else {
            if (numUser > numSecreto) {
                alert('El número es menor');
            } else {
                alert('El número es mayor');
            }

            intentos++; /*intentos = INTENTOS + 1 / INTENTOS += 1*/
            /*palabraVec = 'veces';*/

            if (intentos > maxIntentos) {
                alert(`Llegaste al número máximo de ${maxIntentos} intentos. El número secreto era ${numSecreto}.`);
                break; // Salir del bucle si se excede el número máximo de intentos
            }
        }
    }
}