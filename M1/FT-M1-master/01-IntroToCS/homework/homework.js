'use strict'

//     1101 = 1*2^3 +  1*2^2 + 1*2^1 + 1*2^0
//i =  0123
//exp  3210

// function BinarioADecimal(num) {
//   var decimal = 0;
//   for (var i=0, i < num.length - 1, i++){
//     decimal += (i * Math.pow(2, (num.length - 1 - i )))
//   }return decimal;
// }


function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = 0
  for (var i= 0; i<num.length; i++){
     decimal += (num[i] * Math.pow (2,(num.length-1-i)));
     //decimal += (0 * ((0-1-0)^2))= 0
     //decimal += (1 * ((1-1-1)^2))= 1
     //decimal += (2 * ((2-1-0)^2))= 2
     //decimal += (3 * ((3-1-1)^2))= 3
  }return decimal //123
}

//---------------------------------------//

// 13/2 = 6.5  | 6 | 1   "1"
// 6/2 = 3     | 3 | 0   "01"
// 3/2 = 1.5   | 1 | 1   "101"
// 1/2 = 0.5   | 0 | 1   "1101"

// 1101

// function DecimalABinario(num) {
//   var binario [];
//     while (num/2 !== 0){
//       binario.unshift (num%2);
//       num = math.floor (num/2);
//     }retun binario.join("");
//  }


function DecimalABinario(num) {
  // tu codigo aca
   var binario = [] 
     while (num / 2 !== 0){
     binario.unshift (num%2);
     num = Math.floor (num/2);
     }return binario.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}