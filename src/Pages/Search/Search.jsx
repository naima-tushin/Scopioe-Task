import React from 'react';

const Search = () => {
    return (
        <div className="flex bg-white p-8">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold mb-4">Find a Therapist</h1>
                <p className="mb-4">Search by zip code or city name</p>
                <input
                    type="text"
                    placeholder="Enter zip code or city name"
                    className="border p-2 w-full"
                />
            </div>
            <div className="w-1/2">
                <img src="therapist.jpg" alt="Therapist" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Search;