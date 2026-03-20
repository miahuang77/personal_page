// src/components/MovieFrame/MovieFrame.jsx
import MovieCard from './MovieCard'

import movie1 from '/assets/images/movie1.png'
import movie2 from '/assets/images/movie2.png'
import movie3 from '/assets/images/movie3.png'
import movie4 from '/assets/images/movie4.png'
import movie5 from '/assets/images/movie5.png'
import movie6 from '/assets/images/movie6.png'

const movies = [
  { id: 'movie1', img: movie1 },
  { id: 'movie2', img: movie2 },
  { id: 'movie3', img: movie3 },
  { id: 'movie4', img: movie4 },
  { id: 'movie5', img: movie5 },
  { id: 'movie6', img: movie6 },
]

function MovieFrame({ onMovieClick }) {
  return (
    <div className="movie-frame">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          img={movie.img}
          onClick={['movie2', 'movie5'].includes(movie.id) ? onMovieClick : null}
        />
      ))}
    </div>
  )
}

export default MovieFrame