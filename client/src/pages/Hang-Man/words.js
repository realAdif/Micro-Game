let Words = [
    "Game",
    "Moive",

]

function randomWords(){
    // let word = Words[Math.floor(Math.random() * Words.length)]
    return Words[Math.floor(Math.random() * Words.length)]
}

export {randomWords}