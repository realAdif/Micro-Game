let Words = [
    "Game",
    "Moive",

]

function randomWords(){
    return Words[Math.floor(Math.random() * Words.length)]
}

export {randomWords}