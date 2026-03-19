function MoviePopup({ movieId }) {
  if (movieId === 'movie4') {
    return (
      <div>
        <div className='movie-window-content'>
        <h2>Mia's Design Gallary</h2>
        <h3>Buildeck</h3>
                <a href="https://www.figma.com/proto/i8jnM8VTXz5nKgE2oLylAf/Team-1-Design?node-id=139-364&t=KaMpeGAoibbuzYuF-1" target="_blank" rel="noreferrer">
          Figma prototype
        </a>
        <p>
          A digital space where you can explore other people's projects and easily create and share your own using the simple, modular editing workspace.
        </p>
        <br></br>
                <h3>Pawgress</h3>
                <a href="https://www.figma.com/proto/WPXqR9Kzs4HzeWYTh4rzrT/prototype?node-id=63-3167&t=jezQ0SGRqhHf1UNG-1" target="_blank" rel="noreferrer">
         Figma prototype
        </a>
        <p>
          A social focus-and-recovery application focused on university students where users care for a virtual pet, earn meaningful rewards through protected downtime,
           and stay socially connected—without being overwhelmed.
        </p>
      <br></br>
      <h3>Hammy.OS</h3>
                <a href="https://www.figma.com/make/dfHUfohmroiku33sNugWuB/Main-functionalities-layout?fullscreen=1&t=u6NIM2lsAzlGWQ7D-1" target="_blank" rel="noreferrer">
         Figma make
        </a>
        <p>
          An AI-powered venture capital app that helps with sourcing, screening. unify startup portfolio with agentic AI assistant to make better decisions.
        </p>
        <br></br>
              </div>
      </div>
    )
  }
  if (movieId === 'movie1') {
  return ( <div>
        <div className='moviefour-window-content'>
        <h2>Mia's Project Gallary</h2>
        <h3>PantryChef</h3>
                <a href="https://github.com/miahuang77/PantryChef" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <p>
         A smart pantry manager that uses AI to generate recipes from your ingredients, prioritizing food before it expires.
        </p>
        <br></br>

        <h3>FocusAurus</h3>
                <a href="https://github.com/miahuang77/FocusAurus://github.com/miahuang77/PantryChef" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <p>
         A productivity web app designed for users diagnosed with ADHD that AI-customizes study plan based on uploaded prescription and tracks users' distraction with webcam.
        </p>
        <br></br>

         <h3>Mia's World (personal page)</h3>
                <p>this website!</p>
      
        <br></br>
        </div>
        </div>
)
  }


}

export default MoviePopup
