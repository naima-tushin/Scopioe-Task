import React from 'react';
import img from '../../assets/images/img1.png';

const Search = () => {
    return (
        <div className="flex bg-white w-[95%] mx-auto p-8 rounded-md">
            <div className="w-full">
                <h1 className="text-xl font-bold mb-4">I'm Looking for Massage Therapist Near...</h1>
                <p className="mb-4 text-base w-[57%]">In using this site, I agree to be bound by the <span className='text-[#156BCA] underline'>Terms of Service</span>  and  <span className='text-[#156BCA] underline'>Privacy Policy</span></p>
                <input
                    type="text"
                    placeholder="Enter zip code or city name"
                    className="border p-2 w-[57%] rounded-lg"
                />
            </div>
            <div className="w-1/2">
                <img src={img} alt="Therapist" />
            </div>
        </div>
    );
};

export default Search;