function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to my website.`);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

function runFunctions() {
    greetUser("Dilnaz");
    greetUser("Aisulu");

    const sum1 = calculateSum(5, 3);
    const sum2 = calculateSum(10, 7);

    const area1 = calculateRectangleArea(4, 6);
    const area2 = calculateRectangleArea(5, 8);

    const output = [
        "greetUser(‘Dilnaz')",
        "greetUser('Aisulu’)",
        `calculateSum(5, 3) = ${sum1}`,
        `calculateSum(10, 7) = ${sum2}`,
        "",
        `calculateRectangleArea(4, 6) = ${area1}`,
        `calculateRectangleArea(5, 8) = ${area2}`,
        "",
        "Parameters are variable names in a function definition.",
        "Arguments are actual values passed to a function.",
        "return sends a value back to the place where the function was called."
    ].join("\n");

    document.getElementById("result").textContent = output;
    console.log(output);
}

document.getElementById("runButton").addEventListener("click", runFunctions);