/* eslint-disable react/prop-types */

import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react'
import book from "../../public/book.json"

export const BookContext = createContext();
export default function BookProvider({ children }) {
    const [bookData, setBookData] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://book-backend-4vef.onrender.com/book")
                console.log(res.data);
                setBookData(res.data)

            } catch (error) {
                console.log(error);

            }
        }
        getBook()

    }, [])
    return (
        <BookContext.Provider value={[bookData, setBookData, book]}>
            {children}
        </BookContext.Provider>
    );
}

export const useBook = () => useContext(BookContext);