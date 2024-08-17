/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from "react-router-dom"
import books from "../../public/book.json"
import Cards from './Cards';

function CategoryDetail() {
    const { id } = useParams()
    console.log(id);

    const categoryBook = books.map((item) => item).filter((item) => item.cId == id)
    console.log(categoryBook);





    return (
        <>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:pt-24 pt-16 dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 gap-4 text-center'>

                {

                    categoryBook.map((item) => {
                        return (
                            <Cards key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default CategoryDetail