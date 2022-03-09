import { Link } from 'react-router-dom';
import './styles.css';

function Form() {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="damovies-form-container">
      <img className="damovies-movie-card-image" src={movie.image} alt={movie.title} />
      <div className="damovies-card-bottom-container">
        <h3>"The Witcher"</h3>
        <form className="damovies-form">
          <div className="form-group dasmovies-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group damovies-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="damovies-form-btn-container">
            <button type="submit" className="btn btn-primary damovies-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
            <button className="btn btn-primary damovies-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
