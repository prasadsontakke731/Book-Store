/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookDetail from '../components/BookDetail'

function BookDetails() {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen '>
                <BookDetail />
            </div>
            <Footer />
        </div>
    )
}

export default BookDetails