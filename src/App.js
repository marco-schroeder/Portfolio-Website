import './App.css';
import images from './images.js'
import Image from './components/image.js'

function App() {
  return (
    <div className="App">
      <h1>
        Marco Schröder
      </h1>
      <div className="landing-container">
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
      </div>
      <div>
        <p className="small-header">What am I working on?</p>
        <h2>
          Projects
        </h2>
        {images.map((image) => {
          return (
            <Image
              key={image.name}
              name={image.name}
              src={image.image} />
          )
        })}
      </div>
      <div>
        <p className="small-header">Do you need a Data Engineer?</p>
        <h2>
          Contact me
        </h2>
      </div>
      <footer className="small-header align-center">Made with ♥ by Marco</footer>
    </div>
  );
}

export default App;
