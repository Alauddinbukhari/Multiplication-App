
const scoreEL = document.getElementsByClassName("score")[0];
var score = JSON.stringify(localStorage.getItem("score"));

if(score===null){
 score = 0;
 console.log()
}

scoreEL.innerText = `Score: ${score}`;

const min = 1;
const max = 10;
 
var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
var num2 = Math.floor(Math.random() * (max - min + 1)) + min;
var correctans = num1 * num2;

document.getElementById("question").innerText = `What is ${num1} multiply by ${num2}?`;

const inputEL = document.getElementById("input");

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  
  const userAns = +inputEL.value;
  
  if (userAns === correctans) {
    score += 1;
    updateLocalStorage()
  } else {
    score -= 1;
    updateLocalStorage
  }
  
  
  scoreEL.innerText = `Score: ${score}`;
  setTimeout(()=>{app()},1000)
  updateLocalStorage()

});



function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
