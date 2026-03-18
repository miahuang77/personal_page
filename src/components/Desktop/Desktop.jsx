// src/components/Desktop/Desktop.jsx
import SidebarIcon from '../sidebar/SidebarIcon'
import MovieFrame from '../MovieFrame/MovieFrame'

import workIcon from '/assets/images/icon1.png'
import projectIcon from '/assets/images/icon2.png'
import awardsIcon from '/assets/images/icon3.png'
import profilePic from '/assets/images/profile.png'
import animeImg from '/assets/images/anime.png'
import artistsImg from '/assets/images/artists.png'
import cat from '/assets/images/cat.gif'
import cattwo from '/assets/images/ocat.gif'
import hammy from '/assets/images/Hamster_gif.gif'
import seal from '/assets/images/zeehond9.gif'
import dog from '/assets/images/frogdog.gif'

function Desktop({
  onOpenWork,
  onOpenProjects,
  onOpenAwards,
  onOpenAnime,
  onOpenArtists,
  onOpenProfile,
  onMovieClick,
}) {
  return (
    <div className="desktop-layout">
      <img src={cattwo} className="cattwo-gif" />
      <img src={hammy} className="hammy-gif" />
      <img src={seal} className="seal-gif" />
      <img src={dog} className="dog-gif" />

      {/* Iconbars on the left of screen */}
      <div className="sidebar">
        <SidebarIcon img={workIcon} label='work experience' onClick={onOpenWork} />
        <SidebarIcon img={projectIcon} label='projet experience' onClick={onOpenProjects} />
        <SidebarIcon img={awardsIcon} label='awards' onClick={onOpenAwards} />
      </div>

      <div className="left-panel">

      {/* profile in middle left */}
      <div className="profile-area">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <button className="profile-overlay-btn" onClick={onOpenProfile} />
        </div>

        <div className="bottom-panels">

      {/* Anime on left bottom */}
      <div className="anime-area">
        <img src={cat} className="cat-gif" />
        <img src={animeImg} alt="Anime" className="anime-pic" />
        <button className="anime-overlay-btn" onClick={onOpenAnime} />
        </div>

      {/* Artist on middle bottom*/}
      <div className="artist-area">
        <img src={artistsImg} alt="Artists" className="artist-pic" />
        <button className="artist-overlay-btn" onClick={onOpenArtists} />
        </div>

        </div>
        </div>

      {/* movie frames on the right */}
      <MovieFrame onMovieClick={onMovieClick} />

    </div>
  )
}
export default Desktop