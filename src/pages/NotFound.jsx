import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
        <div className="text-center hero">
            <div className="max-w-lg">
                {/* <h1 className="text-8xl font-bold mb-8">
                    Oops!
                </h1> */}
                <p className="text-5xl mb-8">Welcome to Github Finder please click the button to find your profile!</p>
                <Link to='/' className='btn btn-primary btn-lg'>
                    <FaHome className='mr-2'/>
                    Click Me!
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound