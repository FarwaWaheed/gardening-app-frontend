import { useState } from "react";
import plantBg from '../assets/sign.png'; 
import {useNavigate} from 'react-router-dom';
import { logInUser } from "../api/userApis";
import {Alert, AlertTitle} from '@mui/material';



export default function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const resData = await logInUser({ email, password });
          console.log("Login success:", resData);
    
          if (resData.user) {
            localStorage.setItem('userRole', resData.user.role);
            localStorage.setItem('userName', resData.user.name);
            localStorage.setItem('userId', resData.user.id);
            navigate('/home');
          } else {
            alert('Login failed. No user returned.');
          }
        } catch (err) {
          console.error("Login failed:", err.message);
          alert("Invalid email or password.");
        }
      };
      

    return (
        <div className="flex w-full h-screen">
            {/* Left Form Section */}
            <div className="w-3/5 flex flex-col justify-center items-center px-16">
                <div className="w-full max-w-sm">
                    
                    <h2 className="text-3xl font-semibold text-black mb-8">Welcome Back!</h2>
                    <Alert severity="success" style={{ marginBottom : '40px' }}>
                    <AlertTitle>Success</AlertTitle>
                    You have successfully created Plantopia account.
                    Enter Your Credentials to Get Started!
                    </Alert>

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
                        
                        
                            <button
                                type="submit"
                                className="w-full bg-[#3A5B22] hover:bg-green-800 text-white py-2 rounded-md font-semibold transition duration-300">
                                Log In
                            </button>
                       
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
                        Don’t have an account? <a href="/" className="text-blue-600 font-medium">Sign Up</a>
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
