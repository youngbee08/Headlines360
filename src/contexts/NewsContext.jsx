import React, { createContext } from 'react'

const NewsContext = createContext();
const NewsProvider = ({children}) => {
  let newsBaseUrl = import.meta.env.VITE_NEWS_BASE_URL;
  let newsApiKey = import.meta.env.VITE_NEWS_API_KEY;

  const getLatestNews = async (newsCategory)=>{
    try {
      const res = await fetch(`${newsBaseUrl}/v2/everything?q=${newsCategory}&apikey=${newsApiKey}`);
      const newsData = await res.json();
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