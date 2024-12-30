// Este patron nos va a permitir separar nuestro codigo en diferentes modulos 
// para reutilizarlo, esto va ayudar mucho en la mantenibilidad de un proyecto 
// porque cada modulo de un proyecto va a estar en diferentes archivos 

// Algo especial aqui es que cada declaración en cada uno de estos modulos va a ser encapsulada,
// esto quiere decir que estas declaraciones van a existir solo en el ambito de este modulo, esto
// previene la colicion de nombres en el ambito global y tambien previene la polucion de nombres,
// d¿es decir crear muchos nombres en el ambito global.

// Utilizamos la extencion .mjs porque Node JS solo me permite trabajar con modulos con esta extención

export function cuadrado(x) {
    privada.log(x * x);
    // console.log(x * x);
}

export function removerDuplicados(lista) {
    privada([...new Set(lista)]);
}

function privada(x) {
    console.log(x);
}

// export default removerDuplicados;