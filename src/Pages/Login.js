import React from 'react'
import Header from '../componenets/CommonComponents/Header';
import Loginform from '../componenets/Loginform';
import Footer from '../componenets/CommonComponents/Footer';
export default function Login() {
    return (
        <div className="App">
        <Header activeTab="active"/>
          <Loginform />
          <Footer />   
        </div>
    )
}
