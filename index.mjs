// import { cuadrado, removerDuplicados, privada } from './modulo.mjs';

// cuadrado(2);
// removerDuplicados([1, 2, 3, 3, 3, 4])
// privada('a');

// Vemos un error de sintaxys, dice que el modulo mjs no esta exportando 
// en nombre privada y con esto puedes ver que hemos creado una funcion 
// privada que solo funciona dentro del modulo 

import { cuadrado as cuadradoNumero, removerDuplicados } from './modulo.mjs';

// El as en la importación de módulos de JavaScript se utiliza para renombrar una 
// exportación durante el proceso de importación. Esta característica es útil cuando 
// se desea evitar conflictos de nombres o cuando se quiere utilizar un nombre más 
// descriptivo o conveniente en el archivo actual.

cuadradoNumero(2);
removerDuplicados([1, 2, 3, 3, 3, 4])

// Algo mas que nos permite hacer este patron es evitar coliciones de nombres 

function cuadrado() {
    console.log('colision');
}

// Ir a modulo para cambiar a este codigo terminando con el ejemplo de arriba

// export function cuadrado(x) {
//     privada.log(x * x);
// }

// Al agregar en nuestro modulo: export default removerDuplicados;

// import principal, { cuadrado } from './modulo.mjs';

// cuadrado(2);
// principal([1, 2, 3, 3, 3, 4]);

// Algo mas que podemos hacer es exportar el modulo completo:

// El asterisco "*" significa exportar todo

// import * as modulo from './modulo.mjs';

// modulo.cuadrado(2);
// modulo.removerDuplicados([1, 2, 3, 3, 3, 4]);

// Tambien podemos usarlo dinamicamente, imagina que en tu aplicacion no 
// necesitas este modulo hasta que llegues en una situacion muy especifica.

// import('./modulo.mjs').then(modulo => {
//     modulo.cuadrado(2);
//     modulo.removerDuplicadosDuplicados([1, 2, 3, 3, 3, 4]);
// });

// o

// const modulo = await import('./modulo.mjs');

// modulo.cuadrado(2);
// modulo.removerDuplicados([1, 2, 3, 3, 3, 4]);

// Este patron es BASTANTE UTIL cuando estas creando aplicaciones grandes 
// especialmente si estas creando una aplicacion de React 