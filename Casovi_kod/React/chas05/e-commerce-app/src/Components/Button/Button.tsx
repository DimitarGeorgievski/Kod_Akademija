import "./Button.css";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onBtnClick: () => void;
}

function Button({text, style, onBtnClick, disabled}: ButtonProps) {
  return (
    <button className="Button" disabled={disabled} onClick={onBtnClick} style={style}>
      {text}
    </button>
  );
}

export default Button;
