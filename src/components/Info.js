import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Info = () => {
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const fun = () => {
    fetch(`http://localhost:5002/single_details/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setMovie(result);
        console.log(movie);
      });
  };

  useEffect(() => {
    fun();
  }, []);

  return (
    <div style={{margin: '50px'}}>

      title: {movie.title}
      <br />
      actor: {movie.actors}
      <br />
      director: {movie.director}
      <br />
      audio_language: {movie.audio_language}
      <br />
      movie.producer: {movie.producer}
      <br />
      movie_code: {movie.movie_code}
      <br />
      release_date: {movie.release_date}
      <br />
    </div>
  );
};

export default Info;
