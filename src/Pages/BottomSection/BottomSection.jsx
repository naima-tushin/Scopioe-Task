import React from 'react';
import img from '../../assets/images/Dp6.png';
import img2 from '../../assets/images/Dp5.png';
import { FaLocationArrow } from 'react-icons/fa';

const BottomSection = () => {
    return (
        <div className="flex w-[95%] mx-auto mb-6 gap-4">
            <div className="w-1/2 p-1">
                <h2 className="text-xl font-semibold mb-4">Featured Testimonials</h2>
                <div className="bg-white rounded-md p-4 h-[380px]">
                    <div className='border p-2 flex gap-4 rounded-md'>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <FaLocationArrow className='text-black'></FaLocationArrow>
                            123 Elm Street, New York
                            <p>Healing Bodywork by Cort</p>
                            <p>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...Read More</p>
                        </div>
                    </div>
                    <div className='border p-2 flex gap-4 mt-4 rounded-md'>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <FaLocationArrow className='text-black'></FaLocationArrow>
                            123 Elm Street, New York
                            <p>Healing Bodywork by Cort</p>
                            <p>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...Read More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 p-1">
                <h2 className="text-xl font-semibold mb-4">Popular Cities</h2>
                <div className="bg-white rounded-md h-[380px]">
                    <div className="grid grid-cols-3 gap-x-8 underline text-[#156BCA] text-sm">
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