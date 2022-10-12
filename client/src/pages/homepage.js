import React from 'react';
import {Container,Row,Col} from 'react-grid-system';
import Navbar from './Navbar';
// import '../styles/homepage.css'
import profile from '../styles/asset/ProfilePic.jpg'
import { useQuery } from "@apollo/client";
import {QUERY_USER} from '../utils/queries'




export default function Homepage(){
    return(
        <div>
            <Navbar/>       
            <p id='titleScreen'>Wellcome to Micro-Games</p>
            <div id='titleScreen'>
            On the website Miro-Games, you can play mini games. Your score will be saved in your profile, where you can also view the scores of your friends. A medal will be given to you if you achieve a high score. Additional features are developing. One of them uses your PNS log to display your games and other information.  
            </div>
        </div>
    )
}
