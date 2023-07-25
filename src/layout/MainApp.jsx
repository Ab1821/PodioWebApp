import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Drive from './Drive';
import Collabration from './Collabration';
import ChanceLight from './ChanceLight';
import Dependibility from './Dependibility';
import Features from './Features';
import Footer from './Footer';

function MainApp(props) {
    return (
        <>
            <Navbar />
            <Header />
            <Drive />
            <Collabration />
            <ChanceLight />
            <Dependibility />
            <Features />
            <Footer />

        </>
    );
}

export default MainApp;