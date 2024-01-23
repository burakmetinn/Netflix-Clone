import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { RiMovie2Line } from "react-icons/ri";



const Navbar = () => {
  const navigate = useNavigate();
  const {user, logOut} = UserAuth();

  const handleLogout = async() =>{
    try {
      await logOut()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
      <div className='flex items-center'>
      <RiMovie2Line className='text-yellow-600 text-4xl mr-2' />
      <h1 className='text-yellow-600 text-4xl font-bold cursor-pointer'>MFDLIX</h1>
      </div>
      </Link>
    {user?.email ? 
    <div>
      <Link to="/account">
      <button className='text-white pr-4' >Account</button>
      </Link>
    
      <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Log out</button>
    </div> 
    : 
    <div>
      <Link to="/login">
      <button className='text-white pr-4' >Sign In</button>
      </Link>
    
      <Link to="signUp">
      <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </Link>
    </div>}
    </div>
  )
}

export default Navbar
