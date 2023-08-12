//Ejercicio 1
function Ejercicio1(name, callback) {
    var Nombre = "Bienvenido, " + name;
    callback(Nombre);
}
function Prueba() {
    Ejercicio1(window.prompt("Por favor ingrese su nombre"), function (name) {
        console.info("This Info Message " + name);
        console.warn("This Warn Message " + name);
        console.error("This Error Message " + name);
        document.querySelector(".section-results").innerHTML=`
        <span>!!El mensaje se ha imprimido por consola</span>
        `
    })
}

let button1 = document.createElement("button")
button1.classList.add("section-buttons__exercise1")
button1.setAttribute("id", "exercise1")
button1.textContent = "Exercise 1"
button1.addEventListener("click", Prueba)
document.querySelector(".section-buttons").appendChild(button1);

//Ejercicio 2
function Ejercicio2(variable, callback) {
    let tipo = ""//= typeof (variable);
    if (isNaN(parseInt(variable))) {
        tipo = "String"
    } else {
        tipo = "Number"
    }
    callback(variable, tipo);
}
function Prueba2() {
    let variable = document.getElementById("exercise2Input").value
    Ejercicio2(variable, function (variable, tipo) {
        let span=document.getElementById("SpanText")
       if(!span){
       span=document.createElement("span")
       span.setAttribute("id","SpanText")
        }        
       span.textContent=`La variable ingresada es de tipo ${tipo}  y su contenido es ${variable}`;
       document.querySelector(".section-results").appendChild(span)
    })
}


let button2 = document.createElement("button")
button2.classList.add("section-buttons__exercise2")
button2.setAttribute("id", "exercise2")
button2.textContent = "Exercise 2"
button2.addEventListener("click", () => {
    document.querySelector(".section-results").innerHTML = ""
    let span = document.createElement("span")
    span.classList.add("section-results__titles")
    span.textContent="Digite la variable para validar si es Number o String"
    document.querySelector(".section-results").appendChild(span);

    let input = document.createElement("input")
    input.classList.add("section-results__exercise2")
    input.setAttribute("id", "exercise2Input")
    document.querySelector(".section-results").appendChild(input);

    let send2 = document.createElement("button")
    send2.classList.add("section-results__exercise2")
    send2.setAttribute("id", "exercise2btn")
    send2.textContent = "Enviar"
    send2.addEventListener("click", Prueba2)
    document.querySelector(".section-results").appendChild(send2);

})
document.querySelector(".section-buttons").appendChild(button2);

//Ejercicio 3

function Ejercicio3(num1, num2, callback) {
    callback(num1, num2);
    //document.querySelector("#exercise3InputResults").innerHTML = ""
}
function Prueba3() {
    let opcion = window.prompt("Seleccione la operacion a realizar \n 1. Suma \n 2. Resta \n 3. Multiplicacion \n 4. Division")
    let inputResult = document.querySelector("#exercise3InputResults");
    if (!inputResult) {
        inputResult = document.createElement("input")
        inputResult.classList.add("section-results__exercise3")
        inputResult.setAttribute("id", "exercise3InputResults")
        inputResult.disabled=true
        document.querySelector(".section-results").appendChild(inputResult);
    }
    switch (parseInt(opcion)) {
        case 1:
            Ejercicio3(document.getElementById("exercise3Input").value, document.getElementById("exercise3Input2").value, function (a, b) { inputResult.value = parseInt(a) + parseInt(b); });
            break;
        case 2:
            Ejercicio3(document.getElementById("exercise3Input").value, document.getElementById("exercise3Input2").value, function (a, b) { inputResult.value = a - b; });
            break;
        case 3:
            Ejercicio3(document.getElementById("exercise3Input").value, document.getElementById("exercise3Input2").value, function (a, b) { inputResult.value = a * b; });
            break;
        case 4:
            Ejercicio3(document.getElementById("exercise3Input").value, document.getElementById("exercise3Input2").value, function (a, b) { inputResult.value = a / b; });
            break;
        default:
            break;
    }

}

let button3 = document.createElement("button")
button3.classList.add("section-buttons__exercise3")
button3.setAttribute("id", "exercise3")
button3.textContent = "Exercise 3"
button3.addEventListener("click", () => {
    document.querySelector(".section-results").innerHTML = ""

    let span = document.createElement("span")
    span.classList.add("section-results__titles")
    span.textContent="Digite los dos numeros a operar"
    document.querySelector(".section-results").appendChild(span);

    let input = document.createElement("input")
    input.classList.add("section-results__exercise3")
    input.setAttribute("id", "exercise3Input")
    document.querySelector(".section-results").appendChild(input);

    let input2 = document.createElement("input");
        input2.classList.add("section-results__exercise3")
    input2.setAttribute("id", "exercise3Input2")
    document.querySelector(".section-results").appendChild(input2);

    let send3 = document.createElement("button")
    send3.classList.add("section-results__exercise3")
    send3.setAttribute("id", "exercise2btn")
    send3.textContent = "Enviar"
    send3.addEventListener("click", Prueba3)
    document.querySelector(".section-results").appendChild(send3);

})
document.querySelector(".section-buttons").appendChild(button3);

