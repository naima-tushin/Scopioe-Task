import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import img from '../../assets/images/Login.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-28">
                <div className="relative text-center lg:text-left">
                    <img className='w-[550px] h-[600px]' src={img} alt="Login" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[250px] h-[110px] bg-[#152A16] opacity-70 rounded-lg flex flex-col items-center justify-center">
                            <h1 className="text-lg font-medium text-[#156BCA]">Create Account</h1>
                            <p className="text-xl text-white">Fill in Your Information</p>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        <Link
                            to="/"
                            className="w-2 h-2 bg-blue-500 rounded-full block"
                        ></Link>
                        <Link
                            to="/signIn" 
                            className="w-2 h-2 bg-gray-400 rounded-full block"
                        ></Link>
                        <Link
                            to="" 
                            className="w-2 h-2 bg-gray-400 rounded-full block"
                        ></Link>
                    </div>
                </div>
                <div className="card w-[450px] shrink-0">
                    <form className="card-body">
                        <h1 className='uppercase text-3xl text-[#4285F3] font-poor-richard'>Logo</h1>
                        <h2 className='text-2xl font-bold font-poppins'>Sign In To Your Account</h2>
                        <p className='text-sm font-medium text-slate-500 leading-5 tracking-wide mb-1'>Welcome Back! By clicking the sign-up button, you agree to Zenitood Terms and Service and acknowledge the <span className='text-[#4285F3] underline'>Privacy and Policy</span></p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="@username" className="input text-xs font-semibold input-bordered h-10" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input text-xs font-semibold input-bordered h-10" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="input text-xs font-semibold input-bordered h-10" required />
                            <div className="absolute top-2/3 right-0 pr-3 flex items-center text-sm leading-5">
                                <button type="button" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-semibold">Confirm Password</span>
                            </label>
                            <input type={showConfirmPassword ? "text" : "password"} placeholder="Re-type password" className="input text-xs font-semibold input-bordered h-10" required />
                            <div className="absolute top-2/3 right-0 pr-3 flex items-center text-sm leading-5">
                                <button type="button" onClick={toggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <div className='flex'>
                            <input type="checkbox" id="terms" className="mr-2" required />
                            <label htmlFor="terms" className="text-xs text-[#4285F3] font-poppins">Accept Terms of Service</label>
                        </div>
                        <div className="form-control items-center justify-center mt-2">
                            <button className="rounded-md py-3 font-poppins text-xs text-white w-[200px] bg-[#4285F3]">Sign Up</button>
                        </div>
                        <div className="text-center mt-1 font-poppins">
                            <p className="font-medium text-xs ">Already Have an Account? <Link to="/signIn" className="font-semibold text-xs text-[#156BCA] underline">Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
