const MAX_NUMBER = 100
const MIN_NUMBER = 0

let guess
let guessRange

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    guessRange /= 2
    guess -= guessRange
    updateMessage()
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt correct?
    setMessage("woho :D")
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    guessRange /= 2
    guess += guessRange
    updateMessage()
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = MAX_NUMBER / 2
    guessRange = guess;

    updateMessage()
}

function updateMessage(){
    setMessage(`Is it ${Math.floor(guess)}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

