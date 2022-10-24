import React from "react";
// import {Container,Row,Col} from 'react-grid-system';
import {Container,Item, ItemContent,Button,Icon} from 'semantic-ui-react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/minigame.css'
import hangman from '../styles/asset/HangmanMiniGame.png'
import mathQuiz from '../styles/asset/MathQuiz.png'
import { Link } from "react-router-dom";


export default function MiniGame(){

    return(
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

                        {/* <Button floated='right'hef primary>
                            Lets Play
                            <Icon name='chevron right' />
                        </Button> */}
                        <Link floated='right' to="/hangman" hef primary>
                        <Button floated='right'hef primary>
                            Lets Play
                            <Icon name='chevron right' />
                        </Button>
                        </Link>
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
                        <Button floated='right' href='/' disabled>
                        Coming Soon!!
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