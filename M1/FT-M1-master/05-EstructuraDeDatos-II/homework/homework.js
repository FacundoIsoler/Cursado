"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function Node(value) {
  this.value = value,
  this.next = null;
}


function LinkedList() {
  this._length = 0,
  this.head = null;
}


let linkedList = new LinkedList;
LinkedList.prototype.add = function (argumento){

// 1) crear un nodo
  let nodo = new Node (argumento);
// 2) corroborar si hay un head
//      setear un puntero señalando head
  let current = this.head;
  if (!current){
//      si no hay head => setear nodo como head
     this.head = nodo;
     this._length ++;
     return nodo;
  }
//      si hay head => recorrer la lista 
// 3) con while recorro la lista => hasta encontrar la lista => current.next === null
  while (current.next){
    current = current.next;
  }
// 4) setear el nodo en el null que encontramos
  current.next = nodo;
// 5)sumo uno a length
  this._length++;
// 6)retornar nodo o mensaje
  return nodo;
}

LinkedList.prototype.remove = function(){
//1)seterar un puntero
  let current = this.head;
//2)comprobar si hay un head 
//    si no hay head => retornar null
  if (!current) return null;
//    si hay head => verificar si hay más nodos
  if (current.next === null) {
//       si no hay mas nodos => guardar el valor a borrar
    let borrado = this.head.value
//          setear el head en null
    this.head = null;
//          length --
    this._length--;
//          retornar el valor guardado
    return borrado;
  }
//       si hay más nodos=> recorrer con un while hacia atrás(current.nex.next) =>para llegar al penúltimo nodo
   while (current.next.next){
    current = current.next;
   }
//       guardar el valor
   let borrado = current.next.value
//       remover el nodo
   current.next = null;
//       length --
   this._length--;
//       devolver el valor guardado
   return borrado;
}

LinkedList.prototype.search = function (argumento){
//1) craer un puntero
  let current = this.head;
//2) recorrer la lista => while (current !== null)
  while (current !== null){
//3) corroborar si argumento es un funcion (type of)
    if (typeof argumento === "function"){
//      si es una funcion => si argumento retorna true =>
       if(argumento(current.value) === true){
//         retornar el valor
        return current.value;
       }
//    evaluar si el argumento es el valor del nodo actual (current)
    }else{
      if (argumento === current.value){
//       retorno el valor
        return current.value;
      }
    }
//   ir al prox nodo
    current = current.next;
  }
//4) retornar null
  return null;
} 


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
//1)funcion constructora => array con 35 buckets=> bucket {}
  this.numBuckets = 35;
  this.buckets = [];
}
//2)funcion hash => charCodeAT
HashTable.prototype.hash = function (key) {
  let suma = 0;
//    recibe un string
//    recorrerlo y sumar lo valores => for 
  for (let i = 0; i < key.length; i++) {
//            rotornar va a ser el indice => posicion
     suma += key.charCodeAt(i);
  } 
//     modulo de suma de los buckets
  return suma % this.numBuckets;
};


 

//metodo set => push del metodo en el indice
HashTable.prototype.set = function (key, value) {
  if (typeof key !== 'string') throw TypeError('Las keys deben ser strings');
  let i = this.hash(key);
  if (this.buckets[i] === undefined) {
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
};

//metodo get => obtener el valo(llave que me vuelve a traer el elemento)
HashTable.prototype.get = function (key){
  let i = this.hash(key);
  return this.buckets[i][key];
};


//hashKey =>buscar => si esta o no el valor (boolean)
HashTable.prototype.hasKey = function (key) {
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
