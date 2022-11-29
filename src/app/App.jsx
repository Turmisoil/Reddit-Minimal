import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadHotPosts, selectPosts } from './appSlice';


function App() {

  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHotPosts())
  }, [])

  return (
    <div className="App">
    </div>
  )
}

export default App
