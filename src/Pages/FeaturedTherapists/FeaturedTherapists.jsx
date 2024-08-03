import React from 'react';
import Slider from 'react-slick';

const FeaturedTherapists = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Featured Therapists</h2>
            <Slider {...settings}>
                <div><img src="therapist1.jpg" alt="Therapist 1" /></div>
                <div><img src="therapist2.jpg" alt="Therapist 2" /></div>
                <div><img src="therapist3.jpg" alt="Therapist 3" /></div>
                <div><img src="therapist4.jpg" alt="Therapist 4" /></div>
                <div><img src="therapist5.jpg" alt="Therapist 5" /></div>
            </Slider>
        </div>
    );
};

export default FeaturedTherapists;