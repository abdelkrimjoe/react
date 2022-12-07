import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainComp from '../comp/mainComp';

const Home = () => {
    return (
        <>
       <Header /> 
        <MainComp pageName="Main" />
        <Footer/>
    </>
    );
}

export default Home;
