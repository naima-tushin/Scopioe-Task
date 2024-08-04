import React from 'react';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/Vector.png';

const Search = () => {
    return (
        <div className="flex bg-white w-[95%] mx-auto p-8 rounded-md">
            <div className="w-full">
                <h1 className="text-xl font-bold mb-4">I'm Looking for Massage Therapist Near...</h1>
                <p className="mb-6 text-base w-[50%]">
                    In using this site, I agree to be bound by the <span className='text-[#156BCA] underline font-medium'>Terms of Service</span> and <span className='text-[#156BCA] underline font-medium'>Privacy Policy</span>
                </p>
                <div className="relative w-[52%]">
                    <input
                        type="text"
                        placeholder="ZIP code or city name"
                        className="border p-3 bg-[#EEF2F5] w-[95%] rounded-lg pr-16"
                    />
                    <button className="absolute right-8 top-2 bottom-2 bg-[#156BCA] text-white px-8 rounded-lg uppercase">
                        Go
                    </button>
                </div>
            </div>
            <div className="relative">
                <img src={img1} alt="Therapist" className='w-[350px]' />
                <img src={img2} alt="Therapy" className="absolute bottom-0 right-32 h-40 z-10" />
            </div>
        </div>
    );
};

export default Search;
