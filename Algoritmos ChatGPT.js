// Chat gpt "Pront". Dame el código para un algoritmo de ordenamienti en JavaScript.

function bubbleSort(array) {
    let n = array.length;
    // Bucle para cada pasada
    for (let i = 0; i < n - 1; i++) {
      // Bucle para comparar e intercambiar elementos adyacentes
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Intercambiar los elementos si están en el orden incorrecto
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  
  // Ejemplo de uso
  let lista = [64, 34, 25, 12, 22, 11, 90];
  console.log("Lista desordenada: " + lista);
  let listaOrdenada = bubbleSort(lista);
  console.log("Lista ordenada: " + listaOrdenada);
  

//   Este código de ordenamiento es ideal para entender los conceptos básicos de algoritmos 
//   de ordenación, aunque existen algoritmos más eficientes para listas grandes, como el 
//   ordenamiento rápido (Quick Sort) o el ordenamiento por mezcla (Merge Sort).