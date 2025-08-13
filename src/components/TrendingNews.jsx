import { useContext, useEffect, useState } from "react";
import TrendingNewsCard from "./TrendingNewsCard"
import { NewsContext } from "../contexts/NewsContext";
import Spinner from "./Spinner";
import Footer from "./Footer";
import NetworkError from "./NetworkError";

const TrendingNews = () => {
  const {getLatestNews,} = useContext(NewsContext);
  const [loading,setLoading] = useState(false)
  const [trendingNews,setTrendingNews] = useState([])
  const trendingCategories = ["business","world","campus","nation","technology","nigeriauniversity", "science"];
  const eachCat = trendingCategories[Math.round(Math.random() * 6)];

  async function loadNews() {
    setLoading(true)
    try {
      const allNews = await getLatestNews(eachCat);
      setTrendingNews(allNews);
    } catch (error) {
      console.error(error)
    } finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    loadNews()
    },[]);
  return (
    <div className="trend w-full lg:w-[45%] flex flex-col gap-4 lg:h-full lg:overflow-y-scroll left-0 lg:border-l-1 lg:border-l-[#FFDFB9] lg:px-4">
      <div className="w-full py-5">
        <h2 className="text-xl text-white">Trending News</h2>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {
          loading ? (<Spinner/>):(
            !trendingNews ? (<div className="lg:flex sm:flex hidden"><NetworkError width={"100%"} action={loadNews}/></div>):(
              trendingNews.slice(0,8).map((element,key)=>(
                <TrendingNewsCard key={key} image={element.image} title={element.title} url={element.url}/>
              ))
            )
          )
        }
      </div>
      <div className="lg:block sm:block hidden"><Footer/></div>
    </div>
  )
}

export default TrendingNews