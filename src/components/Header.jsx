import React from 'react'
import { Link } from 'react-router-dom'

function Header({heading, paragraph, linkName, linkUrl}) {
  return (
    <div className="mb-10">
        <div className="flex justify-center">
            <img 
                alt=""
                className="h-15 w-16"
                src="logo.webp"/>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {heading}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph} 
        <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
            {linkName}
        </Link>
        </p>
    </div>
  )
}

export default Header
