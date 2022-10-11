import React, { useEffect, useState } from 'react';
import './style/hangman.css'
import Navbar from '../Navbar';

import image0 from './images/0.png';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';

function randomWords(){
    const words = ["Hangman","Game"];
    return words[Math.floor(Math.random() * words.length)] 
}

function StartUpScreen(props){
    return<button id='startUpScreen' onClick={props}>Start</button>
}
function HangmanGame({duration = 120000}){
    const hangmanImage = [image0,image1,image2,image3,image4,image5,image6]
    let newWord = "Hangman".toUpperCase();
    let counter = 0;

    const alphabets = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];

    const [correctGuesses, setCorrectGuesses] = useState([])
    const [timeUp, setTimeUp] = useState(false);

    const [imageIndex, SetImageIndex] = useState(counter)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimeUp(true);
        }, duration);

        return () => clearTimeout(timeout);
    },)

    useEffect(()=>{
        console.log('NEW image')
    },[imageIndex])

    const maskedWord = newWord.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");
    return(
        <div>
            <img src={hangmanImage[6]} alt='hangmanImages' id='hangmanImage'></img>
            {}
            <p id='hangman'>{maskedWord}</p>
            <div id='buttons'>

            {alphabets.map((alphabet, index) => <button id='buttonStyle' key={index} onClick={(event) => {
                console.log(alphabet)
                event.currentTarget.disabled = true;
                if (newWord.includes(alphabet)) {
                    setCorrectGuesses([...correctGuesses, alphabet])
                }else{
                    console.log("this is wrong");
                    SetImageIndex(counter++)
                    console.log(counter);
                }

            }}>{alphabet}</button>)}
            
            </div>
            <br/>
            {counter >0 && <p id='hangmanText'>You Lost the counter!{counter}</p> }
            {timeUp ? <p id='hangmanText'>You lost!</p> : !maskedWord.includes("_") &&  <p id='hangmanText'>You won!</p>}
        </div>
    )
}


export default function Hangman() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
        event.currentTarget.disabled = true;
    };


    return (
        <div >
            <Navbar/>
            <button id='startUpScreen' onClick={handleClick}>Start</button>
            {isShown && <HangmanGame />}
            

        </div>
    );
}