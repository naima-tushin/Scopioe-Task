import React, { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import Slider from 'react-slick';
import '../../App.css';

const BottomSection = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('/testimonials.json')
            .then(response => response.json())
            .then(data => setTestimonials(data))
            .catch(error => console.error('Error fetching testimonials:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: false,
        arrows: true, 
    };

    return (
        <div className="flex w-[95%] mx-auto mb-6 gap-4">
            <div className="w-1/2 p-1">
                <h2 className="text-xl font-semibold mb-4 font-poppins">Featured Testimonials</h2>
                <div className="bg-white rounded-md p-6 h-[380px]">
                    <Slider {...settings}>
                        {testimonials.reduce((acc, testimonial, index) => {
                            if (index % 2 === 0) {
                                acc.push(testimonials.slice(index, index + 2));
                            }
                            return acc;
                        }, []).map((pair, index) => (
                            <div key={index} className='flex flex-col gap-4'>
                                {pair.map(testimonial => (
                                    <div key={testimonial.id} className='border p-2 flex gap-4 rounded-md mb-4'>
                                        <div>
                                            <img src={testimonial.img} alt="Testimonial" className='w-32 h-32 object-cover rounded-md' />
                                        </div>
                                        <div className='w-[370px] py-2 h-32'>
                                            <div className="flex items-center mb-2 text-xs text-[#5C635A] tracking-wide font-poppins">
                                                <FaLocationDot className='mr-1' />
                                                <span>{testimonial.location}</span>
                                            </div>
                                            <p className="font-semibold mb-2 text-xs tracking-widest font-poppins">
                                                {testimonial.exercise} <span className="text-[#156BCA] cursor-pointer">by Cort</span>
                                            </p>
                                            <p className='text-[#5C635A] text-xs tracking-widest font-poppins leading-6'>
                                                {testimonial.testimonial} <span className="text-[#156BCA] underline cursor-pointer">Read More</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="w-1/2 p-1">
                <h2 className="text-xl font-semibold mb-4 font-poppins">Popular Cities</h2>
                <div className="bg-white rounded-md h-[380px]">
                    <div className="grid grid-cols-3 gap-x-6 underline text-[#156BCA] text-sm font-poppins">
                        {["Atlanta, GA", "Indianapolis, IN", "Philadelphia, PA", "Boston, MA", "Jacksonville, FL", "Queens, NY", "Chicago, IL", "Kansas City, MO", "Raleigh, NC", "Chicago, IL", "Los Angeles, CA", "San Antonio, TX", "El Paso, TX", "Miami, FL", "Tucson, AZ", "Fresno, CA", "Nashville, TN", "Upland, CA", "Houston, TX", "Oklahoma City, OK", "Washington, D.C."].map((city, index, array) => (
                            <React.Fragment key={index}>
                                <div className='py-4 px-6'>
                                    <h1>{city}</h1>
                                </div>
                                {(index + 1) % 3 === 0 && index !== array.length - 1 && (
                                    <div className="col-span-3">
                                        <hr className="border-t border-gray-300" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;
