import "./Search.css";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Form, Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { useApiQuery } from "../../hooks/useApiQuery";
import Footer from "../footer/Footer_search";
import Input from "../ui_elements/Input";
import SigninBtn from "../ui_elements/SigninBtn";
import AppsMenu from "../ui_elements/AppsMenu";
import QuickSettingMenu from "../ui_elements/QuickSettingMenu";
import GoogleLogo from "../../assets/images/googleLogo.svg";
import PaginationBox from "../ui_elements/PaginationBox";
import All from "../results/all/All";
import Images from "../results/images/Images";

const TAB = ["All", "Images", "Videos", "News", "Web", "Maps"];

function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  if (!searchParams.get("q")) return navigate("/");
  const [start, setStart] = useState(1);
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("tab") || "All"
  );
  const googleAppsRef = useRef();
  const [theme] = useContext(ThemeContext);
  const hoveringMenuRef = useRef();
  const inputRef = useRef();
  const headerRef = useRef();
  const query = useApiQuery(searchParams.get("q"), start);

  function handleSubmit(e) {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({
        q: e.target.elements.query?.value,
        start: e.target.elements.start.value,
      })}`,
    });
  }

  useEffect(() => {
    navigate({
      pathname: "/search",
      search: `q=${searchParams.get("q")}&start=${start}`,
    });
  }, [start, searchParams]);

  useEffect(() => {
    document.addEventListener(
      "scroll",
      (e) => {
        if (window.scrollY > 200) {
          headerRef.current.style.boxShadow =
            "1px 1px 4px var(--header-box-shadow)";
          headerRef.current.style.position = "fixed";
          headerRef.current.firstChild.style.padding = "0.2rem 1.5rem";
          inputRef.current.style.transform = "scale(0.85)";
          inputRef.current.style.boxShadow = "none";
          inputRef.current.style.border = "1px solid var(--border-color)";
          inputRef.current.style.marginLeft = "-7%";
          inputRef.current.style.padding = "0.2rem 0.6rem";
          inputRef.current.style.width = "100%";
        } else {
          headerRef.current.style.boxShadow = "none";
          headerRef.current.style.position = "relative";
          headerRef.current.firstChild.style.padding = "1rem";
          inputRef.current.style.marginLeft = "0";
          inputRef.current.style.transform = "none";
          inputRef.current.style.boxShadow =
            "1px 1px 4px var(--box-shadow-color-bottom), -1px -1px 3px var(--box-shadow-color-top)";
          inputRef.current.style.border = "inherit";
          inputRef.current.style.padding = "0.5rem 1rem";
          inputRef.current.style.width = "82%";
        }
      },
      true
    );

    document.addEventListener(
      "click",
      (e) => {
        if (googleAppsRef.current && !googleAppsRef.current.contains(e.target))
          googleAppsRef.current.style.visibility = "hidden";
      },
      true
    );

    document.addEventListener(
      "click",
      (e) => {
        if (
          hoveringMenuRef.current &&
          !hoveringMenuRef.current.contains(e.target)
        )
          hoveringMenuRef.current.style.visibility = "hidden";
      },
      true
    );

    return () => {
      document.addEventListener("click", () => {}, true);
      document.addEventListener("click", () => {}, true);
      document.addEventListener("scroll", () => {}, true);
    };
  }, []);

  return (
    <div className={theme === "dark" ? "search darkmode" : "search"}>
      <header className="search__header" ref={headerRef}>
        <div className="search__header__inner">
          <div className="search__header__right">
            <div className="hide-min">
              <Link to="/">
                <img src={GoogleLogo} alt="google logo" width="95" />
              </Link>
            </div>
            <Form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
              }}
            >
              <Input
                inputRef={inputRef}
                defaultValue={searchParams.get("q")}
                page={"search"}
              />
              <input type="hidden" name="start" value={start} />
            </Form>
          </div>
          {/* --------------------------------------- */}
          <div className="search__header__left">
            <div
              className="quickSettings"
              onClick={() =>
                (hoveringMenuRef.current.style.visibility = "visible")
              }
            >
              <svg
                className="hide-min"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
              </svg>
              <svg
                className="show-min"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </div>
            {/* ---------- floating menu --------- */}
            <QuickSettingMenu ref={hoveringMenuRef} />
            <div
              className="hide-min"
              style={{ position: "relative" }}
              onClick={() =>
                (googleAppsRef.current.style.visibility = "visible")
              }
            >
              <button className="apps-btn">
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
            <div className="show-min">
              <Link to="/">
                <img src={GoogleLogo} alt="google logo" width="95" />
              </Link>
            </div>
            <SigninBtn>Sign in</SigninBtn>
          </div>
        </div>
      </header>
      {/* -------------------- main ---------------------- */}
      <main className="search__main">
        <div className="search__main__result">
          <div className="search__tabs">
            {TAB.map((tab_name, index) => (
              <button
                key={"tab" + index}
                className={activeTab === TAB[index] ? "activeTab" : ""}
                onClick={() => {
                  setActiveTab(TAB[index]);
                  localStorage.setItem("tab", TAB[index]);
                }}
              >
                {tab_name}
              </button>
            ))}
          </div>
          {/* ------------result------------ */}
          <div className="result__container">
            <div
              className={
                activeTab === TAB[0]
                  ? "result__body result-All"
                  : "result_body result-Images"
              }
            >
              {activeTab === TAB[0] && <All query={query} />}
              {activeTab === TAB[1] && <Images query={query} />}
              {activeTab === TAB[2] && <h2>Video results</h2>}
              {activeTab === TAB[3] && <h2>News results</h2>}
              {activeTab === TAB[4] && <h2>Web results</h2>}
              {activeTab === TAB[5] && <h2>Maps</h2>}
            </div>
            {activeTab === TAB[0] && (
              <div className="result__bottom">
                <PaginationBox
                  start={start}
                  setStart={setStart}
                  query={query}
                />
              </div>
            )}
          </div>
        </div>
      </main>
      {/* ------------------- footer ---------------------- */}
      <footer className="search__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Search;
