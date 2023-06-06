import React from "react";
import "./styles.css"; // Import CSS file for styling

const ShowDetails = ({ show }) => {
  const handleButtonClick = () => {
    window.open(show.url, "_blank");
  };

  return (
    <div className="show-details">
      <h1>{show.name}</h1>
      <img src={show.image.original} alt={show.name} />
      <div
        className="show-summary"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
      <ul>
        <li>
          <strong>Type:</strong> {show.type}
        </li>
        <li>
          <strong>Language:</strong> {show.language}
        </li>
        <li>
          <strong>Genres:</strong> {show.genres.join(", ")}
        </li>
        <li>
          <strong>Status:</strong> {show.status}
        </li>
        <li>
          <strong>Runtime:</strong> {show.runtime} minutes
        </li>
        <li>
          <strong>Premiered:</strong> {show.premiered}
        </li>
        <li>
          <strong>Average Rating:</strong> {show.rating.average}
        </li>
        <li>
          <strong>Network:</strong> {show.network.name}
        </li>
        <li>
          <strong>Official Site:</strong>{" "}
          <button className="site-button" onClick={handleButtonClick}>
            Visit Official Site
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ShowDetails;
