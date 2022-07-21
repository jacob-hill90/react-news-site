import { useState } from 'react'

// import './App.css'

import NavBar from './components/NavBar'
import ArticleList from './components/ArticleList'

import NewsData from '../data/news.json'
import NavItemsData from '../data/navItems.json'



function App() {

  const[navItems, setNavItems] = useState(NavItemsData)
  const[articles, setArticles] = useState(NewsData.map(( article, index) => {
    return {
      id: index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0] : null,
      created_date: article.created_date
    }})
    )
  
  return (
    <div className="App">
      <NavBar items={navItems} />
      <ArticleList articles={articles}/>
    </div>
  )
}

export default App