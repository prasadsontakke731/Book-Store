/* eslint-disable no-unused-vars */

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Books from './books/Books'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/register' element={<Signup />} />
      </Routes>

    </>
  )
}

export default App
