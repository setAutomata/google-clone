import { useContext, useEffect, useRef, useState } from "react";
import { Form, Link, useNavigate } from "react-router";
import ThemeContext from "../../context/ThemeContext";
import "./Home.css";
import SigninBtn from "../ui_elements/SigninBtn";
import Button from "../ui_elements/Button";
import Input from "../ui_elements/Input";
import FooterHome from "../footer/Footer_home";
import AppsMenu from "../ui_elements/AppsMenu";
import GoogleLogo from "../../assets/images/googleLogo.svg";

function Home() {
  localStorage.setItem("tab", "All");
  const [imageSearch, setImageSearch] = useState(false);
  const [tabActive, setTabActive] = useState("ALL");
  const googleAppsRef = useRef();
  const [theme] = useContext(ThemeContext);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: `q=${e.target.elements.query.value}`,
    });
  }

  useEffect(() => {
    function closeHoverMenu(e) {
      if (googleAppsRef.current && !googleAppsRef.current.contains(e.target))
        googleAppsRef.current.style.visibility = "hidden";
    }
    document.addEventListener("click", closeHoverMenu, true);
    return () => document.addEventListener("click", closeHoverMenu, true);
  }, []);

  return (
    <div className={theme === "dark" ? "home darkmode" : "home"}>
      <header>
        <div className="home__header">
          <div className="home__header__top">
            {/* -----------------------Right------------------------ */}
            <div className="home__header__right">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </div>
              <div
                className={tabActive === "ALL" ? "minTab active-minTab" : "minTab"}
                onClick={() => {
                  setImageSearch(false);
                  setTabActive("ALL");
                }}
              >
                ALL
              </div>
              <div
                className={tabActive === "IMAGES" ? "minTab active-minTab" : "minTab"}
                onClick={() => {setImageSearch(true); setTabActive("IMAGES")}}
              >
                IMAGES
              </div>
            </div>
            {/* -----------------------Left------------------------ */}
            <div className="home__header__left">
              {!imageSearch && (
                <>
                  <div className="link-btn hide-min" role="button">
                    Gmail
                  </div>
                  <div
                    className="link-btn hide-min"
                    role="button"
                    onClick={() => setImageSearch(true)}
                  >
                    Images
                  </div>
                </>
              )}
              <div>
                <button
                  className="apps-btn"
                  onClick={() =>
                    (googleAppsRef.current.style.visibility = "visible")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
                  </svg>
                </button>
                <AppsMenu ref={googleAppsRef} />
              </div>
              <SigninBtn>Sign in</SigninBtn>
            </div>
          </div>
        </div>
      </header>
      {/* ============================= Main ================================== */}
      <main className="home__main">
        <div
          className="home__main__logo"
          data-search-type={imageSearch ? "Images" : ""}
        >
          <div onClick={() => setImageSearch(false)} style={{ cursor: "pointer" }}>
            <img src={GoogleLogo} alt="google logo" />
          </div>
        </div>
        <Form className="formStyle" onSubmit={handleSearch}>
          <Input />
          <div className="Home__btn__container">
            <Button label="Google Search" type="submit" />
            {!imageSearch && <Button label="I'm Feeling Lucky" type="button" />}
          </div>
        </Form>
        {!imageSearch && (
          <div className="home__main__lang">
            <span>Google offered in:</span>
            <span>
              <Link>Deutsch</Link>
            </span>
          </div>
        )}
      </main>
      {/* =============================== Footer =============================== */}
      <footer>
        <FooterHome />
      </footer>
    </div>
  );
}

export default Home;
