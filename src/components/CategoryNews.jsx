import { useContext, useState } from "react";
import Navtabs from "./Navtabs"
import NewsCard from "./NewsCard";
import { NewsContext } from "../contexts/NewsContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import Footer from "./Footer";
import NetworkError from "./NetworkError";

const CategoryNews = () => {
  const [newsCategory,setNewsCategory] = useState("nigeria");
  const [focused,setFocused] = useState(0)
  const [news,setNews] = useState([]);
  const [loading,setLoading] = useState(false);
  const {getLatestNews,} = useContext(NewsContext);
  const categories = [
    {
      csName:"All",
      nmName:"general",
      focused:true
    },
    {
      csName:"Sports",
      nmName:"sports",
      focused:false
    },
    {
      csName:"Science",
      nmName:"science",
      focused:false
    },
    {
      csName:"Entertainment",
      nmName:"entertainment",
      focused:false
    },
  ];
  const switchCategory = (element,key)=>{
    setNewsCategory(element.nmName)
    setFocused(key)
  };
  async function loadNews() {
    setLoading(true)
    try {
      const allNews = await getLatestNews(newsCategory);
      setNews(allNews);
    } catch (error) {
      console.error(error)
    } finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    loadNews()
  },[newsCategory]);
  
  return (
    <div className="cat flex flex-col my-5 gap-8 overflow-visible lg:overflow-y-scroll h-full lg
    :w-[80%] w-full">
      <div className="gap-8 flex-col flex">
        <h2 className="text-xl text-white">Explore more categories</h2>
        <div className="flex gap-3 items-center overflow-x-scroll">
          {
            categories.map((element,key)=>(
              <Navtabs focused={key === focused ? true : false} content={`${element.csName}`} action={()=> switchCategory(element,key)} key={key}/>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col gap-5">
       {
        loading ? (<Spinner/>) :(
          !news ? (<NetworkError width={"70%"} action={loadNews}/>) : (
            news.map((element,index)=>(
              <NewsCard key={index} title={element.title} image={element.image} description={element.description} viewMore={element.url}/>
            ))
          )
        )
       }
      </div>
      <div className="lg:hidden sm:hidden flex"><Footer/></div>
    </div>
  )
}

export default CategoryNews