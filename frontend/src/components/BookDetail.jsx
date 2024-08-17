/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useBook } from '../context/BookProvider'
import { useNavigate, useParams } from 'react-router-dom'
import book from "../../public/book.json"

const tax = 10;
const shop = 10
function BookDetail() {
    const navigate = useNavigate()
    const [bookData, setBookData] = useBook()
    const { id } = useParams()
    console.log(id);
    console.log(bookData);
    const filterData = book.map((item) => item)
    const singleData = filterData.filter((item) => item.id == id);
    console.log(singleData);






    return (
        <>
            <div className='md:pt-32 pt-16 dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-3'>
                <div className=' text-center flex  justify-center rounded-lg '>
                    <img className='' src={singleData[0].imageLink} alt="" />
                </div>
                <div className='mt-5 space-y-2 md:space-y-10'>
                    <h1 className='text-center lg:text-7xl text-xl md:5xl'>{singleData[0].title}</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique corrupti, tempore, laudantium minima distinctio id obcaecati eum repellat eligendi ea velit explicabo tempora nostrum quod sint cupiditate at aspernatur.</p>
                    <div className='flex justify-between md:mt-10 '>
                        <h1 className='md:text-3xl text-center items-center text-1xl mt-3 '>${singleData[0].price}</h1>
                        <h1 className='font-bold space-x-1 text-red-500 md:text-2xl text-xl mt-2'>{singleData[0].author}</h1>
                    </div>
                </div>
                <div className=' flex flex-col justify-center  mt-auto mb-auto'>
                    <div className="mt-6 grow sm:mt-8 lg:mt-0">
                        <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                            <div className="space-y-2">
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">${singleData[0].price}</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                    <dd className="text-base font-medium text-red-500">-$29</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">${shop}</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">${tax}</dd>
                                </dl>
                            </div>
                            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                <dd className="text-base font-bold text-gray-900 dark:text-white">${singleData[0].price + shop + tax}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="space-y-3 mt-2">

                        <div className="">
                            <input
                                type="text"
                                className="form-control w-full mx-2 py-2 outline-none"
                                placeholder="First Name"
                                name="fname"
                                // value={formData.fname}
                                // onChange={handleChange}
                                required
                            />
                        </div>


                        <div className="">
                            <input
                                type="text"
                                className="form-control w-full mx-2 py-2 outline-none"
                                placeholder="Last Name"
                                name="lname"
                                // value={formData.lname}
                                // onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="">
                            <div className="">
                                <input
                                    type="email"
                                    className="form-control w-full mx-2 py-2 outline-none"
                                    placeholder="Email"
                                    name="email"
                                    // value={formData.email}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="">
                            <input
                                type="number"
                                className="form-control w-full mx-2 py-2 outline-none"
                                placeholder="Mobile"
                                name="mobile"
                                minLength={10}
                                maxLength={10}
                                // value={formData.mobile}
                                // onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="">
                            <input
                                type="text"
                                className="form-control w-full mx-2 py-2 outline-none"
                                placeholder="Address"
                                name="address"
                                // value={formData.address}
                                // onChange={handleChange}
                                required
                            />
                        </div>





                    </div>
                    <button className='bg-green-500 mt-5 text-white px-3 py-2 rounded-md font-bold' onClick={() => navigate("/payment")}>Get Book</button>

                </div>

            </div>

        </>
    )
}

export default BookDetail