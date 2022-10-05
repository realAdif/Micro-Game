import React from "react";

const Navbar = () =>{

    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="#Home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#MineGame">Mini Game</a>
            </li>  
        </ul>
    )
}

export default Navbar();