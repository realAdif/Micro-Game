import React from 'react';
import {Container,Row,Col} from 'react-grid-system';
import '../styles/homepage.css'
import banner from '../styles/asset/MicroGame.png'




export default function Homepage(){
    return(
        <div>
            <img src={banner} alt='banner' id='banner'></img>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#MineGame">Mini Game</a>
                </li>  
            </ul>
            
            <section id='profile'>
            <Container fluid>
                <Row debug>
                    <Col md={15} debug>Wellcome userName</Col>
                </Row>
                <br/>
                <Row direction="column" debug>
                    <Col xs={3} debug>profile</Col>
                    <Col xs={3} debug>About me</Col>
                    <Col xs={3} debug>Score</Col>
                </Row>
            </Container>
            </section>


        </div>
    )
}
