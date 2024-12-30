// Este es uno de los patrones de diseño mas populares.

let contar = 0;
let instancia;

class Contador {
  constructor() {
    if (instancia) {
      throw new Error("Solo puedes tener una instancia!");
    }
    instancia = this;
  }

  getInstancia() {
    return this;
  }

  getContar() {
    return contar;
  }

    incrementar() {
      return ++contar;
    }
  }

  const contador1 = new Contador();
  const contador2 = new Contador();

  console.log(contador1.getInstancia() === contador2.getInstancia());

  // Veremos que se imprime el error y es justo lo que queremos que se imprima
  // Podemos ver que ya tenemos un patron Singleton