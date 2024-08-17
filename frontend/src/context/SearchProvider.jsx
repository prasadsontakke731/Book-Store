/* eslint-disable react/prop-types */
import book from "../../public/book.json"
import { createContext, useContext, useState } from 'react'

export const SearchContext = createContext();
export default function SearchProvider({ children }) {
    const [query, setQuery] = useState("")

    const filterBooks = book.map((item) => {
        item.title.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <SearchContext.Provider value={[query, setQuery, filterBooks]}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearch = () => useContext(SearchContext);