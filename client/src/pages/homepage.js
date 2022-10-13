import React from 'react';
import Navbar from './Navbar';
import Auth from "../utils/auth";



export default function Homepage(){
    return(
        <div>
            <Navbar/>       
            <p id='titleScreen'>Wellcome to Micro-Games</p>
            <div id='titleScreen'>
            On the website Miro-Games, you can play mini games. Your score will be saved in your profile, where you can also view the scores of your friends. A medal will be given to you if you achieve a high score. Additional features are developing. One of them uses your PNS log to display your games and other information.  
            </div>
            <br/>
            {!Auth.loggedIn()?(
                <div class="flex-parent jc-center">
                <a href="/login" className="btn btn-primary" id='buttonRight'>login</a>
                <a href="/signup" className="btn btn-primary" id='buttonRight'>sign-up</a>
            </div>
            ):(
                <>
                    <p id='titleScreen'>Wellcome --Username--</p>
                </>
            )}
            
            
        </div>
    )
}
