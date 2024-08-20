/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from "formik"
import { AddressValidation } from './AddressValidation'
import book from "../../public/book.json"

const tax = 10;
const shop = 10;
const initialValue = {
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    address: ""
}
function BookDetail() {
    const navigate = useNavigate()
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValue,
        validationSchema: AddressValidation,
        onSubmit: (value) => {
            console.log(value);

        }
    })


    console.log();

    const { id } = useParams()
    console.log(id);

    const filterData = book.map((item) => item)
    const singleData = filterData.filter((item) => item.id == id);
    console.log(singleData);


    const submit = (e) => {

        e.preventDefault()
        handleSubmit()

        // navigate("/payment")
        // console.log(values.fName.length);

        if (values.fName.length !== 0 && values.lName.length !== 0 && values.email.length !== 0 && values.mobile.length !== 0 && values.address.length !== 0) {
            navigate("/payment")
        }




    }



    return (
        <>
            <div className='md:pt-32 pt-16 dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-3'>
                <div className=' text-center flex  justify-center rounded-lg '>
                    <img className='' src={singleData[0].imageLink} alt="" />
                </div>
                <div className='mt-5 space-y-2 md:space-y-10'>
                    <h1 className='text-center lg:text-7xl text-xl md:5xl'>{singleData[0].title}</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique corrupti, tempore, laudantium minima distinctio id obcaecati eum repellat eligendi ea velit explicabo tempora nostrum quod sint cupiditate at aspernatur.</p>
                    <div className='flex justify-between md:mt-10 '>
                        <h1 className='md:text-3xl text-center items-center text-1xl mt-3 '>${singleData[0].price}</h1>
                        <h1 className='font-bold space-x-1 text-red-500 md:text-2xl text-xl mt-2'>{singleData[0].author}</h1>
                    </div>
                </div>
                <div className=' flex flex-col justify-center  mt-auto mb-auto'>

                    <div className="mt-6 grow sm:mt-8 lg:mt-0">
                        <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                            <div className="space-y-2">
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">${singleData[0].price}</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                    <dd className="text-base font-medium text-red-500">-$29</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">${shop}</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">${tax}</dd>
                                </dl>
                            </div>
                            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                <dd className="text-base font-bold text-gray-900 dark:text-white">${singleData[0].price + shop + tax}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="space-y-3 mt-2 px-2 mr-4  ">
                        <form onSubmit={submit}>


                            <input
                                type="text"
                                name="fName"
                                className="form-control w-full mx-2 py-2 outline-none dark:bg-slate-900 dark:text-white"
                                placeholder="First Name"
                                // value={formData.fname}
                                // onChange={handleChange}
                                value={values.fName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <p className='ms-2 tracking-widest text-red-600'>{errors.fName && errors.fName}</p>




                            <input
                                type="text"
                                name="lName"
                                className="form-control w-full mx-2 py-2 outline-none dark:bg-slate-900 dark:text-white"
                                placeholder="Last Name"
                                // value={formData.lname}
                                // onChange={handleChange}
                                value={values.lName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <p className='ms-2 tracking-widest text-red-600'>{errors.lName && errors.lName}</p>



                            <input
                                type="email"
                                name="email"
                                className="form-control w-full mx-2 py-2 outline-none dark:bg-slate-900 dark:text-white"
                                placeholder="Email"
                                // value={formData.email}
                                // onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <p className='ms-2 tracking-widest text-red-600'>{errors.email && errors.email}</p>


                            <input
                                type="number"
                                name="mobile"
                                className="form-control w-full mx-2 py-2 outline-none dark:bg-slate-900 dark:text-white"
                                placeholder="Mobile"
                                minLength={10}
                                maxLength={10}
                                // value={formData.mobile}
                                // onChange={handleChange}
                                value={values.mobile}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <p className='ms-2 tracking-widest text-red-600'>{errors.mobile && errors.mobile}</p>



                            <input
                                type="text"
                                name='address'
                                placeholder="address"
                                className="form-control w-full mx-2 py-2 outline-none dark:bg-slate-900 dark:text-white"
                                // value={formData.address}
                                // onChange={handleChange}
                                value={values.address}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <p className='ms-2 tracking-widest text-red-600'>{errors.address && errors.address}</p>

                            <button className='bg-green-500 mt-5 text-white ms-2 py-2 rounded-md font-bold w-full' >Get Book</button>
                        </form>
                    </div>

                </div>

            </div>

        </>
    )
}

export default BookDetail