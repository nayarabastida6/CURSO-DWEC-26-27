// Ejercicio 1 de JavaScript
//


/*
console.log("Hola mundo")
// tipos de datos en Js-
//
// String
// '' "" `comillas francesas`
// var let const

let nombre = "Nayara"
let apellidos = "BR"
let aniosTrabajo = 2
console.log(`Hola a tod@s, me llamo ${nombre}, ${apellidos}` y llevo trabajando ${aniosTrabajo} años)
console.log(typeoff(String(aniosTrabajo)))
console.log(typeoff(Number(apellidos)))

// validaciones básicas == ===

// == <-- significa si el valor de la izquierda es igual al valor de la derecha
// === <-- significa si el valor y tipo de la izquierda coincide con el valor y tipo de la derecha
//
//
// '5' === 5 // <-- false
// '5' == 5 // <-- true

// ternarias: evaluación_expresion ? verdadero : falso
//



const edad = "23"

edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")
*/


// Dada la edad, los minutos y los segundos. Comprobar:
//  1.- Si la edad es un número positivo y mayor de 18 estricto
//  2.- Comprobar si la hora y minutos son validos dentro de mi numeración

const edad = 20
const hora = 10
const min = 37

edad>18 ? console.log("Tienes mas de 18 años") : console.log("No tienes mas de 18 años")
hora>=0 && hora<24 && min>=0 && min<60 ? console.log("Hora y minutos son validos") : console.log("Hora y minutos no validos")
