/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" className='py-2 w-full px-3 border rounded-md outline-none ' placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-800 font-bold'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type="password" className='py-2 w-full px-3 border rounded-md outline-none ' placeholder='Enter Your Password'
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