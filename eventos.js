let div_content = document.getElementById("contenido");
let h3_content = div_content.querySelector("h3");

h3_content.addEventListener("click",rojo);
div_content.addEventListener("click",rosa);

function rosa(event) {
    //div_content.classList.add("rosado");
    event.target.classList.remove("rosado");
};

function rojo(event){
    //h3_content.style.color = "red";
    event.stopPropagation();
    //h3_content.classList.add("letra-roja");
    event.target.classList.add("letra-roja");
}

let a = document.getElementById("link");

a.addEventListener("click",prueba);

function prueba(event){
    event.preventDefault();
    event.target.innerText = "Te engañe el click no funciona";
}

//sumar dos numeros
let num1 = document.getElementById("numero1");
let num2 = document.getElementById("numero2");
let button_suma = document.getElementById("sumar");

let p_resultado = document.createElement("p");

button_suma.addEventListener("click",sumar);

function sumar(event){
    event.preventDefault();
    let resultado;
    let form = button_suma.parentNode;
    resultado = Number(num1.value)+Number(num2.value);
    if(!p_resultado.isConnected)
    {
        form.appendChild(p_resultado);
    }
        p_resultado.innerText = resultado;
};