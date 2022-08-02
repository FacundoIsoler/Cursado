"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
this.value = value,
this.left = null,
this.right = null
}

// let tree = new BinarySearchTree(8)
// value 8, left null, right  null
//tree.insert(7)
// value 8, left BST(7, left null, right null), right null
// tree.insert(6)
// ------------> nuevo contexto de ejecucion 
                      // this.value = 7
                                         
BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value){
    if (!this.left) this.left = new BinarySearchTree(value) // this.left === null
    else this.left.insert(value)
  } else if (this.value < value) {
    if (!this.right) this.right = new BinarySearchTree(value)
    else this.right.insert(value)
   }
}
/*
insert: 6

          8
        /
       3
        \
        6

*/

BinarySearchTree.prototype.size = function() {
  //caso de corte
  if (!this.left && !this.right) return 1
  if (this.left && !this.right) return 1 + this.left.size()
  if (!this.left && this.right) return 1 + this.right.size()
  if (this.left && this.right) return 1 + this.right.size() + this.left.size()
}

// 

BinarySearchTree.prototype.contains = function(value) {
  // ver si coincide el valor con el valor del nodo en el que este paradx
  if (this.value === value) return true
  if (value > this.value) {
    if (!this.right) return false
    else return this.right.contains(value)
  }
  if (value < this.value) {
    if (!this.left) return false
    else return this.left.contains(value)
  }
}

 
// tree.depthFirstForEach(console.log(tree), "pre-order")


BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
if (order === "post-order"){
  if (this.left) this.left.depthFirstForEach(cb, order)
  if (this.right) this.right.depthFirstForEach(cb, order)
  cb(this.value)
}

else if (order === "pre-order"){
  cb(this.value)
  if (this.left) this.left.depthFirstForEach(cb, order)
  if (this.right) this.right.depthFirstForEach(cb, order)  
}
else  {
  if (this.left) this.left.depthFirstForEach(cb, order)
  cb(this.value)
  if (this.right) this.right.depthFirstForEach(cb, order) 
}                              
}

/*
 tree      8                       
        /    \
        3     10
      /  \      \
    1     4     12
            \
             6

  
value 8
array [3, 10]
llamo a breadthFirstForEach(cb, [3, 10])
------------------------> nuevo contexto
value:3
array [10, 1, 4]
--------------------------> nuevo contexto
value : 10
array [1, 4, 12]
--------------------------> nuevo contexto
value: 1
array [4, 12]
--------------------------> nuevo contexto
value 4
array [ 12, 6]
--------------------------> nuevo contexto va a utilizar el value 12
value 12
array [6]
--------------------------> nuevo contexto
value 6
array []

cb = let arrayCb = [8]
            */

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
cb (this.value)
if (this.left) array.push(this.left)
if (this.right) array.push(this.right)

let next = array.shift()
// caso de corte y a la vez mi llamada a recursion
if (next) next.breadthFirstForEach(cb, array)

// if (array.length > 0) array.shift().breadthFirstForEach(cb, array)
 
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
