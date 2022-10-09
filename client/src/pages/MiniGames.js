import React from "react";
import {Container,Row,Col} from 'react-grid-system';
import Navbar from "./Navbar";


const style ={
    card:{
        width: "18rem",
        textAlign: "center"
    },
    container:{
        width: "640px",
        height: "auto",
        margin: "0 auto",
        padding: "10px",
        position: "relative"
    }
}


export default function MiniGame(){

    return(
        <section>
            <Navbar/>
            <br/>
            <Container fluid style={style.container}>
                <Row justify="between" debug>
                    <Col >
                    <div className="card" style={style.card}>
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Tic Tac Toe</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/tictactoe" className="btn btn-primary">Lets play</a>
                        </div>
                    </div>
                    </Col>
                    <Col >
                    <div className="card" style={style.card}>
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Math Quiz</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/mathquiz" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>  
                    </Col>
                </Row>
            </Container>


            
        </section>
    )

}