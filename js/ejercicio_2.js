// Declaración de variable fuera de la función
var variableExterna = "Variable externa";

function miFuncion() {
  // Declaración de variable dentro de la función
  var variableInterna = "Variable interna";
  
  // Acceso a la variable interna desde dentro de la función
  console.log("Desde dentro de la función:");
  console.log("Valor de variableInterna:", variableInterna);
  
  // Acceso a la variable externa desde dentro de la función
  console.log("Valor de variableExterna:", variableExterna);
}

// Acceso a la variable interna desde fuera de la función (esto dará un error)
console.log("Desde fuera de la función:");
console.log("Valor de variableInterna:", typeof variableInterna !== "undefined" ? variableInterna : "Variable no definida");

// Acceso a la variable externa desde fuera de la función
console.log("Valor de variableExterna:", variableExterna);

// Llamada a la función
miFuncion();
