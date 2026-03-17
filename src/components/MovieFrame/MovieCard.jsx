// src/components/MovieFrame/MovieCard.jsx
function MovieCard({ movieId, img, onClick }) {
  if (onClick) {
    return (
      <button className="movie-card" onClick={() => onClick(movieId)}>
        <div className="movie-inner">
          <img src={img} alt={movieId} />
        </div>
      </button>
    )
  }
  return (
    <div className="movie-card" style={{ cursor: 'default' }}>
      <div className="movie-inner">
        <img src={img} alt={movieId} />
      </div>
    </div>
  )
}

export default MovieCard