import React,{useState} from 'react';
import {Container,Row,Col} from 'react-grid-system';
import { Button,Popup, Feed, Icon  } from 'semantic-ui-react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/homepage.css'
import profile from '../styles/asset/ProfilePic.jpg'
import { useQuery } from "@apollo/client";
import { useMutation } from '@apollo/client';
import {QUERY_USER} from '../utils/queries';
import {ADD_POST} from '../utils/mutations';


function ShowUserName(){
    const {loading, data } = useQuery(QUERY_USER);
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    return(
        <div className='profile-div'>
            Name: {data.user.username}
            <br/>
            Score: {data.user.score}
            <br/>
            <br/>
            {<MakePost/>}
        </div>
    )
}

function ShowAboutMe(){
    const {loading, data } = useQuery(QUERY_USER);
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    return(
        <div>{data.user.aboutMe}</div>
    )
}

function MakePost(){
    
    const [postState, setPostState] = useState({
        postText:'',
    })

    const [addPost, { error }] = useMutation(ADD_POST,{
        refetchQueries:[
            {query: QUERY_USER}
        ]
    });
    
    const handlePost = async (event) => {
        event.preventDefault();
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

function Post({post}){
    
    return(
        <>
            <h2>All the posts of your user</h2>
            {post.map((post,index) => (
                <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <Icon name='pencil'/>
                    </Feed.Label>
                    <Feed.Content>
                    <Feed.Summary key={index}>{post}</Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </Feed>            
                        
            ))}
            
        </>
    )
}

function ProfileC(){
    const {loading, data } = useQuery(QUERY_USER);
    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    return(
        <section className='profile'>
            <Container fluid>
                <Row >
                    <Col>
                        <h1>Wellcome {data.user.username} to Micro-Game</h1>
                    </Col>
                </Row>
                <br/>
                <Row >
                    <Col debug>
                        <Row >
                            <Col debug>
                            <img src={profile} alt='profileImage' className='profileImage'></img>
                            <ShowUserName/>
                            </Col>

                            <Col debug>
                                <div className='profile-div'>
                                    About me about profile:
                                </div>
                                <div><ShowAboutMe/></div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
            <Post post={data.user.post}/>
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