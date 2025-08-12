import  React from "react"


const Navtabs= ({content,focused,action}) => {
  return (
    <nav className={`${focused === false ? 'bg-[#d1456a] text-[#ffdce5]' : 'bg-[#ffdce5] text-[#A4193D]'} rounded-full px-4 py-2 cursor-pointer font-medium lg:text-base text-sm text-center`} onClick={action}>
      {content}
    </nav>
  )
}

export default Navtabs