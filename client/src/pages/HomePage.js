import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import {QUERY_USER} from '../utils/queries'
import { Link } from 'react-router-dom';


export default function Homepage(){

    const { loading, data } = useQuery(QUERY_USER);
  
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    return(
        <div>
            <Navbar/>       
            <p className='titleScreen'>Wellcome to Micro-Games</p>
            <div className='titleScreen'>
                <p>
                    On the website Miro-Games, you can play mini games. Your score will be saved in your profile, 
                    where you can also view the scores of your friends. A medal will be given to you if you achieve a high score. 
                    Additional features are developing. One of them uses your PNS log to display your games and other information.
                </p>  
            </div>
            <br/>
            {!Auth.loggedIn()?(
            <div className="flex-parent jc-center">
                <Link className='btn btn-primary buttonRight' to="/login"> Login</Link>
                <Link className="btn btn-primary buttonRight" to="/signup">sign-up</Link>
            </div>
            ):(
                <>
                    <p className='titleScreen'>Wellcome {data.user.username}</p>
                </>
            )}
            
            <Footer/>
        </div>
    )
}
