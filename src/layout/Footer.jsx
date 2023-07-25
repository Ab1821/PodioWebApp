import React from 'react';

function Footer(props) {
    return (
        <>
            <div className="container-fluid text-center mt-5 p-5 footer" >
                <h2 className='text-white'>Get started on Podio,
                    for streamlined work that will
                    <br />
                    drive your business forward.</h2>
                <div className="mysearch">
                    <input type='text' placeholder='Enter your work email' />
                    <button className='searchbtn'>Start Free</button>
                </div>

            </div>
            <div className="container mt-3 footer-2 ">
                <img src="img/logo.PNG" alt="logo" className='mx-5' />
                <a href="" className='mx-2'>Privacy and legal terms</a>
                <a href="" className='mx-2'> legal note</a>
                <a href="" className='mx-2'>Podio status</a>
                <a href="" className='mx-2'>Sitemap</a>
                <a href="" className='mx-2'>Do not share my personal info</a>

            </div>
            <div>
                <select name="" id="" className='myslct rounded mt-3'>
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">Spanish</option>
                </select>
            </div>
            <div className='text-end'>
                <h6>© 2023, Cloud Software Group, Inc. All rights reserved.</h6>
            </div>
        </>
    );
}

export default Footer;