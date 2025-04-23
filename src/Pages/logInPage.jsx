import { useState } from "react";
import axios from 'axios';
import plantBg from '../assets/sign.png'; 
import {Link} from 'react-router-dom';

const url = "http://localhost:5000"; 

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/user/logIn`, { email, password });
            if (response.status === 200) {
                console.log("Login successful:", response.data.message);
            } else {
                console.error("Login failed:", response.data.message);
            }
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex w-full h-screen">
            {/* Left Form Section */}
            <div className="w-3/5 flex flex-col justify-center items-center px-16">
                <div className="w-full max-w-sm">
                    <h2 className="text-3xl font-semibold text-black mb-8">Welcome Back!</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Enter your credentials to access your account
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-sm font-medium text-black">Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="mt-1 w-full border px-3 py-2 rounded-md bg-white text-black focus:ring-2 focus:ring-green-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-black">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="mt-1 w-full border px-3 py-2 rounded-md bg-white text-black focus:ring-2 focus:ring-green-500 outline-none"
                            />
                            <div className="text-right mt-1">
                                <a href="#" className="text-sm text-green-700 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-black">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="accent-green-600"
                            />
                            <label>Remember for 30 days</label>
                        </div>
                        
                        <Link to={'/home'}>
                            <button
                                type="submit"
                                className="w-full bg-[#3A5B22] hover:bg-green-800 text-white py-2 rounded-md font-semibold transition duration-300">
                                Log In
                            </button>
                        </Link>
                    </form>

                    {/* OR Divider */}
                    <div className="my-6 border-t text-center text-gray-400 text-sm relative">
                        <span className="absolute bg-white px-2 left-1/2 transform -translate-x-1/2 -top-2">or</span>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex justify-between gap-4">
                        <button className="flex-1 flex items-center justify-center border px-4 py-2 rounded-md text-sm hover:bg-gray-100">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                            Sign in with Google
                        </button>
                        <button className="flex-1 flex items-center justify-center border px-4 py-2 rounded-md text-sm hover:bg-gray-100">
                            <img src="https://img.icons8.com/ios-filled/16/000000/mac-os.png" alt="Apple" className="mr-2" />
                            Sign in with Apple
                        </button>
                    </div>

                    <p className="text-sm text-center mt-6 text-black">
                        Don’t have an account? <a href="/signup" className="text-blue-600 font-medium">Sign Up</a>
                    </p>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="w-2/5 h-full">
                <img
                    src={plantBg} 
                    alt="Plant"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
