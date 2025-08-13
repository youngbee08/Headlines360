import React, { createContext } from 'react'

const NewsContext = createContext();
const NewsProvider = ({children}) => {
  let newsBaseUrl = import.meta.env.VITE_NEWS_BASE_URL;
  let newsApiKey = import.meta.env.VITE_NEWS_API_KEY;

  const getLatestNews = async (newsCategory)=>{
    try {
      const res = await fetch(`${newsBaseUrl}/api/v4/top-headlines?category=${newsCategory}&lang=en&country=ng&apikey=${newsApiKey}`);
      const newsData = await res.json();
      console.log(newsData.articles)
      return newsData.articles
    } catch (error) {
      console.log(error)
    }
  };
  const value = {
    getLatestNews,
  }
  return (
    <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
  )
}

export default NewsProvider
export {NewsContext}