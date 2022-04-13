let answerButton = document.querySelector("#getAnswer")
let magicPic = document.querySelector("#magic-pic")
let answers = ["Yes, ", "No, ", "Maybe, ", "Not clear!", "Ask again later, ", "No way!", "The likelihood is in your favor ", "Unlikely ", "Ask your mom, ", "Sounds like an issue not an issMe, ", "Get fucked!", "Ask Eboard on slack ", "Ask AvanBot ", "Don't give up!"]
let output = document.querySelector("#output")
let random = Math.floor(Math.random() * answers.length)

function func() {
    let name = prompt("Enter your name:", " Csher");
    let question = prompt("What is it you desire:", "Is there an afterlife");
    let response;
    if (name == null || name == "" && question == null || question == "") {
        response = "Prompt was canceled due to an error.";
    } else {
        response = answers[random] + " " + name;
    }
    output.innerHTML = response;
}

answerButton.addEventListener("click", () => {
    magicPic.classList.toggle("wiggle")
    setTimeout(() => {
        magicPic.classList.toggle("wiggle")
        random = Math.floor(Math.random() * answers.length)
        console.log(random)
        console.log(answers)
        func()

    }, 2000)
})

//Learning an Api
function sendtoAPI(item) { //answers[random]
    var req = new XMLHttpRequest(); //another option is fetch
    req.open('POST', '/add');
    req.setRequestHeader('Content-Type', 'application/json');
    //console.log(item);
    req.send(JSON.stringify({ item: item }));

    req.addEventListener('load', () => {
        //console.log(req.responseText);
        console.log('Request completed.');
    })

    req.addEventListener('error', () => {
        console.log('Technical difficulties');
        console.log(error);
    });
}