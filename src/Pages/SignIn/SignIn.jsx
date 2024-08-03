import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { LuFacebook } from 'react-icons/lu';
import img from '../../assets/images/Login.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth, facebookProvider, googleProvider, signInWithPopup, signInWithEmailAndPassword } from '../../firebase/firebase.config';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
            navigate('/home');
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignInWithFacebook = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            console.log(result.user);
            navigate('/home');
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignInWithEmail = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                setError('Incorrect password. Please try again.');
            } else if (error.code === 'auth/user-not-found') {
                setError('No account found with this email. Please sign up.');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-28">
                <div className="relative text-center lg:text-left">
                    <img className='w-[550px] h-[600px]' src={img} alt="Login" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[250px] h-[110px] bg-[#152A16] opacity-70 rounded-lg flex flex-col items-center justify-center">
                            <p className="text-xl text-center text-white"><span className='text-[#156BCA] font-bold'>Sign In</span> to view all the massage therapists</p>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        <Link to="/" className="w-2 h-2 bg-gray-400 rounded-full block"></Link>
                        <Link to="/signIn" className="w-2 h-2 bg-blue-500 rounded-full block"></Link>
                        <Link to="" className="w-2 h-2 bg-gray-400 rounded-full block"></Link>
                    </div>
                </div>
                <div className="card w-[400px] shrink-0">
                    <form className="card-body" onSubmit={handleSignInWithEmail}>
                        <h1 className='uppercase text-3xl text-[#4285F3] font-poor-richard'>Logo</h1>
                        <h2 className='text-2xl font-bold font-poppins'>Log In To Your Account</h2>
                        <p className='text-sm font-medium text-slate-500 leading-5 tracking-wide mb-4'>Welcome Back! Select a method to log in:</p>
                        <div className="flex justify-between mb-2">
                            <button onClick={handleSignInWithGoogle} className="flex items-center justify-center text-black border border-gray-300 rounded-md py-2 px-4 w-[45%]" style={{
                                background: 'linear-gradient(97.97deg, rgb(228, 228, 228) 0.641%, rgb(255, 255, 255) 99.533%)',
                            }}>
                                <FcGoogle className="mr-2" />
                                Google
                            </button>
                            <button onClick={handleSignInWithFacebook} className="flex items-center justify-center text-white rounded-md py-2 px-4 w-[45%]" style={{
                                background: 'linear-gradient(49.35deg, rgb(41, 143, 255) 0.488%,rgb(7, 120, 245) 99.098%)',
                            }}>
                                <LuFacebook className="mr-2" />
                                Facebook
                            </button>
                        </div>
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-2 text-xs text-slate-500 font-medium">Or Continue with Email</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input text-xs font-semibold input-bordered h-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="input text-xs font-semibold input-bordered h-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="absolute top-2/3 right-0 pr-3 flex items-center text-sm leading-5">
                                <button type="button" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <input type="checkbox" id="terms" className="mr-2" required />
                                <label htmlFor="terms" className="text-xs font-poppins">Remember me</label>
                            </div>
                            <h1 className="text-xs text-[#156BCA] underline font-semibold font-poppins">Forgot password?</h1>
                        </div>
                        <div className="form-control items-center justify-center mt-6">
                            <button type="submit" className="rounded-md py-3 font-poppins text-xs text-white w-[200px] bg-[#156BCA]">Sign In</button>
                        </div>
                        <div className="text-center mt-1 font-poppins">
                            <p className="font-medium text-xs ">Don't Have an Account? <Link to="/" className="font-medium text-xs text-[#156BCA] underline">Create Account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
