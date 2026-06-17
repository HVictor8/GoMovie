import { useState, useEffect } from 'react'
import MovieForm from './componentes/MovieForm/MovieForm'
import MovieList from './componentes/MovieList/MovieList'
import './App.css'

const url ="http://localhost:3001/movie";


function App() {
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    async function getMovies(){
      const response = await fetch(url);
      const data = await response.json(); 

      console.log(data);
      setMovies(data);
    }
    getMovies();
  },[]);


  const createMovies = async (movie) =>{
    const response = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(movie),
    });

    const addedMovie = await response.json();
    setMovies((prevMovies) => [...prevMovies, addedMovie]);
  };


  return (
    <div className='App'>
      <h1>Catálogo de Filmes</h1>
      <MovieForm handleSubmit={createMovies}/>
      <MovieList movies={movies}/>
    </div>

  )
}

export default App
