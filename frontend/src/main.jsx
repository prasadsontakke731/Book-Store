/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import AuthProvider from './context/AuthProvider.jsx'
import BookProvider from './context/BookProvider.jsx'
import SearchProvider from './context/SearchProvider.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Loader from './components/Loader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <BookProvider>
        <SearchProvider>

          <div className='dark:bg-slate-900 dark:text-white '>
            <ScrollToTop />
            <App />
            
          </div>
        </SearchProvider>
      </BookProvider>
    </AuthProvider>
  </BrowserRouter>,
)
