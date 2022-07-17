import React from 'react'
import Card from "./Card";


const Home = (props) => {
    const movies = props.data
  return (
    <>
      <h2 className="text-center text-dark my-3">Movies World</h2>
      {movies.map((movie) => {
        return <Card info={movie} key={movie._id}></Card>;
      })}
    </>
  );
}

export default Home