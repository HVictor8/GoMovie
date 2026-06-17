import React from 'react'
import { useState } from 'react'

const MovieForm = ({ handleSubmit }) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [cover, setCover] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        const newMovie = {
            title,
            director,
            year,
            genre,
            rating,
            synopsis,
            cover
        };

        handleSubmit(newMovie);
    }

  return (
    <div>
      <form onSubmit={submitForm}>
        <h2>Cadastro de Filme</h2>
        <label>
            <span>Titulo:</span>
            <input type="text" id="title" placeholder="Digite o titulo do filme" value={title || ""} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
            <span>Diretor:</span>
            <input type="text" id="director" placeholder="Digite o nome do diretor" value={director || ""} onChange={(e) => setDirector(e.target.value)}/>
        </label>
        <label>
            <span>Ano:</span>
            <input type="text" id="year" placeholder="Digite o ano de lançamento" value={year || ""} onChange={(e) => setYear(e.target.value)} />
        </label>
        <label>
            <span>Gênero:</span>
            <input type="text" id="genre" placeholder="Digite o gênero do filme" value={genre || ""} onChange={(e) => setGenre(e.target.value)} />
        </label>
        <label>
            <span>Nota Imdb:</span>
            <input type="number" id="rating" placeholder="Digite a nota do filme" pattern="[0-10]" value={rating || ""} onChange={(e) => setRating(e.target.value)} />
        </label>
        <label>
            <span>Sinopse:</span>
            <textarea id="synopsis" placeholder="Digite a sinopse do filme" value={synopsis || ""} onChange={(e) => setSynopsis(e.target.value)}></textarea>
        </label>
        <label>
            <span>URL da Capa:</span>
            <input type="text" id="cover" placeholder="Digite a URL da capa do filme" value={cover || ""} onChange={(e) => setCover(e.target.value)} />
        </label>
            <button type="submit">Cadastrar Filme</button>
      </form>
    </div>
  )
}

export default MovieForm
