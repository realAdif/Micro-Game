import React from "react";
import banner from '../styles/asset/MicroGame.png'
import Auth from "../utils/auth";
console.log(Auth.loggedIn());
export default function Navbar(){
    
    return(
        <div>

        <img src={banner} alt='bannerImages' id='banner'></img>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbar10">
                    <ul className="navbar-nav nav-fill w-100">
                        <li className="nav-item">
                            <a className="nav-link" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="MiniGame">MINI GAMES</a>
                        </li>
                        {!Auth.loggedIn()?  
                        (
                        <>
                        <li className="nav-item">
                            <a className="nav-link" href="login">LOGIN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="signup">SIGN UP</a>
                        </li>
                        </>
                        ): (<>
                            <li className="nav-item">
                                <a className="nav-link" href="profile">PROFILE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" >LOGGED OUT</a>
                            </li>
                            </>)  }
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

