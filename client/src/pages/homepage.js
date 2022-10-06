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
                <Row debug>
                    <Col md={15} debug>Wellcome --username--</Col>
                </Row>
                <br/>
                <Row debug>
                    <Col md={8} debug>
                        <Row debug>
                            <Col debug>
                            <img src={profile} alt='profileImage' id='profileImage'></img>
                            <div>
                                Name: username
                                <br/>
                                WhereFrom: Location
                                <br/>
                                Score: All the game played and put togetther
                            </div>
                            </Col>
                            <Col debug>
                                <div>
                                    About me about profile:
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} debug>Friends</Col>
                </Row>
            </Container>
            </section>


        </div>
    )
}
