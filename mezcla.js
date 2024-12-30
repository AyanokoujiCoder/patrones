// Este patron nos permite reutilizar funcionalidad sin utilizar herencia, 
// de hecho una buena practica en programacion es preferir la composicion antes que la herencia 

// En JavaScript, una mezcla (o mixin en inglés) es un patrón de diseño que permite añadir funcionalidades 
// a objetos o clases sin usar herencia. Las mezclas se utilizan para copiar propiedades y métodos 
// de un objeto o clase a otro, proporcionando una forma flexible de compartir código entre diferentes partes de un programa.

class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const persona = {
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

Object.assign(Estudiante.prototype, persona);

const estudiante = new Estudiante('Danna');
estudiante.saludar();

// Un ejemplo más:

// class Gadget {
// 	constructor(nombre, precio) {
// 		this.nombre = nombre;
// 		this.precio = precio;
// 	}
// }

// const info = {
// 	mostrarInfo: function () {
// 		console.log(`${this.nombre} tiene un precio de $${this.precio}`);
// 	}
// };

// Object.assign(Gadget.prototype, info);
// const iphone = new Gadget('iPhone', 999);
// iphone.mostrarInfo();