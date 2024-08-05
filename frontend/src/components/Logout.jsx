/* eslint-disable no-unused-vars */
import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()

    const handleLogout = () => {
        try {
            setAuthUser({
                ...useAuth,
                user: null
            })
            localStorage.removeItem("User")


            toast.success("Logout Successfully")
            // document.getElementById("my_modal_3").close()
            window.location.reload()
            setTimeout(() => {

            }, 3000);
        } catch (error) {
            toast.error(error)
            setTimeout(() => {

            }, 3000);
        }
    }
    return (
        <div>
            <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout