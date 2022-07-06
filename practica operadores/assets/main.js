alert(`Esta es una calculadora que te dejará hacer operaciones aritmeticas simples`)

let number1 = parseFloat(prompt("Ingrese el primer numero"));

console.log(number1);

let operation = prompt("Ingrese la operacion que desea realizar (+, -, /, %,*)");

let number2 = parseFloat(prompt("Ingrese el segundo numero"));

console.log(number2);

while (isNaN(number1) && isNaN(number2)) {
    alert("Por favor, ingrese un numero valido")
}

const result = () => {
    switch (operation) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "/":
            return number1 / number2;
        case "%":
            return number1 % number2;
        case "*":
            return number1 * number2;
        default:
            return "Algo sucedio mal, reingresar los datos!";
    }
};

alert(result());
