alert(`Esta es una calculadora que te dejará hacer operaciones aritmeticas simples`)

let number1, operation, number2

do {
    number1 = parseFloat(prompt("Ingrese el primer numero"));
    operation = prompt("Ingrese la operacion que desea realizar (+, -, /, %,*)");
    number2 = parseFloat(prompt("Ingrese el segundo numero"));

    if (isNaN(number1) || isNaN(number2)) {
        alert("ingrese numeros validos")
    }

} while(isNaN(number1) || isNaN(number2))

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
