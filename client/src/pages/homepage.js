import React from 'react';
import {Container,Row,Col} from 'react-grid-system';
import '../styles/homepage.css'
import banner from '../styles/asset/MicroGame.png'
import profile from '../styles/asset/ProfilePic.jpg'

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbar10">
                    <ul className="navbar-nav nav-fill w-100">
                        <li className="nav-item">
                            <a className="nav-link" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="MiniGame">Mini Game</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="signup">signup</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function Profile(){
    return(
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
    )
}

export default function Homepage(){
    return(
        <div>
            <img src={banner} alt='bannerImages' id='banner'></img>
            <Nav/>       
            <Profile/>
        </div>
    )
}
