import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/fb6826f4-4de9-42c0-ac30-c994f8fbbcdc/TR-tr-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] '>
        <div className='absolute top-[20%] p-4 md:p-8 '>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account
