import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShowList.css"; // Import CSS file for styling

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching show data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>TV Shows</h1>
      <table>
        <thead>
          <tr>
            <th>Preview</th>
            <th>Name</th>
            <th>Language</th>
            <th>Genres</th>
            <th>Premiered</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((show) => (
            <tr key={show.show.id}>
              <td className="preview">
                <img src={show.show.image.medium} alt={show.show.name} />
              </td>
              <td>{show.show.name}</td>
              <td>{show.show.language}</td>
              <td>{show.show.genres.join(", ")}</td>
              <td>{show.show.premiered}</td>

              <td>
                <button onClick={() => onSelectShow(show)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowList;
