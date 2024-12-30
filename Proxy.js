// Este patron de diseño te permite leer y modificar un objeto de forma indirecta, 
// El objeto Proxy permite crear un objeto que se puede utilizar en lugar del objeto 
// original, pero que puede redefinir operaciones fundamentales de objetos como obtener, 
// configurar y definir propiedades . Los objetos Proxy se utilizan comúnmente para 
// registrar accesos a propiedades, validar, formatear o sanear entradas, etc.

const persona = {
    nombre: "Oswaldo Guayasamin",
    edad: 80
};

const mensajero = new Proxy(persona, {
    get: (objeto, propiedad) => {
        // Algo recomendado cuando trabajamos con proxys es no acceder ni modificar 
        // el objeto difectamente, para eso tenemos otro objeto que se llama reflect
        console.log(`El valor es ${Reflect.get(objeto,propiedad)}`);
        // console.log(`El valor es ${objeto[propiedad]}`);
    },
    set: (objeto, propiedad, valor) => {
        // Vamos a poner una validacion, voy a poner si es que no hay valor voy a lanzar un error.
        if (!valor) { throw new Error('Necesita un valor!'); }
        console.log(`Cambiado de ${Reflect.get(objeto,propiedad)} a ${valor}`);
        // console.log(`Cambiando de ${objeto[propiedad]} a ${valor}`);
        Reflect.set(objeto, propiedad, valor);
    }
});

// Ejemplos de Trampas (Traps) Comunes
// get: Intercepta operaciones de lectura de propiedades.
// set: Intercepta operaciones de escritura en propiedades.
// has: Intercepta la operación de in.
// deleteProperty: Intercepta la eliminación de propiedades (delete).
// apply: Intercepta la llamada a funciones.

// Aqui descomentando imprimimos el error
// mensajero.nombre = "";
mensajero.nombre = "Fito Paez";
// Comentar:
mensajero.nombre;
mensajero.nombre = "";

// Uso de Proxies

// Los proxies son útiles en muchos casos, como:

// Validación de datos: Asegurar que los datos cumplen con ciertos requisitos antes de ser almacenados.

// Depuración: Loguear o depurar accesos y modificaciones de propiedades.

// Creación de objetos observables: Implementar la reactividad en frameworks de JavaScript como Vue.js.

// Control de acceso: Proteger ciertos atributos o métodos de acceso no autorizado.

// La diferencia de usar Reflect y no utilizarlo es algo que no tiene mucho valor 
// practico pero es como se debe de trabajar dentro de un proxy ya que al utilizar 
// Reflect estamos accediendo al valor exacto de una propiedad  