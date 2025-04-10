import { useState } from "react";
import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import axios from 'axios';
import plantBg from '../assets/chris-lee-70l1tDAI6rM-unsplash1.png'; // Adjust the path

const url = "http://localhost:3000";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/user/login`, {
                email,
                password
            });
            if(response.status === 200){
                console.log("Login successful:", response.data.message);
            } else {
                console.error("Login failed:", response.data.message);
            }
        } catch(error){
            console.error("Login failed:", error.response?.data || error.message);
        }
    }

    return (
        <div className="flex w-screen h-screen bg-white">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl ">
                {/*<div className="flex flex-col items-center m-md:items-start">*/}
                <div className="w-full max-w-md space-y-2">
                    <span className="text-3xl text-black font-serif font-bold mb-8 ">Welcome Back!</span> 
                    <div className="mt-6 mb-8 text-left">
                        <span className="text-medium text-black font-serif font-bold mb-8 ">Enter your Credentials to access your account</span>
                    </div>
                    <form className="w- max-w-md text-left" onSubmit={handleSubmit}>
                        

                        <div className="mt-6 mb-4">
                            <label className="block text-medium text-black mb-1">Email address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full text-black px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mt-6 mb-4">
                            
                            <label className="block text-medium text-black mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full text-black px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <a href="#" className="text-sm text-green-700 hover:underline">Forgot password?</a>
                        </div>

                        

                        <div className="mt-8 mb-4 flex items-center">
                            <input 
                                type="checkbox" 
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="mr-2"
                            />
                            <label className="text-sm text-black">
                                <span className="cursor-pointer">Remember for 30 days</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full  text-black py-2 rounded-md font-semibold bg-green-500 hover:bg-green-700 transition">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
                {/* Image Section - 50% */}
                <div className="w-1/2 h-full">
                    <img className="w-2/3 h-full object-contain shadow-xl rounded-md" alt="Plant" src={plantBg}/>
                </div>
        </div>
    );
}
