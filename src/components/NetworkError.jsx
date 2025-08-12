import React from 'react'

const NetworkError = ({action,width}) => {
  return (
    <div className='flex flex-col gap-5 font-semibold items-start text-white'>
      <h2 className={`text-xl w-[${width}]`}>Oops, seems you are'nt connected, please check your internet connection and try again!</h2>
      <button onClick={action} className='bg-[#ffdce5] text-[#A4193D] rounded-full px-4 py-2 cursor-pointer font-medium lg:text-base text-sm text-center'>Retry</button>
    </div>
  )
}

export default NetworkError