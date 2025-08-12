import React from 'react'
import { Link } from 'react-router-dom'


const NewsCard = ({title,image,description,viewMore}) => {
  return (
    <Link to={viewMore} className='flex group gap-4 w-full lg:items-center lg:flex-row flex-col'>
      <div className="lg:w-[40%] w-[95%] sm:w-[70%] rounded-xl">
        <img src={image} alt={`${title}image`} className='rounded-xl object-fill h-[200px] w-full'/>
      </div>
      <div className="flex flex-col gap-4 lg:w-[50%] w-full">
        <h2 className='group-hover:underline lg:text-2xl text-xl sm:text-xl font-bold text-[#FFDFB9]'>{title}</h2>
        <p className='text-base font-medium text-[#FFDCE5]'>{description}</p>
      </div>
    </Link>
  )
}

export default NewsCard