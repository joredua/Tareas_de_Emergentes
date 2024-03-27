let arreglo= [1, 2, 3];
arreglo.push(4, 5);
console.log(arreglo); // Salida: [1, 2, 3, 4, 5]

let arregl = [1, 2, 3];
let ultimoElemento = arregl.pop();
console.log(ultimoElemento); // Salida: 3
console.log(arregl); // Salida: [1, 2]

let arregle = [1, 2, 3];
let primerElemento = arregle.shift();
console.log(primerElemento); // Salida: 1
console.log(arregle); // Salida: [2, 3]

let arregls = [2, 3];
arregls.unshift(0, 1);
console.log(arregls); // Salida: [0, 1, 2, 3]

let arreglo1 = [1, 2];
let arreglo2 = [3, 4];
let arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3); // Salida: [1, 2, 3, 4]

let arregld = [1, 2, 3, 4, 5];
let subArregld = arregld.slice(1, 4);
console.log(subArregld); // Salida: [2, 3, 4]

let arreglf = [1, 2, 3, 4, 5];
arreglf.splice(2, 2, 6, 7);
console.log(arreglf); // Salida: [1, 2, 6, 7, 5]

let arreglg = [1, 2, 3];
arreglg.forEach(numero => console.log(numero * 2)); // Salida: 2, 4, 6

let arreglh = [1, 2, 3, 4, 5];
let nuevoArreglo = arreglh.filter(numero => numero % 2 === 0);
console.log(nuevoArreglo); // Salida: [2, 4]
