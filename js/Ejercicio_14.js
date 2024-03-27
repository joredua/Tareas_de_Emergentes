
document.getElementById("miElemento").innerHTML = "Nuevo contenido";
document.getElementById("miElemento").style.color = "red";

let nuevoElemento = document.createElement("div");


nuevoElemento.textContent = "Nuevo elemento creado";
document.body.appendChild(nuevoElemento);


let elementoEliminar = document.getElementById("elementoAEliminar");
elementoEliminar.parentNode.removeChild(elementoEliminar);
