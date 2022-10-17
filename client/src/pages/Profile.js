import React,{useState} from 'react';
import {Container,Row,Col} from 'react-grid-system';
import { Button,Popup } from 'semantic-ui-react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/homepage.css'
import profile from '../styles/asset/ProfilePic.jpg'
import { useQuery } from "@apollo/client";
import { useMutation } from '@apollo/client';
import {QUERY_USER} from '../utils/queries';
import {ADD_POST} from '../utils/mutations';


function Makepost(){

    const [postState, setPostState] = useState({
        postText:''
    })
    const [addPost, { error }] = useMutation(ADD_POST);
    
    const handlePost = async (event) => {
        event.preventDefault();
        console.log(postState)
        try {
          const { data } = addPost({
            variables: { post: postState.postText },
          });
        } catch (err) {
          console.error(err);
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log({name, value})
        if (name === 'postText') {
          setPostState({ ...postState, [name]: value });

        } else if (name !== 'postText') {
            setPostState({ ...postState, [name]: value });
        }
    };

    return(
        <Popup content={
            <>
            <textarea 
            onChange={handleChange} 
            value={postState.postText}
            name="postText" 
            ></textarea>
            <Button onClick={handlePost}>Post</Button>
            </>
        } on='click' popper={{ id: "popper-container", style: { zIndex: 2000 } }}
        trigger={<Button positive>Make a post</Button>}
        />
    )
}

function ProfileC(){
    const {loading, data } = useQuery(QUERY_USER);
    console.log(data)
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    return(
        <section id='profile'>
            <Container fluid>
                <Row >
                    <Col md={15} >
                        <h1>Wellcome {data.user.username} to Micro-Game</h1>
                    </Col>
                </Row>
                <br/>
                <Row >
                    <Col md={8} >
                        <Row >
                            <Col >
                            <img src={profile} alt='profileImage' id='profileImage'></img>
                            <div>
                                Name: {data.user.username}
                                <br/>
                                Score: {data.user.score}
                                <br/>
                                {<Makepost/>}
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
            <Footer/>
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