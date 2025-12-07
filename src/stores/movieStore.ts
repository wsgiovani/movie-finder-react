// movieStore.ts
import { create } from "zustand";

interface MovieState {
  query: string;
  movies: any[];
  isLoading: boolean;
  error: string | null;
}

interface MovieActions {
  setQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const useMovieStore = create<MovieState & MovieActions>((set, get) => ({
  query: "",
  movies: [],
  isLoading: false,
  error: null,

  setQuery: (newQuery) => {
    set({ query: newQuery });
  },

  handleSearch: async (e) => {
    e.preventDefault();
    const { query } = get();
    if (!query) return;

    set({ isLoading: true, error: null, movies: [] });

    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Search failed");

      const data = await res.json();
      set({ movies: data.results });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "An unknown error occurred" });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useMovieStore;
