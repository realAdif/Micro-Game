import React,{useState} from "react";
import { useMutation } from '@apollo/client';
import {LOGIN_USER} from '../utils/mutations';
import Auth from '../utils/auth';

import Navbar from "./Navbar";


export default function Login(props){
    const [formState, setFormState] = useState({email: '', password: ''});
    const [login, {error}] = useMutation(LOGIN_USER);

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try{
            const {data} = await login({
                variables: {...formState},
            });
            console.log(data)

            Auth.login(data.login.token);
        } catch(e){
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    }

    return(
        
        <section id="cover" className="min-vh-100">
            <Navbar/>
            <div id="cover-caption">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                            <h1 className="display-4 py-2 text-truncate">login</h1>
                            <div className="px-2">
                                <form action="" className="justify-content-center" onSubmit={handleFormSubmit}>
                                    <div className="form-group">
                                        <label className="sr-only">Email</label>
                                        <input type="email" className="form-control" placeholder="username"
                                        name="email" value={formState.email} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">password</label>
                                        <input type="password" className="form-control" placeholder="password"
                                        name="password" value={formState.password} onChange={handleChange}
                                        />
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-primary btn-lg">Launch</button>
                                </form>

                                {error && (
                                    <div className="my-3 p-3 bg-danger text-white">
                                        {error.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}