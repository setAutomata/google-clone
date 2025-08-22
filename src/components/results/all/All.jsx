import React from "react";
import { Link } from "react-router";
import "./All.css";
import SkeletonAll from "../../skeleton/SkeletonAll";

function All({ query }) {
  const rows = new Array(5).fill(null);

  function extractLink(link) {
    return link.split("//")[0] + "//" + link.split("//")[1].split("/")[0];
  }

  if (query?.status === "pending" || query?.isFetching)
    return (
      <>
        {rows.map((row, i) => (
          <div className="resultCard" key={i}>
            <SkeletonAll />
          </div>
        ))}
      </>
    );

  if (query?.status === "error")
    return (
      <div className="errorMsg">
        <span className="errorIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </span>
        <span style={{ paddingLeft: "0.5rem" }}>{query.error?.message}</span>
      </div>
    );

  return (
    <>
      {query?.data?.items?.map((item, i) => {
        if (!item.pagemap)
          return <React.Fragment key={"ignore-" + i}></React.Fragment>;
        return (
          <div className="resultCard" key={"web-" + i}>
            <div className="cardHeader">
              <div className="imgContainer">
                <img
                  src={
                    `https://www.google.com/s2/favicons?domain=` +
                    extractLink(item.link) +
                    "&sz=64"
                  }
                  alt={item.pagemap?.metatags[0]["og:image:alt"]}
                  loading="lazy"
                />
              </div>

              <Link to={item.link} className="titleLink">
                <span className="title">
                  {item.pagemap?.metatags[0]["og:site_name"]}
                </span>
                <span className="smallLink">{item.formattedUrl}</span>
              </Link>
            </div>
            <main>
              <h3 className="blueLink">
                <Link to={item.link}>{item.title}</Link>
              </h3>

              <div className="snippet">{item.snippet}</div>
            </main>
          </div>
        );
      })}
    </>
  );
}

export default All;
