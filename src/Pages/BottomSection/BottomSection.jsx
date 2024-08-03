import React from 'react';

const BottomSection = () => {
    return (
        <div className="flex">
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-4">Featured Testimonials</h2>
                <p>Testimonial content...</p>
            </div>
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-4">Popular Cities</h2>
                <p>City list...</p>
            </div>
        </div>
    );
};

export default BottomSection;