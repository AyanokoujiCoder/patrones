// El patrón Singleton es un patrón de diseño en JavaScript (y otros lenguajes de programación) 
// que restringe la creación de instancias de una clase a una única instancia. 
// Esto significa que siempre que intentes crear una instancia del Singleton, 
// obtendrás la misma instancia.

let contar = 0;

const contador = {

    getInstancial() {
        return this;
    },

    getContar() {
        return contar;
    },

    incrementar() {
        return ++contar;
    }
}

Object.freeze(contador);

export { contador };

// Este patron esta siendo considerado como un patron antipatron 

// Problemas de prueba: Puede dificultar las pruebas unitarias debido a su estado global compartido.

// Acoplamiento global: Puede aumentar el acoplamiento entre diferentes partes de la aplicación, 
// ya que todos dependen de una única instancia global.

// Problemas de concurrencia: En aplicaciones multihilo, como en Node.js, puede ser necesario 
// agregar bloqueos o mecanismos de sincronización para evitar problemas de concurrencia.