let answerButton = document.querySelector("#getAnswer")
let magicPic = document.querySelector("#magic-pic")

let answers =["Yes!","No!","Maybe!","Not clear!","Ask again later!","No way!","The likelihood is in your favor!", "unlikely!","Ask your mom!", "Sounds like an issue not an issMe", "Get fucked!", "Ask Eboard on slack", "Ask AvanBot", "Don't give up!"]

answerButton.addEventListener("click",()=>{
  magicPic.classList.toggle("wiggle")
  setTimeout(()=>{
    magicPic.classList.toggle("wiggle")
    let random = Math.floor(Math.random()*answers.length)
  console.log(random)
  console.log(answers)
alert(answers[random])
  },2000)

})