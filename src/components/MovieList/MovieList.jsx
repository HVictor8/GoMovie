const MovieList = ({movies}) => {
  return (
    <div>
        <h2>Lista de Filmes</h2>

        <div className="movie-container">
          {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>

                  <img src={movie.image} alt={movie.title} width="200"/>
                  <h3>{movie.title}</h3>
                  <p>Categoria: {movie.category}</p>
                  <p>Ano: {movie.year}</p>
                  <p>Nota: {movie.note}</p> 
                  <p>Sinopse: {movie.synopsis}</p>
                  </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList
