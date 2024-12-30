const instancial1 = {};

const instancia2 = Object.create(Object.prototype);

const instancia3 = new Object();

// Constructor Pattern (Patrón de Constructor)

// El patrón de constructor en JavaScript se utiliza para crear objetos 
// específicos de un tipo o clase utilizando una función que actúa como 
// constructor. Este patrón se basa en el uso de la palabra clave this 
// para asignar propiedades al objeto recién creado y, a menudo, se 
// utiliza junto con la palabra clave new para instanciar objetos.

class Pelicula {
    constructor(nombre, año) {
        this.nombre = nombre;
        this.año = año;
    }

    toString() {
        return `La película ${this.nombre} es del año ${this.año}`;
    }
}

// Prototype Pattern (Patrón de Prototipo)

// El patrón de prototipo se basa en la reutilización de métodos y propiedades 
// a través de la cadena de prototipos de JavaScript. En lugar de definir métodos 
// dentro de la función constructora, se añaden al prototipo de la función. 
// Esto permite que todas las instancias compartan los mismos métodos, lo que ahorra memoria.

console.log(new Pelicula('Roma', 2018).toString());
console.log(new Pelicula('Twelve Monkeys', 1995).toString());
console.log(new Pelicula('The Fountain', 2006).toString());

// Asi es como se hacia tradicionalmente:

// function Pelicula(nombre, año) {
//     this.nombre = nombre;
//     this.año = año;
//     this.toString = function() {
//         return `La pelicula ${this.nombre} es el año ${this.año}`;
//     }
// }

// Crea un constructor llamado 'ObraDeArte' que acepte dos parámetros: 'titulo' y 'autor'. 
// Dentro del constructor, asigna estos parámetros a las propiedades correspondientes 
// del objeto creado. Luego, agrega un método llamado 'mostrarDetalles' que devuelva 
// un mensaje con el título y el autor de la obra de arte.

// La forma tradicional con funciones constructoras sigue siendo válida y funcional en JavaScript, 
// pero la introducción de clases en ES6 ofrece una sintaxis más moderna, limpia y manejable.

// function ObraDeArte(titulo, autor) {
//     this.titulo = titulo;
//     this.autor = autor;
    
//     this.mostrarDetalles = function() {
// 	return this.titulo + ' fue creado por ' + this.autor;
//   }
// }

// Comparación con el Enfoque Moderno (ES6+):

// class ObraDeArte {
//     constructor(titulo, autor) {
//         this.titulo = titulo;
//         this.autor = autor;
//     }

// mostrarDetalles() {
//         return `${this.titulo} fue creado por ${this.autor}`;
//     }
// }

// Sintaxis Más Clara y Concisa: La sintaxis de clases en ES6 es más clara y más fácil de entender para quienes provienen de otros lenguajes de programación orientados a objetos.

// Prototipos y Métodos: Con el enfoque de clases, los métodos como mostrarDetalles se definen automáticamente en el prototipo de la clase, lo que hace que todas las instancias compartan el mismo método en lugar de crear una nueva función para cada instancia (como sucede con las funciones constructoras tradicionales).

// Herencia Más Sencilla: Las clases en ES6 introducen una sintaxis más limpia para manejar la herencia con la palabra clave extends.

// No declares métodos dentro del constructor de JavaScript. En su lugar, agrega los métodos 
// directamente al prototipo del objeto. Esto evita la creación de múltiples funciones cada 
// vez que se crea una nueva instancia del objeto, ahorrando memoria y mejorando el rendimiento.