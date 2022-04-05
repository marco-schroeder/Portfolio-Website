import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import './App.css';
import images from './images.js'
import workexp from './workexp';
import education from './education';
import Image from './components/image.js'
import Button from './components/button.js'


function App() {
  useEffect(() => {
    let img = document.querySelector(".subtitle").offsetTop;
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        let opac = (window.pageYOffset / img);
        console.log(opac);
        document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(/images/IMG_8661-removebg-overlay.png) 100% 0% /55% no-repeat";
      }
    }
  }, [])
  return (
    <div className="App">
      <div className="top-area">
        <h1 className="cssanimation fadeInBottom shadow">
          Marco Schröder
        </h1>
        <div className="buttons cssanimation fadeInBottom">
          <Button source="/images/icons8-gmail-240.png" text="E-Mail" />
          <Button source="/images/icons8-github-240 (1).png" text="Github" href="https://github.com/marco01123581321" />
          <Button source="/images/icons8-linkedin-240.png" text="LinkedIn" href="https://de.linkedin.com/in/marco-schr%C3%B6der-14041a1b0" />
        </div>
      </div>
      <div className="landing-container">
        <h2 className="title cssanimation fadeInBottom shadow">
          Job Title
        </h2>
        <p className="subtitle cssanimation fadeInBottom">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
      <a href="#aboutme">
        <div className="scroll">
          <span className="scroll-icon">
            <span className="scroll-icon__wheel-outer">
              <span className="scroll-icon__wheel-inner"></span>
            </span>
          </span>
        </div>
      </a>
        <div id="aboutme">
          <p className="small-header">Who I am</p>
          <h2 className="shadow">
            About me
          </h2>
          <div className="img-container">
            <Image
              name="work experience"
              exp="true"
              src="/images/safar-safarov-koOdUvfGr4c-unsplash.jpg"
              data={workexp}
            />
            <Image
              name="education"
              exp="true"
              src="/images/shunya-koide-1emWndlDHs0-unsplash.jpg"
              data={education}
            />
          </div>
        </div>
        <div>
          <p className="small-header">What I do</p>
          <h2 className="shadow">
            Projects
          </h2>
          <div className="img-container">
            {images.map((image) => {
              return (
                <Image
                  key={image.name}
                  name={image.name}
                  src={image.image}
                  description={image.description}
                  url={image.url}
                />
              )
            })}
          </div>
        </div>
      <footer className="small-header align-center border">Made with ♥ by <a href="http://lisa.eichwitz.de/" target="_blank">Lisa</a> & Marco. Hosted on <a href="https://www.google.de" target="_blank">Github Pages</a>.</footer>
    </div>
  );
}

export default App;
