// Modifica este juego usando el patrón Singleton en JavaScript. 
// El juego permite a un jugador lanzar un dado y mostrar el resultado.
// La implementación del Singleton debe asegurar que solo haya una 
// instancia del objeto 'Juego' en todo momento (que no es el caso aquí).

// class Juego {
// 	constructor() {
// 		this.resultado = null;
// 	}

// 	lanzarDado() {
// 		this.resultado = Math.floor(Math.random() * 6) + 1;
// 		return this.resultado;
// 	}
// }

// const juego = new Juego();
// export { juego };

// El patrón singleton, también conocido en español como patrón 
// de instancia única, proporciona un punto de acceso global y es 
// un patrón de diseño utilizado para manejar clases e instancias. 

// Única Instancia:

// El patrón Singleton asegura que solo exista una única instancia 
// de una clase. Cualquier intento de crear una nueva instancia 
// devuelve la instancia existente.

// Esto nos permite, además de crear una instancia global, bloquear 
// la posibilidad de crear una nueva, aunque sea por error.

// Acceso Global:

// Ofrece un punto de acceso global a esa instancia única. Esto significa 
// que cualquier parte del código puede acceder a la misma instancia del Singleton.

// Control de Recursos:

// Es útil para gestionar recursos que deben ser únicos, como configuraciones globales, 
// conexiones a bases de datos, o el estado de una aplicación.

// Modificamos:

const juego = {
    resultado: null,
        
lanzarDado() {
    this.resultado = Math.floor(Math.random() * 6) + 1;
        return this.resultado;
    }
};

Object.freeze(juego);
export { juego };

// Object.freeze() se usa para congelar el objeto juego, evitando que se modifiquen sus 
// propiedades. En un Singleton, esto es útil para asegurar que la única instancia 
// del objeto no pueda ser alterada después de su creación.

// ¿Por Qué Usar Singleton?

// Consistencia: Asegura que los datos y estados compartidos sean consistentes a lo largo de la aplicación.

// Control: Facilita el control sobre los recursos limitados, como conexiones a bases de datos.

// Acceso Global: Proporciona un punto de acceso centralizado a los recursos o funcionalidades.

// Entonces, ¿exactamente qué hace el patrón singleton? Lo que hace este patrón es ayudarnos 
// a asegurar que todas las piezas de un proyecto usen una única instancia de una clase. 
// Es decir, en vez de instanciar la clase en cada pieza que queramos que la utilice, 
// guardamos una instancia y la llamamos directamente.

// Singleton puede tener desventajas, como la dificultad de realizar pruebas unitarias 
// debido a la dependencia global y el riesgo de acoplar demasiado el código a una instancia global.

// Enlace: https://keepcoding.io/blog/el-patron-singleton/#:~:text=El%20patr%C3%B3n%20singleton%2C%20tambi%C3%A9n%20conocido,a%20las%20que%20llamamos%20instancias.