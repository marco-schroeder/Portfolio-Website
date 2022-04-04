import './button.css'

function Button(props) {
  return (
    <form>
    <button className="button" formAction={props.href}>
        <img className="button-icon" src={props.source}/>
        <span className="button-text">{props.text}</span>
    </button>
    </form>
  );
}

export default Button;