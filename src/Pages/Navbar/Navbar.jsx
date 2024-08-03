import React from 'react';
import { AiOutlineMenu, AiOutlineSetting } from 'react-icons/ai';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';

const Navbar = ({ toggleDashboard }) => {
    return (
        <nav className="bg-gray-800 p-[18px] shadow-md mb-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <AiOutlineMenu className="text-gray-300 text-xl cursor-pointer" onClick={toggleDashboard} />
                </div>
                <div className="flex items-center space-x-6 relative">
                    <div className="relative">
                        <IoMdNotifications className="text-gray-300 text-xl cursor-pointer" />
                        <span className="absolute bottom-3 left-[11px] inline-block w-[7px] h-[7px] bg-red-600 rounded-full"></span>
                    </div>
                    <div className="relative">
                        <BsEnvelopeFill className="text-gray-300 text-xl cursor-pointer" />
                        <span className="absolute bottom-[13px] left-[13px] inline-block w-[7px] h-[7px] bg-red-600 rounded-full"></span>
                    </div>
                    <FaCircleUser className="text-gray-300 text-xl cursor-pointer" />
                    <AiOutlineSetting className="text-gray-300 text-xl cursor-pointer" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
