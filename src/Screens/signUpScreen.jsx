import { useState } from "react";
import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import axios from 'axios';
import plantBg from '../assets/chris-lee-70l1tDAI6rM-unsplash1.png'; // Adjust the path

const url = "http://localhost:5000";
export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async(e) => {
        const data ={
            name, email, password, role
        }
        console.log(data)
        e.preventDefault(); // prevent page reload on form submit
        try {
            const response = await axios.post(`${url}/user/signUp`,{
                name,
                email,
                password,
                role
            });
            if(response.status === 201){
                console.log("Signup successful:" ,response.data.message);
            }
            else{
                console.error("Signup failed:", response.data.message)
            }

        }
        catch(error){
            console.error("Signup failed:", error.response?.data || error.message)
        }
    }
    return (
        <div className="flex w-screen h-screen bg-white">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl ">
                {/*<div className="flex flex-col items-center m-md:items-start">*/}
                <div className="w-full max-w-md space-y-2">
                    <span className="text-3xl text-black font-serif font-bold mb-8">Get Started Now</span>
                    <form className="w- max-w-md text-left" onSubmit={handleSubmit}>
                        <div className="mt-8 mb-4">
                            <label className="block text-medium text-black font-small mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full text-black px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

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
                        </div>

                        <div className="mt-6 mb-4 relative">
                            <label className="block text-medium text-black mb-1">Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full text-black px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">Select a role</option>
                                <option value="gardener">Gardener</option>
                                <option value="home-owner">Home Owner</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div className="mt-8 mb-4 flex items-center">
                            <input type="checkbox" className="mr-2 bg-white"/>
                            <label className="text-sm text-black">
                                I agree to the <span className="cursor-pointer">terms & policy</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#3A5B22] text-black py-2 rounded-md font-semibold hover:bg-green-800 transition">
                            Signup
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
