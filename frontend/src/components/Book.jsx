/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Book() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8080/book")
        console.log(res.data);
        setBook(res.data)

      } catch (error) {
        console.log(error);

      }
    }
    getBook()

  }, [])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className=' items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl pt-28'>We delighted to have <span className='text-pink-500'>Here</span>
          </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima recusandae laudantium facilis necessitatibus, impedit molestias reiciendis odio modi optio enim, quisquam cupiditate dolorum, pariatur illo reprehenderit accusamus rem numquam!</p>
          <Link to="/"><button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-300 transition-all ease-in-out'>Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3'>
          {
            book.map((item) => {
              return <Cards key={item.id} item={item} />
            })
          }
        </div>
      </div>

    </>
  )
}

export default Book