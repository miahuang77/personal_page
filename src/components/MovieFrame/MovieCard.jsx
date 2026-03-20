// src/components/MovieFrame/MovieCard.jsx
function MovieCard({ movieId, img, onClick }) {
  const labelText = movieId === 'movie2' ? 'Project Gallary' : movieId === 'movie5' ? 'Design Gallary' : null
  const label = labelText ? (
    <span style={{
      position: 'absolute',
      bottom: 6,
      left: 6,
      fontFamily: "'VT323', monospace",
      fontSize: 13,
      color: 'white',
      textShadow: '1px 1px 2px #000',
      pointerEvents: 'none',
    }}>{labelText}</span>
  ) : null

  if (onClick) {
    return (
      <button className="movie-card" onClick={() => onClick(movieId)}>
        <div className="movie-inner" style={{ position: 'relative' }}>
          <img src={img} alt={movieId} />
          {label}
        </div>
      </button>
    )
  }
  return (
    <div className="movie-card" style={{ cursor: 'default' }}>
      <div className="movie-inner" style={{ position: 'relative' }}>
        <img src={img} alt={movieId} />
        {label}
      </div>
    </div>
  )
}

export default MovieCard