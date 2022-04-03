import './App.css';
import images from './images.js'
import Image from './components/image.js'
import Button from './components/button.js'

function App() {
  return (
    <div className="App">
      <h1>
        Marco Schröder
      </h1>
      <div className="landing-container">
        <div className="buttons">
          <Button source="/images/icons8-gmail-240.png" text="E-Mail"/>
          <Button source="/images/icons8-linkedin-240.png" text="LinkedIn"/>
        </div>
        <h2>
          Data Engineer
        </h2>
        <p className="subtitle">
          Over the past 2 years I have been a dual student @ Deutsche Telekom and steadily working on new things.
        </p>
      </div>
      <div>
        <p className="small-header">Who am I?</p>
        <h2>
          About me
        </h2>
        <div className="img-container">
          <Image
            name="work experience"
            src="/images/jose-losada-DyFjxmHt3Es-unsplash.jpg"
          />
          <Image
            name="education"
            src="/images/shunya-koide-1emWndlDHs0-unsplash.jpg"
          />
        </div>
      </div>
      <div>
        <p className="small-header">What am I working on?</p>
        <h2>
          Projects
        </h2>
        <div className="img-container">
          {images.map((image) => {
            return (
              <Image
                key={image.name}
                name={image.name}
                src={image.image} />
            )
          })}
        </div>
      </div>
      <footer className="small-header align-center">Made with ♥ by Marco. Hosted on <a href="https://www.google.de" target="_blank">Github Pages</a>.</footer>
    </div>
  );
}

export default App;
