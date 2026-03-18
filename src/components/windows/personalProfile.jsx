// src/components/windows/personalProfile.jsx
import profilepics from '/assets/images/profilepics.png'

function PersonalProfile() {
  return (
    <div className="profile-window-content">
      <h2>Hi There!</h2>
      <h2>This is Mia Huang's homepage</h2>

      {/* horizontal scroll */}
      <div className="profile-photos-scroll">
        <img src={profilepics} alt="Mia's photos" />
      </div>

      <h2>A little bit about Mia :</h2>

      {/* vertical scroll */}
      <div className="profile-text-scroll">
        <p>Find her on...</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mia-huang-a448a8336" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <p></p></p>
        <p>GitHub:<a href="https://github.com/miahuang77" target="_blank" rel="noreferrer">
          GitHub
        </a></p>
        <br />
        <p>What she studies...</p>
        <p>UBC - Sauder School of Business (Business & Computer Science)</p>
        <p>Useless Business Student</p>
        <p>Self-taught website designer, UI designer and front-end developer</p>
        <br />
        <p>What she does...</p>
        <p>Currently unemployed</p>
        <p>Builds silly stuff</p>
        <p>Gambles a lot</p>
        <br />
        <p>What she likes...</p>
        <p>Cats, Dinosaurs, Marine creatures, Jazz, Travelling, Designing, Getting new plushies, Pho, Macha...</p>
        <br />
        <p>What she dislikes...</p>
        <p>Birds, Going to lectures, Doing sports, Reptiles, Rainy day, Cold winter</p>
      </div>
    </div>
  )
}

export default PersonalProfile