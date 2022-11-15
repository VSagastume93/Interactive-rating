const contenedor = document.getElementById("container-2");
const submit = document.getElementById("submit");
const number1 = document.getElementById("1");
const number2 = document.getElementById("2");
const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const number5 = document.getElementById("5");
let eleccion = 1;
const calificación = document.getElementById("calificacion");

function eventoclick() {
    contenedor.style.display = "flex";
    calificación.innerText = eleccion;
}

number1.addEventListener("click", () => {
    eleccion = 1;
})

number2.addEventListener("click", () => {
    eleccion = 2;
})

number3.addEventListener("click", () => {
    eleccion = 3;
})

number4.addEventListener("click", () => {
    eleccion = 4;
})

number5.addEventListener("click", () => {
    eleccion = 5;
})


submit.addEventListener("click", eventoclick)