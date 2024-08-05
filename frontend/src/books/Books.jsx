/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Book from '../components/Book'
function Books() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen '>
        <Book />
      </div>
      <Footer />
    </div>
  )
}

export default Books