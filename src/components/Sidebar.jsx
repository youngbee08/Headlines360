import { Compass, Home, School } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="side bg-[#A4193D] lg:border-r-2 overflow-y-scroll z-10 sm:border-r-2 lg:h-[100vh] sm:h-[100vh] lg:border-r-amber-100 pt-5 flex lg:w-[8%] sm:w-[8%] sm:flex-col lg:justify-start sm:justify-start justify-evenly w-full lg:flex-col gap-8 lg:sticky sm:sticky fixed bottom-0 lg:left-0 p-2 sm:left-0 text-center">
      <Link to={"/"} className="flex flex-col items-center text-wrap break-after-all">
        <span className="text-[#FFDFB9]"><Home/></span>
        <p className="text-sm font-medium text-[#FFDFB9]">Home</p>
      </Link>
      <Link to={"/news?cat=campus"} className="flex flex-col items-center ">
        <span className="text-[#FFDFB9]"><School/></span>
        <p className="text-sm font-medium text-[#FFDFB9]">Campus News</p>
      </Link>
      <Link to={"/news?cat=technology"} className="flex flex-col items-center">
        <span className="text-[#FFDFB9]"><Compass/></span>
        <p className="text-sm font-medium text-[#FFDFB9]">Technology</p>
      </Link>
    </aside>
  )
}

export default Sidebar