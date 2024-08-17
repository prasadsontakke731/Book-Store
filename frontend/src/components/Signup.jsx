/* eslint-disable no-unused-vars */
import React from 'react'
import axios from "axios"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()



    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("https://book-backend-1-iq03.onrender.com/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Signup Successfully");
                    navigate(from, { replace: true });
                }
                localStorage.setItem("User", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error(err.response.data.message);
                }
            })

    }
    return (
        <>
            <div className='flex h-screen items-center justify-center'>

                <div id="my_modal_3" className="w-[500px] ">
                    <div className="modal-box dark:bg-slate-900 dark:text-white ">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Sign Up</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" className='py-2 w-full px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Enter Your Name'
                                    {...register("fullname", { required: true })}
                                />
                                {errors.fullname && <span className='text-red-800 font-bold'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" className='py-2 w-full px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white ' placeholder='Enter Your Email'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-red-800 font-bold'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="password" className='py-2 w-full px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Enter Your Password'
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-red-800 font-bold'>This field is required</span>}
                            </div>
                            <div className='py-4 flex justify-between align-middle '>
                                <button className='bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-150 transition-all ease-in-out'>Register</button>
                                <p className='mt-2 mx-2'> Have an Account <Link to="/"><span className='text-pink-500 p-1 cursor-pointer font-semibold'>Login</span></Link></p>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Signup