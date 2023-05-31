import React from 'react'
import login from '../images/login.svg'
function Login() {
  return (
    <>
    <div className="container mx-auto flex justify-center items-center h-screen bg-white">
        <div className="w-full lg:w-1/2 p-10 bg-white rounded-lg shadow-md">
        
        <div className="relative w-330 h-285 right-30 bottom-443">
            <img src={login} alt="login" className="w-full h-full" />
        </div>
        <div className="flex justify-center items-center" >
            
            <span className="text-xl font-normal">Welcome!</span>
        </div>


            <form className="mt-5">
                <div>
                    <label className="block text-sm text-gray-700">Email</label>
                    <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-white mt-2 border-2 shadow-md rounded-15 border-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-700">Password</label>
                    <input type="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-white mt-2 border-2 shadow-md rounded-15 border-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Login</button>
            </form>

        </div>
    
    </div>
    </>

    
  )
}

export default Login

