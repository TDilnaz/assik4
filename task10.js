function runOperators() {
    let counter = 10;
    let output = `Initial counter: ${counter}\n`;

    counter++;
    output += `After counter++: ${counter}\n`;

    counter--;
    output += `After counter--: ${counter}\n`;

    counter += 5;
    output += `After counter += 5: ${counter}\n`;

    counter -= 3;
    output += `After counter -= 3: ${counter}\n`;

    counter *= 2;
    output += `After counter *= 2: ${counter}\n`;

    counter /= 4;
    output += `After counter /= 4: ${counter}\n`;

    output += "\n++ increases the value by 1.";
    output += "\n-- decreases the value by 1.";
    output += "\n+= adds a value.";
    output += "\n-= subtracts a value.";
    output += "\n*= multiplies by a value.";
    output += "\n/= divides by a value.";

    document.getElementById("result").textContent = output;
    console.log(output);
}

document.getElementById("runButton").addEventListener("click", runOperators);