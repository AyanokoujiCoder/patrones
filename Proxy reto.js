// Mira este objeto 'jugador' que tiene 3 propiedades: 'nombre', 'nivel' y 'puntaje'. 
// Ahora, crea un proxy llamado 'controlJuego' para el objeto 'jugador' 
// en el cual se implementen los siguientes comportamientos:

// 1. Cuando se accede a la propiedad 'nivel', se debe mostrar en la consola 'Nivel obtenido: {nivel}'.
// 2. Cuando se cambia el valor de la propiedad 'puntaje', se debe mostrar en la consola 'Nuevo puntaje: {valor}'.

// Mi soclucion:

// const jugador = {
// 	nombre: 'Juan',
// 	nivel: 5,
// 	puntaje: 100
// };

// const controlJuego = new Proxy (jugador, {
// 	get: (objeto, propiedad) => {
// 		if (propiedad) {
// 			console.log(`Nivel obtenido: ${Reflect.get(objeto,propiedad)}`);
// 		}
// 		return objeto[propiedad];
// 	},
// 	set: (objeto, propiedad, valor) => {
// 		if (propiedad) {
// 			console.log(`Nuevo puntaje: ${Reflect.get(valor)}`);
// 		}
// 		objeto[propiedad] = valor;
// 	}
// });

// controlJuego.nivel;
// controlJuego.puntaje;

// Mejorado con Chat gpt:

const jugador = {
  nombre: 'Juan',
  nivel: 5,
  puntaje: 100
};

const controlJuego = new Proxy(jugador, {
  get: (objeto, propiedad) => {
    if (propiedad === 'nivel') {
      console.log(`Nivel obtenido: ${Reflect.get(objeto, propiedad)}`);
    }
    return Reflect.get(objeto, propiedad); // Mejor usar Reflect.get para mayor consistencia
  },
  set: (objeto, propiedad, valor) => {
    if (propiedad === 'puntaje') {
      console.log(`Nuevo puntaje: ${valor}`); // Corregido para mostrar el valor directamente
    }
    Reflect.set(objeto, propiedad, valor); // Usar Reflect.set para consistencia y seguridad
    return true; // Necesario para que la operación de set sea exitosa
  }
});

// Pruebas
controlJuego.nivel;   // Salida: Nivel obtenido: 5
controlJuego.puntaje = 200; // Salida: Nuevo puntaje: 200
controlJuego.puntaje; // Salida: 200
