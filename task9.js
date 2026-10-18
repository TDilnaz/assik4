function runStringMethods() {
    const fullName = "Dilnaz Toktanova";
    const firstString = "Hello";
    const secondString = "JavaScript";

    const output = [
        `Full Name: ${fullName}`,
        `Length: ${fullName.length}`,
        `Uppercase: ${fullName.toUpperCase()}`,
        `Lowercase: ${fullName.toLowerCase()}`,
        `First three characters: ${fullName.slice(0, 3)}`,
        `Combined sentence: ${firstString} ${secondString} is fun.`,
        "",
        "The length property does not use parentheses.",
        "String methods such as toUpperCase(), toLowerCase(), and slice() use parentheses."
    ].join("\n");

    document.getElementById("result").textContent = output;
    console.log(output);
}

document.getElementById("runButton").addEventListener("click", runStringMethods);