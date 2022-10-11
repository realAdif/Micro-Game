import React from 'react';
import {Container,Row,Col} from 'react-grid-system';
import Navbar from './Navbar';
import '../styles/homepage.css'
import profile from '../styles/asset/ProfilePic.jpg'
import { useQuery } from "@apollo/client";
import {QUERY_USER} from '../utils/queries'



function ProfileC(){
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

export default function Profile(){
    return(
        <div>
            <Navbar/>       
            <ProfileC/>
        </div>
    )
}