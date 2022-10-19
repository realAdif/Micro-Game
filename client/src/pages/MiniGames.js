import React from "react";
// import {Container,Row,Col} from 'react-grid-system';
import {Container,Item, ItemContent,Button,Icon} from 'semantic-ui-react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/minigame.css'
import hangman from '../styles/asset/HangmanMiniGame.png'
import mathQuiz from '../styles/asset/MathQuiz.png'


export default function MiniGame(){

    return(
        // <section>
        //     <Navbar/>
        //     <br/>
        //     <Container fluid id="container" >
        //         <Row justify="between" debug>
        //             <Col >
        //             <div className="card">
        //             <img src={hangman} className="card-img-top" alt='bannerImages' id='banner'></img>
        //                 <div className="card-body">
        //                     <h5 className="card-title">Hangman</h5>
        //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     <a href="/hangman" className="btn btn-primary">Lets play</a>
        //                 </div>
        //             </div>
        //             </Col>
        //             <Col >
        //             <div className="card">
        //             <img src={mathQuiz} className="card-img-top" alt='bannerImages' id='banner'></img>
        //                 <div className="card-body">
        //                     <h5 className="card-title">Math Quiz</h5>
        //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     <a href="/mathquiz" className="btn btn-primary">Go somewhere</a>
        //                 </div>
        //             </div>  
        //             </Col>
        //         </Row>
        //         <br/>
        //     </Container>
        //     <p id="minigameText"> More Micro-Games are on the way...</p>


        //     <Footer/>
        // </section>
        <>
        <Navbar/>
        <Container>
        <Item.Group divided>
                <Item>
                    <Item.Image src={hangman}/>
                    <ItemContent>
                        <Item.Header as='a'> hangman game</Item.Header>
                        <Item.Description>
                            Hangman
                        </Item.Description>
                        <Item.Extra>
                        <Button floated='right'href='/hangman' hef primary>
                            Lets Play
                            <Icon name='chevron right' />
                        </Button>
                        </Item.Extra>
                    </ItemContent>
                </Item>
            </Item.Group>
            <Item.Group divided>
                <Item>
                    <Item.Image src={mathQuiz}/>
                    <ItemContent>
                        <Item.Header as='a'> Math Quiz</Item.Header>
                        <Item.Description>
                            Math Quiz
                        </Item.Description>
                        <Item.Extra>
                        <Button floated='right' href='/mathquiz' primary>
                        Lets Play
                            <Icon name='chevron right' />
                        </Button>
                        </Item.Extra>
                    </ItemContent>
                </Item>
            </Item.Group>
        </Container>
        <br/>
        <p className="minigameText"> More Micro-Games are on the way...</p>
        <Footer/>
        </>

    )

}