// src/components/HomePage.tsx
import useMovieStore from "../stores/movieStore";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

function HomePage() {
  const { movies, isLoading, error } = useMovieStore();

  return (
    <div>
      <SearchForm />

      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
