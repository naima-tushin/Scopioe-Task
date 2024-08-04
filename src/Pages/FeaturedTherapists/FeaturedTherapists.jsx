import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { FaCar, FaMapMarkerAlt } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedTherapists = () => {
    const [therapists, setTherapists] = useState([]);
    const [activeArrow, setActiveArrow] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        fetch('/therapists.json')
            .then(response => response.json())
            .then(data => setTherapists(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleArrowClick = (arrow) => {
        setActiveArrow(arrow);
    };

    const PreviousArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={`${className} flex justify-center items-center`} onClick={() => { onClick(); handleArrowClick('prev'); }}>
                <div className={`rounded-full w-10 h-10 -ml-4 flex justify-center items-center ${activeArrow === 'prev' ? 'bg-[#156BCA]' : 'bg-[#D4E9FF]'}`}>
                    <MdArrowBackIos className={`text-xl flex justify-center items-center ml-2 ${activeArrow === 'prev' ? 'text-white' : 'text-black'}`} />
                </div>
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={`${className} flex justify-center items-center`} onClick={() => { onClick(); handleArrowClick('next'); }}>
                <div className={`rounded-full w-10 h-10 flex justify-center items-center ${activeArrow === 'next' ? 'bg-[#156BCA]' : 'bg-[#D4E9FF]'}`}>
                    <MdArrowForwardIos className={`text-xl ${activeArrow === 'next' ? 'text-white' : 'text-black'}`} />
                </div>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        afterChange: (current) => setCurrentSlide(current),
        ref: sliderRef,
    };

    return (
        <div className="py-2 w-[95%] mx-auto">
            <h2 className="text-xl font-semibold mb-4">Featured Therapist</h2>
            <div className='bg-white mx-auto py-4 px-16 rounded-md'>
                <Slider {...settings}>
                    {therapists.map((therapist, index) => (
                        <div key={index} className="p-4">
                            <div className="shadow-md rounded-md border">
                                <div className="p-3">
                                    <img src={therapist.image} alt={therapist.name} className="w-full h-40 object-contain rounded-md mb-4" />
                                    <h3 className="text-base font-medium mb-2">{therapist.name}</h3>
                                    <div className="flex items-center text-sm mb-2 text-[#5C635A]">
                                        <FaMapMarkerAlt className="mr-2" />
                                        <span>{therapist.location}</span>
                                    </div>
                                    <div className="flex items-center text-[#5C635A]">
                                        <FaCar className="mr-2" />
                                        <span>{therapist.mobile}</span>
                                    </div>
                                </div>
                                <button className={`w-full py-2 font-medium ${index === currentSlide ? 'bg-[#156BCA] text-white' : 'bg-[#D4E9FF] text-black'} underline`}>See Details</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FeaturedTherapists;
