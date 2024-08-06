/* eslint-disable react/prop-types */

import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react'

export const BookContext = createContext();
export default function BookProvider({ children }) {
    const [bookData, setBookData] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:8080/book")
                console.log(res.data);
                setBookData(res.data)

            } catch (error) {
                console.log(error);

            }
        }
        getBook()

    }, [])
    return (
        <BookContext.Provider value={[bookData, setBookData]}>
            {children}
        </BookContext.Provider>
    );
}

export const useBook = () => useContext(BookContext);