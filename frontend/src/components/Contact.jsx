/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // 
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        await axios.post("https://book-store-three-teal.vercel.app/contact", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Message Sent  Successfully");
                    document.getElementById("my_modal_3").close();


                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error(err.response.data.message);

                }
            })

    }

    return (
        <div className='dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 absolute top-6  left-0 right-0'>
            <div className="bg-green-50 dark:bg-slate-900 dark:text-white font-[sans-serif] lg:h-screen">
                <div
                    className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
                    <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6 dark:bg-slate-900 dark:text-white">
                        <h2 className="dark:bg-slate-900 dark:text-white text-4xl font-extrabold text-gray-800">Get In Touch</h2>
                        <p className="dark:bg-slate-900 dark:text-white text-sm text-gray-600 mt-4 leading-relaxed">Have a specific inquiry or looking to explore new opportunities? Our
                            experienced team is ready to engage with you.</p>

                        <form className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4 dark:bg-slate-900 dark:text-white dark:border" onSubmit={handleSubmit(onSubmit)}>
                            <input type='text' placeholder='Name'
                                className="dark:bg-slate-900 dark:text-white w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none dark:border"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-red-800 font-bold'>This field is required</span>}

                            <input type='email' placeholder='Email'
                                className="dark:bg-slate-900 dark:text-white w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none dark:border"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-800 font-bold'>This field is required</span>}
                            <textarea placeholder='Message' rows="6"
                                className="dark:bg-slate-900 dark:text-white w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none dark:border"

                                {...register("message", { required: true })}
                            ></textarea>
                            {errors.message && <span className='text-red-800 font-bold'>This field is required</span>}
                            <button type='submit'
                                className="dark:bg-slate-900 dark:text-white text-gray-800 dark:border bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-6 py-3 block w-full">Send
                                Message</button>
                        </form>
                    </div>

                    <div className="z-10 relative lg:col-span-2">
                        <img src="https://readymadeui.com/images/analtsis.webp" className="w-3/4 object-contain block mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact