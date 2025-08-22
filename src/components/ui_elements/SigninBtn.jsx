import "./SigninBtn.css";

function SigninBtn({ children }) {
  return (
    <div>
      <button className="signin-btn">{children}</button>
    </div>
  );
}

export default SigninBtn;
