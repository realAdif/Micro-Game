import React from 'react';
import {Container,Row,Col} from 'react-grid-system';
import '../styles/homepage.css'
import banner from '../styles/asset/MicroGame.png'
import profile from '../styles/asset/ProfilePic.jpg'






export default function Homepage(){
    return(
        <div>
            <img src={banner} alt='bannerImages' id='banner'></img>

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
                <Row >
                    <Col md={15} >
                        <h1>Wellcome --username--</h1>
                    </Col>
                </Row>
                <br/>
                <Row >
                    <Col md={8} >
                        <Row >
                            <Col >
                            <img src={profile} alt='profileImage' id='profileImage'></img>
                            <div>
                                Name: username
                                <br/>
                                WhereFrom: Location
                                <br/>
                                Score: All the game played and put togetther
                            </div>
                            </Col>
                            <Col >
                                <div>
                                    About me about profile:
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} >Friends</Col>
                </Row>
            </Container>
            </section>


        </div>
    )
}
