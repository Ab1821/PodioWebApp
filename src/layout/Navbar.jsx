import React from 'react';
import {
    Link,
} from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light p-3 fixed-top">
                <div className="container-fluid mylogo">
                    <img src='img/logo.png' alt='logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Usecase'>Use Cases</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Request a Demo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=" ">More</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className='btn'>Login</button>
                            <button className="btn mybtn" >Sign up</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;