import "./Button.css";

function Button({ label, type = "button" }) {
  return (
    <div className="Button__container">
      <button
        type={type}
        onMouseDown={(e) =>
          (e.target.style.border = "1px solid var(--accent-color)")
        }
        onMouseUp={(e) =>
          (e.target.style.border = "1px solid transparent")
        }
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
