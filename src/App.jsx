import Header from './components/Header';
import NewsProvider from './contexts/NewsContext';
import './index.css'
import EachCategoryNews from './pages/EachCategoryNews';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NewsProvider>
          <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<EachCategoryNews/>}/>
          </Routes>
        </BrowserRouter>
      </NewsProvider>
    </>
  );
}


export default App
