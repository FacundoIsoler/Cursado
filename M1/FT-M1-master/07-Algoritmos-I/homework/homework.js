'use strict'
// No cambies los nombres de las funciones.
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  /*
              array  [1]
180   |  2      array.push(2) ---> [1, 2]
90    |  2      array.push(2)---> [1, 2, 2]
45    |  3      array.push(3) ----> [1, 2, 2, 3]
15    |  3      array.push(3) ----> [1, 2, 2, 3, 3]
5     |  5      array.push(5) ----> [1, 2, 2, 3, 3, 5]
1

  */
 
  var array = [1];
  var primo = 2;
  while (num !== 1) {
    if (num % primo === 0){
      array.push(primo)
      num = num / primo
    } else {
      primo++
    }
  }
  return array
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: 

/*
array = [3, 5, 4, 2, 1]
         i
         j

                     primera vuelta = [3, 4, 2, 1, 5]
                                       i
                                       j
                    segunda vuelta = [3, 4, 2, 1, 5]
                                         i
                                         j
*/
/*  for (var i = 0; i < array.length; i++){   ----> 5
    for (var j= 0; j < array.length - 1 - i; j ++){ -----> 5 por cada uno de esos primeros 5 pasos
      if (array[j] > array[j+1]){  //swap
        var aux = array[j]
        array[j] = array[j+1]
        array[j+1] = aux
      }
    }
  }
return array*/

var swap = true
while (swap){
  swap = false
  for (var i = 0; i < array.length-1; i++){
    if (array[i] > array[i+1]){
      var aux = array[i+1]
      array[i+1] = array[i]
      array[i] = aux
      swap = true
    }
  }
}
return array

}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante

  // array = [3, 4, 5, 2, 1]
  //                i
  //          j
  // aux = 4
              
  // array = [1, 2, 3, 4, 5]

for (var i = 1; i < array.length; i++){
  var j = i -1
  var aux = array[i]
  while (j >= 0 && array[j] > aux){
    array [j+1] = array[j]
    j--
  }
  array[j+1] = aux
}
return array
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (var i = 0; i < array.length - 1; i ++) {
    var min = i 
    for ( var j = i + 1; j < array.length; j++){
      if (array[j] < array[min]){
        min = j 
      }
    }
   if (i != min){
    var aux = array[i]
    array[i] = array[min]
    array[min] = aux
   }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
