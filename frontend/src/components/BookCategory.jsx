/* eslint-disable no-unused-vars */
import React from 'react'
import cBook from '../lib/categoryBooks'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'


function BookCategory() {
    const navigate = useNavigate()
    return (
        cBook.length == 0 ? <div className='pt-72'>
            <Loader />
        </div> :
            <div className='md:pt-24 pt-16 dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <h1 className='text-2xl text-center md:text-3xl my-3'>Books Category</h1>
                <div className='w-full h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ' >

                    {
                        cBook.map((item) => {
                            return <div className='h-[200px] w-[250px] flex flex-col justify-center align-middle ml-auto mr-auto dark:bg-slate-900 dark:text-white dark:hover:bg-gray-600 rounded-md cursor-pointer hover:space-y-3 transition-all ease-in-out border gap- my-3 hover:bg-gray-300' key={item.id} onClick={() => navigate(`/category/${item.id}`)}>
                                <img src={item.img} alt="" height={50} width={100} className='mx-auto my-2 ' />
                                <span className=' mx-auto '>{item.name}</span></div>
                        })
                    }

                </div>
            </div>
    )
}

export default BookCategory