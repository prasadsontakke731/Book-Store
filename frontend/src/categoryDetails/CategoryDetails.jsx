/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategoryDetail from '../components/CategoryDetail'

function CategoryDetails() {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen '>
                <CategoryDetail />
            </div>
            <Footer />
        </div>
    )
}

export default CategoryDetails