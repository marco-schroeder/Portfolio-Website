import './button.css'

function Button(props) {
  return (
    <button className="button">
        <img className="button-icon" src={props.source}/>
        <span className="button-text">{props.text}</span>
    </button>
  );
}

export default Button;