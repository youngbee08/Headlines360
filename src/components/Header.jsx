import { Search } from "lucide-react"
import logo from "/logo-removebg-preview.png"

const Header = () => {
  return (
    <header className="flex sticky top-0 z-15 justify-between py-2 px-4 items-center bg-[#FFDFB9] w-full">
      <div className="w-[20%] flex items-center">
        <img src={logo} alt="headlines360_Logo" className="lg:w-[35%] sm:w-[50%] w-[80%] object-cover" />
      </div>
      <div className="hidden sm:flex bg-[#A4193D] w-1/3 lg:flex px-2 py-3 rounded-full items-center text-[#FFDFB9] gap-1">
        <span><Search/></span>
        <input type="text" className="w-full px-2 py-1 rounded-full text-base outline-0 border-0" placeholder="Search"/>
      </div>
      <div className="block text-[#A4193D] sm:hidden lg:hidden"><Search/></div>
    </header>
  )
}

export default Header