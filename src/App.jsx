import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"; // Import kora holo

const App = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            {/* Prottek page change-e scroll top-e nite eta ekhane thaka dorkar */}
            <ScrollToTop /> 
            
            <Navbar></Navbar>
            <div className="flex-grow"> 
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default App;