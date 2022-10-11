import React,{useState} from "react";
import {Link} from 'react-router-dom';

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Navbar from "./Navbar";

export default function SignUp(){
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
    };

    return(
        <section id="cover" className="min-vh-100">
            <Navbar/>
            <div id="cover-caption">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                            <h1 className="display-4 py-2 text-truncate">Sign up</h1>
                            <div className="px-2">
                            {data ?(
                                <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                              </p>

                            ):(
                                <form action="" className="justify-content-center" onSubmit={handleFormSubmit}>
                                    <div className="form-group">
                                        <label className="sr-only">email</label>
                                        <input type="email" className="form-control" placeholder="email"
                                        name="email"value={formState.email} onChange={handleChange}
                                        />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label className="sr-only">username</label>
                                        <input type="text" className="form-control" placeholder="username"
                                        name="username" value={formState.username} onChange={handleChange}
                                        />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label className="sr-only">password</label>
                                        <input type="password" className="form-control" placeholder="password"
                                        name="password" value={formState.password} onChange={handleChange}
                                        />
                                    </div>
                                    
                                    <br/>
                                    <button type="submit" className="btn btn-primary btn-lg">Sign up</button>
                                </form>
                            )}
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