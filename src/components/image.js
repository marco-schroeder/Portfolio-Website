import './image.css'

function Image(props) {
  return (
    <div className="picture-container">
        <img className="picture" src={props.src}/>
        <div className="text">{props.name}</div>
    </div>
  );
}

export default Image;