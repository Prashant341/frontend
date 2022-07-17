import React from "react";

const Card = (props) => {
  const data = props.info
  return (
    <>
      <div
        className="col-md-3"
        style={{ display: "inline-block", width: "23%", margin: "1.6%" }}
      >
        <div className="card">
          <img
            src="https://images.pexels.com/photos/54323/rose-composites-flowers-spring-54323.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">
              <b>Movie Code:</b> {data.movie_code}
              <br />
              <b>Created On:</b> {Date(data.release_date)}
            </p>
            <a href={data._id} className="btn btn-primary">
              More Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
