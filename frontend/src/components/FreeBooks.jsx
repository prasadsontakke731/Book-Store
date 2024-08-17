/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import Loader from './Loader';

function FreeBooks() {
    // 
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:8080/book");
                const data = res.data.filter((data) => data.offer === "free");
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return book.length == 0 ? <Loader /> : (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Books</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus cupiditate dolorem provident modi quibusdam ducimus itaque sunt dignissimos accusantium.</p>

                </div>
                <div>
                    <Slider {...settings}>
                        {
                            book.map((item) => {
                                return <Cards key={item.id} item={item} />
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBooks