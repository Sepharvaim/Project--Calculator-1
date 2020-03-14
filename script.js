function moltiplicazione(a,b) {
    return a * b;
}
function divisione(a,b) {
    return a / b;
}
function somma(a,b) {
    return a + b;
}
function sottrazione(a,b) {
    return a - b;
}
function operazioni(segno,a,b) {
    switch(segno) {
        case "*":
            return moltiplicazione(Number(a),Number(b));
            break;
        case "/":
            return divisione(Number(a),Number(b));
            break;
        case "+":
            return somma(Number(a),Number(b));
            break;
        case "-":
            return sottrazione(Number(a),Number(b));
            break;
    }    
}
let suono = document.querySelector('#audio');


let dot = document.querySelector(".dot");
let display1 = document.querySelector(".display1");
let display2 = document.querySelector(".display2");
let variabileD2 = "0";
let variabileD1 = "0";
let segno = null;


let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");

operators.forEach(operatore => {
    operatore.addEventListener('click',operations)});

numbers.forEach(numero => {
    numero.addEventListener('click',aggiungiNumero)});





function operations(mouseEvent) {    // quando la chiamata di una funzione viene chiamata porta con se il dato di cosa loha chiamato ini questo caso un evento di mouse che contiene a sua
                             // volta altri dati come ad esempio esattametne quale operatore lo hachiamato 
    if (mouseEvent.target.innerHTML === "AC") {
        resetButton();
    } else if (mouseEvent.target.innerHTML === "C") {
        delOneCaracter();
    } else if (mouseEvent.target.innerHTML === "=") {
        if (display1.value === "0" || display2.value === "0" ) {return};
        variabileD2 = display2.value;
        display1.value = operazioni(segno,variabileD1,variabileD2);
        // console.log(segno,variabileD1,variabileD2);
        display2.value = "0";
        variabileD2 = "0";
        segno = null;
    } else if (mouseEvent.target.innerHTML === "+") {
        
        calcolo("+");

    } else if (mouseEvent.target.innerHTML === "-") {
        
        calcolo("-");

    } else if (mouseEvent.target.innerHTML === "/") {
        
        calcolo("/");

    } else if (mouseEvent.target.innerHTML === "*") {
       
        calcolo("*");

    }       
}; 





function calcolo(operando) {
    
    if (variabileD1 === "0") {
        variabileD1 = display2.value;
        
        display1.value = variabileD1 + " " + operando;
        display2.value = "0";
        variabileD2 = "0";
        segno = operando;
        console.log(display1.value,variabileD1,"     ", display2.value,variabileD2);
    } else {
        if (display1.value.includes("/")|| display1.value.includes("*")|| display1.value.includes("+")|| display1.value.includes("-")) {
            display1.value = display1.value.slice(0,display1.value.length -2 );
        };
        if (display1.value.includes("/")|| display1.value.includes("*")|| display1.value.includes("+")|| display1.value.includes("-")) {return};
        variabileD1 = display1.value;
        display1.value = display1.value + " "+ operando;
        segno = operando;
        console.log(display1.value,variabileD1,"     ", display2.value,variabileD2);
    } 
}



dot.onclick = () => {
    if (!variabileD2.includes(".")) {
        display2.value += ".";
        variabileD2 += ".";
    }
}


function resetButton() {
    display2.value = "0";
    variabileD2 = "0";
    display1.value = "0";
    variabileD1 = "0";
}



function aggiungiNumero(mouseEvent) {
    
    let numero = mouseEvent.target.innerHTML;
    if (variabileD2 === "0") {
        variabileD2 = "";
        suono.play();
        
    }
    variabileD2 += numero;
    display2.value = variabileD2;
    suono.play();
};




function delOneCaracter() {
    let lunghezza = variabileD2.length;
    display2.value = display2.value.slice(0,lunghezza-1);
    variabileD2 = display2.value;
}






// * CAMBIO DEL COLORE DELLA CALCOLATRICE * /

const inputs = document.querySelector(".bottoniDiCambio input");

function handleUpdate() {
            console.log(this.name)
    
                                                    /* this sarebbe input -- this che premo */
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
}


inputs.addEventListener('change',handleUpdate);
inputs.addEventListener('mousemove', handleUpdate);
// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));