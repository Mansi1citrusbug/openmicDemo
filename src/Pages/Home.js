import React from 'react'
import Header from '../componenets/CommonComponents/Header';
import Homepage from '../componenets/Homepage';
import Footer from '../componenets/CommonComponents/Footer';
export default function Home() {
    return (
        <div>
           <Header activeTab="Home"/>
           <Homepage />
           <Footer /> 
        </div>
    )
}
