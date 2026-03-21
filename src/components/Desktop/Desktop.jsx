// src/components/Desktop/Desktop.jsx
import SidebarIcon from '../sidebar/SidebarIcon'
import MovieFrame from '../MovieFrame/MovieFrame'

import workIcon from '/assets/images/icon1.png'
import projectIcon from '/assets/images/icon2.png'
import awardsIcon from '/assets/images/icon3.png'
import profilePic from '/assets/images/profile.png'
import hammy from '/assets/images/Hamster_gif.gif'
import seal from '/assets/images/zeehond9.gif'

function Desktop({
  onOpenWork,
  onOpenProjects,
  onOpenAwards,
  onOpenProfile,
  onMovieClick,
}) {
  return (
    <div className="desktop-layout">

      {/* Iconbars on the left of screen */}
      <div className="sidebar">
        <SidebarIcon img={workIcon} label='work experience' onClick={onOpenWork} />
        <SidebarIcon img={projectIcon} label='projet experience' onClick={onOpenProjects} />
        <SidebarIcon img={awardsIcon} label='awards' onClick={onOpenAwards} />
      </div>

      {/* profile top-left of content */}
      <div className="profile-area">
        <img src={seal} className="seal-gif" />
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <img src={hammy} className="hammy-gif" />
        <button className="profile-overlay-btn" onClick={onOpenProfile} />
      </div>

      {/* movie frames top-right */}
      <MovieFrame onMovieClick={onMovieClick} />


    </div>
  )
}
export default Desktop