const userInput = document.body.querySelector("#userDiv");
const compInput = document.body.querySelector("#compDiv");
let userChoice;
let compChoice;


document.body.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (e.target.id === "Stone") {
            userInput.innerHTML = ""
            userChoice ="Stone";
            const Stone = `<img class="h-20 w-[132px]" src="./src/Assets/stone.webp" alt="Stone">`
            userInput.innerHTML += Stone;
            randomImageputter();
        }
        else if (e.target.id === "Paper") {  
            userInput.innerHTML = ""
            userChoice ="Paper";
            const Paper = ` <img class="w-33" src="./src/Assets/paper.webp " alt="Paper">`
            userInput.innerHTML += Paper;
            randomImageputter();
        }
        else if (e.target.id === "Scissor") {
            userInput.innerHTML = ""
            userChoice ="Scissor";
            const Scissor = `<img class="w-33" src="./src/Assets/Scissor.webp" alt="Scissor">`
            userInput.innerHTML += Scissor;
            randomImageputter();
        }
        

    })
})

function randomImageputter() {
    randomValue = Math.floor(Math.random() * 3)
    console.log(randomValue);
    
    if (randomValue === 0) {
        compInput.innerHTML = ""
        const Stone = `<img class="h-20 w-[132px]" src="./src/Assets/stone.webp" alt="Stone">`
        compInput.innerHTML = Stone;
        compChoice="Stone"
      
    }
    else if (randomValue === 1) {
        compInput.innerHTML = ""
        const Paper = ` <img class="w-33" src="./src/Assets/paper.webp " alt="Paper">`
        compInput.innerHTML = Paper;
        compChoice="Paper"
        
    }
    else {
        compInput.innerHTML = ""
        const Scissor = `<img class="w-33" src="./src/Assets/Scissor.webp" alt="Scissor">`
        compInput.innerHTML = Scissor;
        compChoice="Scissor"
    }
    setTimeout(gameResult,1000)
}

function gameResult() {
    const rules ={
        Stone: "Scissor",
        Paper:"Stone",
        Scissor:"Paper"
    }
    if(userChoice === compChoice){
      alert("draw");  
      console.log("draw");
      
    }
    else if(rules[userChoice]===compChoice){
      alert("user wins");  
      console.log("user wins");
      
    }
    else{
      alert("comp wins");
      console.log("comp wins");
      
    }

    
}


