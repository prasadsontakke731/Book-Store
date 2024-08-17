/* eslint-disable no-unused-vars */

import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import './App.css'
import Home from './Home/Home'
import Books from './books/Books'
import Signup from './components/Signup'
import { useAuth } from './context/AuthProvider'
import { motion, useScroll } from "framer-motion"
import Contact from './components/Contact'
import Contacts from './contact/Contacts'
import BookDetails from './bookDetails/BookDetails'
import Payments from './payment/Payments'
import BookCategories from './bookCategory/BookCategories'
import CategoryDetails from './categoryDetails/CategoryDetails'

function App() {
  const [authUser, setAuthUser] = useAuth()
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} className='scrollAnimation z-50'></motion.div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={authUser ? <Books /> : <Navigate to="/" />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='books/:id' element={authUser ? <BookDetails /> : <Navigate to="/" />} />
        <Route path='/payment' element={authUser ? <Payments /> : <Navigate to="/" />} />
        <Route path='/category' element={authUser ? <BookCategories /> : <Navigate to="/" />} />
        <Route path='/category/:id' element={authUser ? <CategoryDetails /> : <Navigate to="/" />} />


      </Routes>
      <Toaster />

    </>
  )
}

export default App
