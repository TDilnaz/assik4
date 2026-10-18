function calculateDogAge(dogAge) {
    return (dogAge - 2) * 4 + 21;
}

function calculate() {
    const input = document.getElementById("dogAge");
    const dogAge = Number(input.value);
    const result = document.getElementById("result");

    if (input.value.trim() === "" || !Number.isFinite(dogAge) || dogAge < 2) {
        result.textContent = "Please enter a dog age of 2 or greater.";
        return;
    }

    const humanAge = calculateDogAge(dogAge);
    const output = `Dog age: ${dogAge}\nHuman age: ${humanAge}`;

    result.textContent = output;
    console.log(output);
}

document.getElementById("calculateButton").addEventListener("click", calculate);

console.log("Dog age: 2, Human age:", calculateDogAge(2));
console.log("Dog age: 5, Human age:", calculateDogAge(5));