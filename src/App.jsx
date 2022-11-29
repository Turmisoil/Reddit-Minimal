import { useEffect, useState } from 'react'


function App() {

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="App">
    </div>
  )
}

export default App
