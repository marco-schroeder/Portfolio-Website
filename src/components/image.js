import './image.css'

function Image({ src, name, exp, data }) {
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
          }) : ''}
      </div>
    </div>
  );
}

export default Image;