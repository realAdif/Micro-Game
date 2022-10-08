import React from "react";


export default function Login(){


    return(
        <section id="cover" class="min-vh-100">
            <div id="cover-caption">
                <div class="container">
                    <div class="row text-white">
                        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                            <h1 class="display-4 py-2 text-truncate">login.</h1>
                            <div class="px-2">
                                <form action="" class="justify-content-center">
                                    <div class="form-group">
                                        <label class="sr-only">username</label>
                                        <input type="text" class="form-control" placeholder="username"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="sr-only">password</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                    <br/>
                                    <button type="submit" class="btn btn-primary btn-lg">Launch</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}