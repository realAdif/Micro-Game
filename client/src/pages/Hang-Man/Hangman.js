import React, { Component } from "react";
import {randomWord} from './words'
import Navbar from '../Navbar'
import './style/hangman.css'
import { ADD_SCORE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";
import { QUERY_USER } from "../../utils/queries";


let gameStat;
let profileScore = 0;

function HangmanWithMutation(){
  const [addScore, {error}] = useMutation(ADD_SCORE,{
    refetchQueries:[
      {query: QUERY_USER}
    ]
  });

  return(
    <Hangman addScore={addScore}/> 
  )
}

class Hangman extends Component {
  
  
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6],
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set(),
      answer: randomWord(),
    };
    this.addScore = props.addScore.bind(this);

    this.handleGuess = this.handleGuess.bind(this);
    this.keyPress = this.keyPress.bind(this);
    window.addEventListener("keydown", this.keyPress);
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((bingo) => (this.state.guessed.has(bingo) ? bingo : "_ "));
  }

  handleGuess(value) {
    let letter = value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

  keyPress(event) {
    if (gameStat === "YOU WON" || gameStat === "YOU LOST") {
      if (event.keyCode === 8 || event.keyCode === 13 || event.keyCode === 32) {
        this.resetButton();
      }
    } else if (
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <= 122)
    ) {
      this.handleGuess(event.key);
    } else if (
      event.keyCode === 8 ||
      event.keyCode === 13 ||
      event.keyCode === 32
    ) {
      this.resetButton();
    } else {
    }
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={(e) => this.handleGuess(e.target.value)}
        id="buttonStyle"
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  };

  
  AddScoreProfile = async(event) => {
    event.preventDefault();
    console.log("This works");
    
    try{
       const {data} = await this.addScore({
        variables: {score: profileScore}
      });
      profileScore = 0;
    }
    catch(err){
      console.error(err);
    }
    
  }


  render() {
    const { mistake, answer } = this.state;
    const { maxWrong, images } = this.props;
    const gameOver = mistake >= maxWrong;
    const altText = `${mistake}/${maxWrong} wrong guesses`;
    const isWinner = this.guessedWord().join("") === answer;
    gameStat = this.generateButtons();
    
    if (isWinner) {
      gameStat = "YOU WON";
      
      profileScore++;
      
      console.log(profileScore);
    }
    if (gameOver) {
      gameStat = "YOU LOST";
      profileScore--;
      if(profileScore < -0){
        profileScore = 0
      }
    }

    return (
      <div>
        <Navbar/>

        <div id="gussedWrong">
        Guessed wrong: {mistake}
        <br/>
        <label className="text-label">Every game you win you gain a score and if you lose a game you will lose a game</label>
        </div>

        <p className="text-center">
          <img src={images[mistake]} alt={altText} />
        </p>

        <div>
            <p id="gussedWrong">
            Guess the Country?
            </p>
            <p className="Hangman-word text-center" id="hangmanWords">
            {!gameOver ? this.guessedWord() : answer}{" "}
            {console.log(answer)}
            </p>
        </div>

        <p className="text-center text-warning mt-4">{gameStat}</p>

        <div>
          <p className="text-center">
            <button className="Hangman-reset" id="resetButton" onClick={this.resetButton}>
              RESET
            </button>
          </p>
        </div>
        <br/>
        <div className="score-div">
          <button className="Hangman-reset" id="resetButton" onClick={this.AddScoreProfile} >Add Score</button>
          <label className="text-score" > Score: {profileScore}</label>
        </div>   
      </div>
    );
  }
}

export default HangmanWithMutation;