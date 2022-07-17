import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";

const App = () => {
  const [movies, setMovies] = useState([]);
  const fun = () => {
    fetch("http://localhost:5002/show_Details")
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.data);
      });
  };

  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home data={movies} />} />
          <Route  path="/:id" element={<Info/>} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
