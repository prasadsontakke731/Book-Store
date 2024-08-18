/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("https://book-store-k7va.vercel.app/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Loggedin Successfully");
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("User", JSON.stringify(res.data.user));
                    }, 1000);
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error(err.response.data.message);
                    setTimeout(() => { }, 2000);
                }
            })

    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <Link onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" className='py-2 w-full px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white' placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-800 font-bold'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type="password" className='py-2 w-full px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white' placeholder='Enter Your Password'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-800 font-bold '>This field is required</span>}
                        </div>
                        <div className='py-4 flex justify-between align-middle '>
                            <button type='submit' className='bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-150 transition-all ease-in-out'>Login</button>
                            <p className='mt-2'>Dont have an account <Link to="/register"><span className='text-pink-500 p-1 cursor-pointer font-semibold'>Register</span></Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login