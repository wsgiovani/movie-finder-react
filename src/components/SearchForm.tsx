// src/components/SearchForm.tsx
import useMovieStore from "../stores/movieStore";

function SearchForm() {
  const { query, setQuery, handleSearch } = useMovieStore();

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