//Ejercicio 4

function Ejercicio4(sentence, opcion, callback) {
    //This excute after prueba 4 window.alert("Por favor ingrese la frase a transformar");
    callback(sentence, opcion);

}
function Prueba4() {
    let opcion = parseInt(window.prompt("Seleccione la operacion a realizar \n 1. Minusculas \n 2. Mayusculas"))
    Ejercicio4(document.getElementById("exercise4Input2").value, parseInt(opcion), (sentence, opcion) => {
        if (opcion == 1) {
            sentence = sentence.toLowerCase();
        } else if (opcion == 2) {
            sentence = sentence.toUpperCase();
        } else {
            window.alert("Opcion invalida intente nuevamente")
            opcion = parseInt(window.prompt("Seleccione la operacion a realizar \n 1. Minusculas \n 2. Mayusculas"))
        }
        let inputR = document.querySelector("#exercise4InputR");
        if (!inputR) {
            inputR = document.createElement("input")
            inputR.classList.add("section-results__exercise4")
            inputR.setAttribute("id", "exercise4InputR")
            inputR.disabled=true
            document.querySelector(".section-results").appendChild(inputR);
        }
        inputR.value = sentence
    });
}
let button4 = document.createElement("button")
button4.classList.add("section-buttons__exercise4")
button4.setAttribute("id", "exercise4")
button4.textContent = "Exercise 4"
button4.addEventListener("click", () => {
    document.querySelector(".section-results").innerHTML = ""
    let span = document.createElement("span")
    span.classList.add("section-results__titles")
    span.textContent="Ingrese la cadena a transformar en Mayusculas o  Minusculas"
    document.querySelector(".section-results").appendChild(span);

    let input2 = document.querySelector("#exercise4Input2");
    let send4 = document.querySelector("#exercise4btn");
    if (!input2 || !send4) {
        input2 = document.createElement("input")
        input2.classList.add("section-results__exercise4")
        input2.setAttribute("id", "exercise4Input2")
        document.querySelector(".section-results").appendChild(input2);
        send4 = document.createElement("button")
        send4.classList.add("section-results__exercise4")
        send4.setAttribute("id", "exercise4btn")
        send4.textContent = "Enviar"
        send4.addEventListener("click", Prueba4)
        document.querySelector(".section-results").appendChild(send4);
    }
})
document.querySelector(".section-buttons").appendChild(button4);

//Ejercicio5
/*Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y 
tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el 
nuevo array mediante un callback.*/
function Ejercicio5(sentence, callback) {
    //This excute after prueba 4 window.alert("Por favor ingrese la frase a transformar");
    callback(sentence);

}
function Prueba5() {
    Ejercicio5(document.getElementById("exercise5Input").value, (sentence) => {        
        let inputR = document.querySelector("#exercise5InputR");
        if (!inputR) {
            inputR = document.createElement("input")
            inputR.classList.add("section-results__exercise5")
            inputR.setAttribute("id", "exercise5InputR")
            inputR.disabled=true
            document.querySelector(".section-results").appendChild(inputR);
        }
        sentence=sentence.split(",")
        let NewArray = []
        let cont = 0
        sentence.forEach(() => {
            if ((sentence[cont] / 60) >= 2) {
                NewArray.push(sentence[cont])
            }
            cont++
        });
        inputR.value=NewArray
    });
}
let button5 = document.createElement("button")
button5.classList.add("section-buttons__exercise5")
button5.setAttribute("id", "exercise5")
button5.textContent = "Exercise 5"
button5.addEventListener("click", () => {
    document.querySelector(".section-results").innerHTML = ""
    let span = document.createElement("span")
    span.classList.add("section-results__titles")
    span.textContent="Escriba el arreglo a validar por ejemplo 120,213,120,110,4"
    document.querySelector(".section-results").appendChild(span);

    let input = document.querySelector("#exercise5Input");
    let send = document.querySelector("#exercise5btn");
    if (!input || !send) {
        input = document.createElement("input")
        input.classList.add("section-results__exercise5")
        input.setAttribute("id", "exercise5Input")
        document.querySelector(".section-results").appendChild(input);
        send = document.createElement("button")
        send.classList.add("section-results__exercise5")
        send.setAttribute("id", "exercise5btn")
        send.textContent = "Enviar"
        send.addEventListener("click", Prueba5)
        document.querySelector(".section-results").appendChild(send);
    }
})
document.querySelector(".section-buttons").appendChild(button5);
