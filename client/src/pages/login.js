import React from "react";
import Navbar from "./Navbar";

export default function Login(){


    return(
        
        <section id="cover" className="min-vh-100">
            <Navbar/>
            <div id="cover-caption">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                            <h1 className="display-4 py-2 text-truncate">login</h1>
                            <div className="px-2">
                                <form action="" className="justify-content-center">
                                    <div className="form-group">
                                        <label className="sr-only">username</label>
                                        <input type="text" className="form-control" placeholder="username"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">password</label>
                                        <input type="text" className="form-control" placeholder="password"/>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-primary btn-lg">Launch</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}