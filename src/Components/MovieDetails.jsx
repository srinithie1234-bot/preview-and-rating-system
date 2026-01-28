import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { moviesData } from "./MoviesData";

export const MovieDetails = () => {
  const { id } = useParams();

  const movie = moviesData.find((m) => m.id === Number(id));

  const [viewers, setViewers] = useState(movie.viewers);
  const [subscribers, setSubscribers] = useState(movie.subscribers);

  // 👀 viewers auto increment
  useEffect(() => {
    setViewers((prev) => prev + 1);
  }, []);

  if (!movie) return <h2>Movie Not Found</h2>;

  return (
    <div className="details">
      <img src={movie.image} alt={movie.title} />
      <h1>{movie.title}</h1>

      <p><strong>Description:</strong> {movie.description}</p>

      <p>⭐ Rating: {movie.rating}</p>
      <p>👀 Viewers: {viewers.toLocaleString()}</p>

      {/* 🔔 Subscribe button */}
      <button
        className="subscribe-btn"
        onClick={() => setSubscribers(subscribers + 1)}
      >
        🔔 Subscribe ({subscribers.toLocaleString()})
      </button>

      {/* 📝 Reviews list */}
      <h3>User Reviews</h3>

      {movie.reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        <ul className="review-list">
          {movie.reviews.map((r, index) => (
            <li key={index}>⭐ {r}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
