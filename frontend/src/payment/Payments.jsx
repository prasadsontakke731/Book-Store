/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Payment from '../components/Payment'

function Payments() {
  return (
      <div>
          <Navbar />
          <div className='min-h-screen '>
              <Payment />
          </div>
          <Footer />
      </div>
  )
}

export default Payments