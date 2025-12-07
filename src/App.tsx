// src/App.tsx
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Movie Finder</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
