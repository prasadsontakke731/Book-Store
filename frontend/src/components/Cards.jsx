/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cards({ item }) {
    
    const navigate = useNavigate()
    return (
        <div className='mt-4 my-3 p-3 '>
            <div className="card  bg-base-100 shadow-xl cursor-pointer hover:scale-105 duration-200 transition-all ease-in-out dark:bg-slate-900 dark:border dark:text-white " onClick={() => navigate(`/books/${item.id}`)} >
                <figure className='h-60'>
                    <img
                        src={item.image}
                        alt="Shoes"
                        className='h-56'

                    />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title ml-auto mr-auto ">
                        {item.title}

                        {
                            item.category === "free" ? <span className='bg-red-500 text-white font-mono px-2 rounded-md'>{item.category}</span> : <span className='bg-green-600 text-white font-mono px-2 rounded-md'>{item.category}</span>
                        }


                    </h2>
                    <p>{item.auther}</p>
                    <div className="card-actions flex justify-between align-middle text-center ">
                        <div className="badge badge-outline mt-2">${item.price} </div>
                        <div className="cursor-pointer px-2 py-1 hover:rounded-md border-[2px] hover:bg-green-600 hover:text-white duration-200 ">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards