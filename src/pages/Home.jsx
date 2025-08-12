import News from "../components/News"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="flex gap-4 lg:max-h-[100vh]">
      <Sidebar/>
      <News/>
    </div>
  )
}

export default Home