import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router";
import "./Footer_home.css";

function Footer_home() {
  const footerMenuRef = useRef();
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    function closeBottomMenu(e) {
      if (footerMenuRef.current && !footerMenuRef.current.contains(e.target))
        footerMenuRef.current.style.visibility = "hidden";
    }
    document.addEventListener("click", closeBottomMenu, true);
    return () => document.addEventListener("click", closeBottomMenu, true);
  }, []);

  function handleDarkMode() {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  return (
    <div className="footer__container">
      <div className="footer__top">Germany</div>
      {/* ----------------------------------- */}
      <div className="footer__bottom">
        <div className="footer__bottm__left">
          <div className="show-min" onClick={handleDarkMode}>
            Dark theme: {theme === "dark" ? "On" : "Off"}
          </div>

          <div className="hide-min">
            <Link>About</Link>
          </div>

          <div className="hide-min">
            <Link>Advertising</Link>
          </div>

          <div className="hide-min">
            <Link>Business</Link>
          </div>

          <div className="hide-min">
            <Link>How Search Works</Link>
          </div>
        </div>
        
        <div className="footer__bottm__right">
          <div>
            <Link>Privacy</Link>
          </div>

          <div>
            <Link>Terms</Link>
          </div>

          <div>

            <button
              onClick={() =>
                (footerMenuRef.current.style.visibility = "visible")
              }
              style={{ color: "var(--text-color)" }}
            >
              Settings
            </button>

            <div className="footer__menu__container" ref={footerMenuRef}>
              <span className="menuItem">Search settings</span>
              <span className="menuItem">Advanced search</span>
              <span className="menuItem">Your data in search</span>
              <span className="menuItem">Search history</span>
              <span className="menuItem">Search help</span>
              <span className="menuItem">Send feedback</span>
              <span className="menuItem themeMenu" onClick={handleDarkMode}>
                <span>Dark theme: {theme === "dark" ? "On" : "Off"}</span>
                {theme === "light" && (
                  <svg
                    id="lightMode"
                    className="modeIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    width="18px"
                    viewBox="0 -960 960 960"
                    fill="#111"
                    style={{ margin: "0 0.5rem" }}
                  >
                    <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Z" />{" "}
                  </svg>
                )}
                {theme === "dark" && (
                  <svg
                    className="modeIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#e8eaed"
                    viewBox="0 -960 788.18 782.74"
                    style={{ margin: "0 0.5rem" }}
                  >
                    <path d="M689.71-301.48q-56.435 59.49-129.53 90.771-73.094 31.281-150.14 33.312-77.048 2.03-151.69-25.358-74.64-27.388-134.13-83.823-60.216-57.123-91.134-129.87-30.919-72.75-32.949-149.8-2.03-77.048 25.358-151.69 27.388-74.64 83.823-134.13 37.165-39.176 82.421-66.541 45.257-27.365 94.402-41.392-24.178 102.5 3.97 204.32t109.4 178.91q81.255 77.082 184.42 99.828 103.17 22.746 204.25-6.797-11.42 49.816-36.363 96.451-24.943 46.635-62.108 85.812z" />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_home;
