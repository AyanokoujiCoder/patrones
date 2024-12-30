class Alexa {
    constructor(version) {
        this.version = version;
    }

    // constructor(version): Es un método especial para crear e inicializar 
    // un objeto creado a partir de una clase. En este caso, el constructor 
    // toma un parámetro version y lo asigna a una propiedad del objeto this.version.

    saludar() {
        console.log("Hola, soy Alexa!");
    }
}

// new Alexa("1"): Crea una nueva instancia de la clase Alexa con la versión "1". 
// Lo mismo ocurre con alexa2 y alexa3 con versiones "2" y "3" respectivamente.

const alexa1 = new Alexa("1");
const alexa2 = new Alexa("2");
const alexa3 = new Alexa("3");

// class EchoDot extends Alexa: Define una clase EchoDot que hereda de la clase Alexa. 
// Esto significa que EchoDot tendrá todas las propiedades y métodos de Alexa.

class EchoDot extends Alexa {
    // constructor(version): El constructor de EchoDot también toma un parámetro version. 
    // Usa super(version) para llamar al constructor de la clase padre (Alexa) y pasarle el parámetro version.
    constructor(version) {
        super(version);
    }

    apagar() {
        console.log("Buenas noches!");
    }
}

// new EchoDot("1"): Crea una nueva instancia de la clase EchoDot con la versión "1". 
// Esta instancia tendrá tanto el método saludar (heredado de Alexa) como el método apagar (definido en EchoDot).
const echoDot = new EchoDot("1");

// echoDot.saludar();
// echoDot.__proto__.saludar();
// echoDot.__proto__.__proto__.saludar();

// echoDot.apagar();
// echoDot.__proto__.apagar();
// echoDot.__proto__.__proto__.apagar();

const echoDot2 = Object.create(EchoDot.prototype);
echoDot2.apagar();