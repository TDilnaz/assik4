function startGreeting() {
    const name = prompt("Enter your full name:");

    if (name === null || name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    alert(`Hello, ${name}! Welcome to my JavaScript page.`);

    const group = "MT-2502";
    const message = "Hello, " + name + "! Your group is " + group + ".";

    console.log(message);
    document.getElementById("result").textContent = message;
}

document.getElementById("greetButton").addEventListener("click", startGreeting);