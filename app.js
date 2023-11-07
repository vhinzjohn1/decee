let counter = 0;
    const prompts = [
    // Jeje days comment lang muna 
        
    //"Hi Ashh🤍",
    //"Just wanted to brighten up your day with some greetings from me🤍",
    //"You always brighten up my day, and I hope your day is as awesome as you are🤍",
    //"Ready to start the day with a smile? Goodmorniggg baby girl🤍",
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
      if (counter >= 3) {
        const promptContainer = document.getElementById("promptContainer");
        promptContainer.style.opacity = 0;
        setTimeout(() => {
          promptContainer.style.display = "none";
          const promptButton = document.getElementById("promptButton");
          promptButton.style.display = "block";
        }, 750);
        const nextButton = document.getElementById("nextButton");
        nextButton.textContent = "Next";
        counter = 0;
      } else {
        counter++;
        const promptContainer = document.getElementById("promptContainer");
        promptContainer.style.opacity = 0;
        setTimeout(() => {
          const promptText = document.getElementById("promptText");
          promptText.innerHTML = `${prompts[counter]}`;
          promptContainer.style.opacity = 1;
          const nextButton = document.getElementById("nextButton");
          nextButton.textContent = (counter >= 3) ? "Done" : "Next";
        }, 750);
      }
    }
    
    
      

    const button = document.getElementById("promptButton");
    button.addEventListener("click", showText);

    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", nextPrompt);
