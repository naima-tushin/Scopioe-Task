import React, { useState, useEffect } from 'react';
import { CiLogin } from 'react-icons/ci';
import { GoBell } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import profileImagePlaceHolder from '../../assets/images/PP.png'
import { auth, signOut } from '../../firebase/firebase.config'; 



const Navbar = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        photoURL: ''
    });

    const navigate = useNavigate(); 

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('user');
        setUser({
            name: '',
            email: '',
            photoURL: ''
        });
        navigate('/');
    };

    return (
        <nav className="p-2 border bg-white mb-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src={user.photoURL || profileImagePlaceHolder}
                        alt="User"
                        className="w-8 h-8 rounded-full mr-4"
                    />
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold mr-2 text-sm">{user.name || 'No Name'}</span>
                            <IoIosArrowDown /> 
                        </div>
                        <span className="text-gray-600 text-sm">{user.email || 'No Email'}</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className='border rounded-full w-8 items-center justify-center flex h-8'>
                        <GoBell className="text-xl cursor-pointer" />
                    </div>
                    <div className="border-l-2 h-6 border-gray-300 mx-4"></div>
                    <span
                        className="mr-2 cursor-pointer text-[#F15E4A] font-medium text-sm"
                        onClick={handleLogout}
                    >
                        Log Out
                    </span>
                    <div className='rounded-full w-8 items-center justify-center flex h-8 bg-[#FFECEA] text-[#F15E4A]'>
                        <CiLogin className="text-xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
