import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieForm from './components/MovieForm/MovieForm'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const response = await fetch("http://localhost:3001/movies")
      const data = await response.json()

      console.log(data)

      setMovies(data)
    }
    getMovies()
  }, []);

  return (
    <><div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>Titulo: {movie.title} <br /> Ano: {movie.year} <br /> Diretor: {movie.director} <br /> Gênero: {movie.genre} <br /> Nota: {movie.rating} <br /> Sinopse: {movie.synopsis} <br /> Capa: <img src={movie.cover} alt={movie.title} /></li>
        ))}
      </ul>
    </div><MovieForm handleSubmit={(newMovie) => setMovies((prevMovies) => [...prevMovies, newMovie])} /></>
  )
}
export default App
