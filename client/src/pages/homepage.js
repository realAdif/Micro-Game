import React from 'react';
import {Container,Row,Col} from 'react-grid-system';
import Navbar from './Navbar';
import '../styles/homepage.css'
import profile from '../styles/asset/ProfilePic.jpg'
import { useQuery } from "@apollo/client";
import {QUERY_USER} from '../utils/queries'




export default function Homepage(){
    return(
        <div>
            <Navbar/>       
            <p>Wellcome to </p>
        </div>
    )
}
