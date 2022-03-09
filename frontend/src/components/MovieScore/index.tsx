import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {

    const score = 3.5;
    const count = 13;
  
    return (
    <div className="damovies-score-container">
      <p className="damovies-score-value">{score > 0 ? score.toFixed(1) : "-"}</p>
      <MovieStars />
      <p className="damovies-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;