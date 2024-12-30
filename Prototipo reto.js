class Receta {
	constructor(nombre, ingredientes) {
		this.nombre = nombre;
		this.ingredientes = ingredientes;
	}

	mostrarNombre() {
		console.log(this.nombre);
	}
    mostrarIngredientes() {
		console.log(this.ingredientes);
	}
}

const receta = Object.create(Receta.prototype);
receta.mostrarIngredientes();