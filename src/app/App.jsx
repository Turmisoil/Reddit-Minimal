import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from '../features/home/Home'
import { PageNotFound } from '../features/pageNotFound/pageNotFound'
import { SearchResults } from '../features/searchResults/searchResults'
import { Subreddit } from '../features/subreddit/subreddit'
import { SubredditAside } from '../features/subredditsAside/subredditAside'

function App() {

  return (
    <Router>
      <div className="App">

        <div>HEADER</div>

        <main>
        
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/r/:id' exact element={<Subreddit/>}/>
            <Route path='/search/:id' exact element={<SearchResults/>}/>
            <Route exact elementt={<PageNotFound/>}/>
          </Routes>

        </main>

        <aside>

          <SubredditAside />
          
        </aside>

      </div>
    </Router>
  )
}

export default App
