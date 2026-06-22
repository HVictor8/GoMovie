import { useState } from "react";

const MovieForm = ({handleSubmit}) => {
  const [title, setTitle] = useState ("");
  const [category, setCategory] = useState ("");
  const [year, setYear] = useState ("");
  const [note, setNote] = useState ("");
  const [image, setImage] = useState ("");
  const [synopsis, setSynopsis] = useState ("");

  const submitForm = (e) =>{
    e.preventDefault();

    const movie = { 
        title,
        category,
        year,
        note,
        image,
        synopsis
    };
    handleSubmit(movie)

    setTitle("");
    setCategory("");
    setYear("");
    setNote("");
    setImage("");
    setSynopsis("");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h2>Cadastro de Filmes</h2>

          <label>
            <span>Título do filme</span>
            <input type="text" value={title || ""} onChange={(e) => setTitle(e.target.value)}/>
          </label>

          <label>
            <span>Categoria</span>
            <input type="text" value={category || ""} onChange={(e) => setCategory(e.target.value)}/>
          </label>

          <label>
            <span>Ano de lançamento</span>
            <input type="number" value={year || ""} onChange={(e) => setYear(e.target.value)}/>
          </label>
          
          <label>
            <span>Nota</span>
            <input type="number" value={note || ""} onChange={(e) => setNote(e.target.value)}/>
          </label>

          <label>
            <span>Poster</span>
            <input type="text" value={image || ""} onChange={(e) => setImage(e.target.value)}/>
          </label>

          <label>
            <span>Sinopse</span>
            <textarea type="text" value={synopsis || ""} onChange={(e) => setSynopsis(e.target.value)}/>
          </label>
          <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default MovieForm
