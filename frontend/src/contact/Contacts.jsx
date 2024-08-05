/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Contacts() {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                <Contact />
            </div>
            <div className='mt-16'>
                <Footer />
            </div>
        </div>
    )
}

export default Contacts