import React from "react";
import {Container,Row,Col} from 'react-grid-system';
import Navbar from "./Navbar";
import '../styles/minigame.css'
import hangman from '../styles/asset/HangmanMiniGame.png'


export default function MiniGame(){

    return(
        <section>
            <Navbar/>
            <br/>
            <Container fluid id="container" >
                <Row justify="between" debug>
                    <Col >
                    <div className="card">
                    <img src={hangman} className="card-img-top" alt='bannerImages' id='banner'></img>
                        <div className="card-body">
                            <h5 className="card-title">Hangman</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/hangman" className="btn btn-primary">Lets play</a>
                        </div>
                    </div>
                    </Col>
                    <Col >
                    <div className="card">
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Math Quiz</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/mathquiz" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>  
                    </Col>
                </Row>
                <br/>
            </Container>
            <p id="minigameText"> More Micro-Games are on the way...</p>


            
        </section>
    )

}