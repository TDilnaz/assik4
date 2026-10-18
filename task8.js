function calculate() {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const result = document.getElementById("result");

    if (
        document.getElementById("number1").value.trim() === "" ||
        document.getElementById("number2").value.trim() === ""
    ) {
        result.textContent = "Please enter both numbers.";
        return;
    }

    let output = "";

    output += `Sum: ${number1 + number2}\n`;
    output += `Difference: ${number1 - number2}\n`;
    output += `Product: ${number1 * number2}\n`;

    if (number2 !== 0) {
        output += `Quotient: ${number1 / number2}\n`;
        output += `Remainder: ${number1 % number2}\n`;
    } else {
        output += "Quotient: Cannot divide by zero.\n";
        output += "Remainder: Cannot divide by zero.\n";
    }

    output += '\n"12" + "5" = ' + ("12" + "5");
    output += "\nNumber('12') + Number('5') = " +
        (Number("12") + Number("5"));

    result.textContent = output;
    console.log(output);
}

document.getElementById("calculateButton").addEventListener("click", calculate);