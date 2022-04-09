import * as React from 'react';
import Rating from '@mui/material/Rating';

import './image.css'

function Image({ src, name, exp, data, url, description, skills }) {
  return (
    <div className="picture-container">
      <img className="picture" src={src} />
      <div className="text">{name}</div>
      <div className="experience-text">
        {exp ?
          data.map((station) => {
            return (
              <div className="text-on-hover visibility-hidden">
                <h3>{station.title}</h3>
                <p className="small-header">{station.year}</p>
                <p>{station.description}</p>
              </div>)
          }) : <div className='visibility-hidden'><div className="text-on-hover">
            <h3>
              {description}
            </h3>
            <a className="github-link" href={url} target="_blank">
              View it on Github →
            </a>
          </div>
            <div className='skill-rating'>
              {skills.map((skill) => {
                return (
                  <p>{skill.language} <span>{skill.rating}</span></p>
                )
              })}
              {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            </div></div>}
      </div>
    </div>
  );
}

export default Image;