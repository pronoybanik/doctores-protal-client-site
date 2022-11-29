import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Sheare/Footer/Footer';
import NevBar from '../../Pages/Sheare/NevBar/NevBar';

const Main = () => {
    return (
        <div>
            <NevBar></NevBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;