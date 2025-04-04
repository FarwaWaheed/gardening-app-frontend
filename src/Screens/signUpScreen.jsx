import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import plantBg from '../assets/chris-lee-70l1tDAI6rM-unsplash1.png'; // Adjust the path

export default function Signup() {
    const [role, setRole] = useState("");

    return (
        <div className="flex min-h-screen">
            {/* Left Form Section */}
            <div className="flex-1 flex flex-col justify-center items-center px-10">
                <h2 className="text-3xl font-bold mb-6">Get Started Now</h2>

                <form className="w- max-w-md">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-sm font-semibold mb-1">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select a role</option>
                            <option value="gardener">Gardener</option>
                            <option value="home-owner">Home Owner</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="mb-4 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm">
                            I agree to the <span className="text-blue-600 cursor-pointer">terms & policy</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition"
                    >
                        Signup
                    </button>
                </form>

                <div className="my-6 text-center text-gray-500">Or</div>

                {/* Social Signup Buttons */}
                <div className="flex space-x-4">
                    <button className="flex items-center px-4 py-2 border rounded-md">
                        <FaGoogle className="mr-2" />
                        Sign in with Google
                    </button>
                    <button className="flex items-center px-4 py-2 border rounded-md">
                        <FaApple className="mr-2" />
                        Sign in with Apple
                    </button>
                </div>

                <p className="mt-6 text-sm text-gray-600">
                    Have an account? <a className="text-blue-600 cursor-pointer">Sign In</a>
                </p>
            </div>

            {/* Right Image Section */}
            <div className="hidden md:block w-1/2 h-screen">
                    <img
                        src={plantBg}
                        alt="Plant background"
                        className="w-full h-full object-cover"
                    />
            </div>
        </div>
    );
}
