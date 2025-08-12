import News from "../components/News"
import Sidebar from "../components/Sidebar"

const EachCategoryNews = () => {
  return (
    <div className="flex gap-4">
      <Sidebar/>
      <News/>
    </div>
  )
}

export default EachCategoryNews