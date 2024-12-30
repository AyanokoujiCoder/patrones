class Alexa {
    constructor(version) {
        this.version = version;
    }

    saludar() {
        console.log("Hola, soy Alexa!");
    }
}

const alexa1 = new Alexa("1");
const alexa2 = new Alexa("2");
const alexa3 = new Alexa("3");

// Esto me da acceso directo a las propiedades y metodos del prototipo
Alexa.prototype.saludar();

// Cada objeto va a tener una propiedad que se llama proto y esta propiedad apunta directamente al prototipo donde se creo esta Estancia
alexa1.saludar();
alexa1.__proto__.saludar();

// Prototipos en JavaScript: En JavaScript, casi todos los objetos tienen un prototipo.
// Un prototipo es simplemente otro objeto del cual el objeto original puede heredar 
// propiedades y métodos. Este mecanismo se llama "herencia prototípica".

// Propiedad __proto__: Cada objeto en JavaScript tiene una propiedad interna llamada 
// [[Prototype]] (a menudo accesible como __proto__). Esta propiedad apunta al prototipo 
// del objeto, es decir, al objeto del cual se hereda.

// Prototipo del Constructor: Cuando creas un objeto a través de un constructor 
// (por ejemplo, usando new con una función constructora), el [[Prototype]] 
// del objeto creado se establece en prototype de la función constructora.