/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import axios from 'axios';
function Book() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-store-k7va.vercel.app/book");
        const data = res.data
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // const [query, setQuery, filterBooks] = useBook()



  return book.length == 0 ? <div className='min-h-screen pt-52 md:pt-72 px-4 dark:bg-slate-900 dark:text-white flex align-middle justify-center'>
    <div className='loader'></div>
  </div> : (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className=' items-center justify-center text-center'>
          <div className='space-y-2'>
            <h1 className='text-2xl md:text-4xl pt-28'>We delighted to have <span className='text-pink-500'>Here</span>
            </h1>
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white"
                // value={query}
                placeholder="Search"
              // onChange={(e) => setQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
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