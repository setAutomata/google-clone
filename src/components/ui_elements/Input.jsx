import { useEffect, useRef } from "react";
import "./Input.css";
import Search from "../../assets/images/search.svg";
import Voice from "../../assets/images/searchByVoice.svg";
import Image from "../../assets/images/searchByImage.svg";
import { useSearchParams } from "react-router";

function Input({ defaultValue = "", page = "home", inputRef }) {
  const [searchParams] = useSearchParams();
  const userInputRef = useRef();

  useEffect(() => {
    userInputRef.current.value = searchParams.get("q");
  }, [searchParams]);

  return (
    <div className="Input__container" ref={inputRef}>
      <div className={page === "search" ? "show-min" : ""}>
        <img src={Search} alt="search" width="22" />
      </div>
      <input
        ref={userInputRef}
        type="text"
        name="query"
        onChange={(e) => e.current.target.value}
        defaultValue={defaultValue}
        required
      />
      <div
        style={
          (page === "search" ? {} : { display: "none" }, { display: "flex" })
        }
      >
        <svg
          id="closeIcon"
          className="cursorPointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          style={page === "search" ? {} : { display: "none" }}
          onClick={() => (userInputRef.current.value = "")}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <div className="verticalBar hide-min"></div>
      </div>
      <div className="cursorPointer hide-min">
        <img src={Voice} alt="search by voice" width="25" />
      </div>
      <div
        className={page === "home" ? "cursorPointer" : "cursorPointer hide-min"}
      >
        <img src={Image} alt="search by image" width="25" />
      </div>
      <button className="cursorPointer blueSearch hide-min" type="submit">
        <svg
          id="searchIcon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#888"
          style={page === "search" ? {} : { display: "none" }}
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </button>
    </div>
  );
}

export default Input;
