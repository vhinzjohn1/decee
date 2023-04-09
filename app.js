let counter = 0;
    const prompts = [
    "Hi Ashh🤍",
    "Just wanted to brighten up your day with a little greetings from me🤍",
    "Goodmorning🤍 Have a Great Day ahead ashhh🤍",
    ];
    
    function showText() {
    counter = 0;
    const promptButton = document.getElementById("promptButton");
    promptButton.style.display = "none";
    const promptContainer = document.getElementById("promptContainer");
    promptContainer.style.opacity = 0;
    promptContainer.style.display = "block";
    const promptText = document.getElementById("promptText");
    promptText.innerHTML = `${prompts[counter]}`;
    let opacity = 0;
    const interval = setInterval(() => {
        opacity += 0.3;
        promptContainer.style.opacity = opacity;
        if (opacity >= 1) {
        clearInterval(interval);
        }
    }, 50);
    }

    
    function nextPrompt() {
    if (counter >= 2) {
        const promptContainer = document.getElementById("promptContainer");
        promptContainer.style.opacity = 0;
        setTimeout(() => {
        counter = 0;
        const promptButton = document.getElementById("promptButton");
        promptButton.style.display = "block";
        promptContainer.style.display = "none";
        promptContainer.style.opacity = 1;
        }, 750);
    } else {
        counter++;
        const promptContainer = document.getElementById("promptContainer");
        promptContainer.style.opacity = 0;
        setTimeout(() => {
        const promptText = document.getElementById("promptText");
        promptText.innerHTML = `${prompts[counter]}`;
        promptContainer.style.opacity = 1;
        }, 750);
    }
    }

    const button = document.getElementById("promptButton");
    button.addEventListener("click", showText);

    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", nextPrompt);
