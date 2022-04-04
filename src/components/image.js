import './image.css'

function Image({ src, name, exp, data , url, description}) {
  return (
    <div className="picture-container">
      <img className="picture" src={src} />
      <div className="text">{name}</div>
      <div className="experience-text">
        {exp ?
          data.map((station) => {
            return (
              <div className="text-on-hover">
                <h3>{station.title}</h3>
                <p className="small-header">{station.year}</p>
                <p>{station.description}</p>
              </div>)
          }) : <div className="text-on-hover">
            <h3>
              {description}
            </h3>
            <a className="github-link" href={url} target="_blank">
              View it on Github →
            </a>
              </div>}
      </div>
    </div>
  );
}

export default Image;