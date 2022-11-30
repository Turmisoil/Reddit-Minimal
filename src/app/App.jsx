import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from '../features/header/Header'
import { Home } from '../features/home/Home'
import { PageNotFound } from '../features/pageNotFound/pageNotFound'
import { SearchResults } from '../features/searchResults/searchResults'
import { Subreddit } from '../features/subreddit/subreddit'
import { SubredditAside } from '../features/subredditAside/SubredditAside'

function App() {

  return (
    <Router>
      <div className="">

        <Header />

        <main className='max-w-[1000px] mx-auto my-0 min-h-screen grid grid-cols-3 gap-8 px-[50px]'>
        
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/r/:id' exact element={<Subreddit/>}/>
            <Route path='/search/:id' exact element={<SearchResults/>}/>
            <Route exact elementt={<PageNotFound/>}/>
          </Routes>

         <SubredditAside />

        </main>

      </div>
    </Router>
  )
}

export default App
