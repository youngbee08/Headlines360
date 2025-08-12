import { ExternalLinkIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const TrendingNewsCard = ({image,title,url}) => {
  return (
    <div to={url} className='bg-[#ffdce5] rounded-[6px] p-4 flex justify-between gap-6 w-full'>
      <div className="flex flex-col gap-2">
        <h2 className='text-xl font-bold'>{title}</h2>
        <Link to={url} className='text-xs font-bold underline flex gap-1 items-center'>Learn more <ExternalLinkIcon size={15}/></Link>
      </div>
      <img src={image} alt={`${title} image`} className='w-1/3 rounded-[6px] object-cover' />
    </div>
  )
}

export default TrendingNewsCard