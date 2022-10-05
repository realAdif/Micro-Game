import React from 'react';
import '../styles/homepage.css'
import banner from './MicroGame.png'

const Home = () => {
    return(
        <div>
            <img src={banner} alt='banner' id='banner'></img>
        </div>
    )
}
export default Home;