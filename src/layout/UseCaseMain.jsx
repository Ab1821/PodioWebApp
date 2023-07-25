import React from 'react';
import Navbar from './Navbar';
import Usecase from './Usecase';
import Popular from './Popular';
import Footer from './Footer';


function UseCaseMain(props) {
    return (
        <>
            <Navbar />
            <Usecase />
            <Popular />
            <Footer />

        </>
    );
}

export default UseCaseMain;