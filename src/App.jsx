// src/App.jsx
import { useState } from 'react'
import Desktop from './components/Desktop/Desktop'
import Window from './components/Window'
import WorkExperience from './components/windows/WorkExperience'
import ProjectExperience from './components/windows/ProjectExperience'
import Awards from './components/windows/awards'
import MoviePopup from './components/windows/MoviePopup'
import Anime from './components/windows/anime'
import Artists from './components/windows/artists'
import PersonalProfile from './components/windows/personalProfile'
import './styles/win98.css'
import './App.css'

function App() {
  const [openWindows, setOpenWindows] = useState({
    work: false,
    projects: false,
    awards: false,
    movie: false,
    anime: false,
    artists: false,
    profile: false,
  })

  const [selectedMovie, setSelectedMovie] = useState(null)

  const openWindow = (name) => setOpenWindows(prev => ({ ...prev, [name]: true }))
  const closeWindow = (name) => setOpenWindows(prev => ({ ...prev, [name]: false }))

  const handleMovieClick = (movieId) => {
    setSelectedMovie(movieId)
    openWindow('movie')
  }

  return (
    <div className="desktop">
      <Desktop
        onOpenWork={() => openWindow('work')}
        onOpenProjects={() => openWindow('projects')}
        onOpenAwards={() => openWindow('awards')}
        onOpenAnime={() => openWindow('anime')}
        onOpenArtists={() => openWindow('artists')}
        onOpenProfile={() => openWindow('profile')}
        onMovieClick={handleMovieClick}
      />

      {openWindows.work && (
        <Window title="Work Experience" onClose={() => closeWindow('work')} 
        className="third-large-window">
          <WorkExperience />
        </Window>
      )}

      {openWindows.projects && (
        <Window title="Project Experience.exe" onClose={() => closeWindow('projects')} 
        className="second-large-window">
          <ProjectExperience />
        </Window>
      )}

      {openWindows.awards && (
        <Window title="Awards.exe" onClose={() => closeWindow('awards')}>
          <Awards />
        </Window>
      )}

      {openWindows.movie && selectedMovie && (
        <Window
          title={selectedMovie === 'movie1' ? "Mia's projects gallary" : "Mia's designs"}
          onClose={() => closeWindow('movie')}
        >
          <MoviePopup movieId={selectedMovie} />
        </Window>
      )}

      {openWindows.anime && (
        <Window title="(^з^)" onClose={() => closeWindow('anime')}
        className="left-cornor-window">
          <Anime />
        </Window>
      )}

      {openWindows.artists && (
        <Window title="(･_･;" onClose={() => closeWindow('artists')}>
          <Artists />
        </Window>
      )}

      {openWindows.profile && (
  <Window title="Personal Profile.exe" onClose={() => closeWindow('profile')} className="large-window">
    <PersonalProfile />
  </Window>
)}
    </div>
  )
}

export default App