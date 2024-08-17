/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookCategory from '../components/BookCategory'

function BookCategories() {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                <BookCategory />
            </div>
            <Footer />
        </div>
    )
}

export default BookCategories