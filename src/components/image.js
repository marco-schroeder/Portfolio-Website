import './image.css'

function Image(props) {
  return (
    <div>
        <img 
          src={props.src}
        />
        <div>{props.name}</div>
    </div>
  );
}

export default Image;