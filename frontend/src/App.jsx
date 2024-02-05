import React, {useState, useEffect } from 'react'

const App = () => {
  const [ movies, setMovies ] = useState([])
  const [ movieIndex, setMovieIndex ] = useState(0)

  useEffect(() => {
    fetch('api/movies/')
    .then(res => res.json())
    .then(apiMovies => {
      setMovies(apiMovies)
      console.log(apiMovies);
      })
  }, [])

  const replaceStatic = (oldUlr) => {
    return oldUlr.replaceAll('static', 'assets')
  }
  
  return (

    <div>

      {movies.length > 0 ?
      <div className="card" style={{ backgroundImage: `url(${replaceStatic(movies[movieIndex].poster_image)})` }}>
        <h2>{ movies[movieIndex].title}</h2>
      </div>: 
      <div>Loading...</div> }

      <div className='buttons'>
        <button>💩</button>
        <button onClick={()=>{setMovieIndex(movieIndex => movieIndex + 1)}}>😎</button>
      </div>
    </div>
  )
}

export default App