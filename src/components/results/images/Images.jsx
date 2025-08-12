import "./Images.css";
import { Link } from "react-router";
import { useInView } from "react-intersection-observer";
import SkeletonImage from "../../skeleton/SkeletonImage";

function Images({ query }) {
  const rows = new Array(10).fill(null);
  const { ref, inView } = useInView();

  if (inView && query?.hasNextPage) query?.fetchNextPage();

  if (query.status === "error")
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
      <div className="image__container">
        {query.data?.pages.map((page, i) =>
          page.items?.map((item, j) => {
            if (!item.link)
              return <React.Fragment key={"lnk-" + i + j}></React.Fragment>;
            return (
              <div className="imgage-thumb" key={"img-" + i + j}>
                <div>
                  <Link to={item.image.contextLink}>
                    <img src={item.link} alt={item.title} loading="lazy" />
                  </Link>
                </div>
                <div className="imageLabel">
                  <Link to={item.displayLink}>{item.displayLink}</Link>
                </div>
                <div className="imageText">{item.title}</div>
              </div>
            );
          })
        )}
        {(query?.status === "pending" ||
          query?.isFetchingNextPage ||
          query?.isFetchingPreviousPage) && (
          <>
            {rows.map((row, idx) => (
              <SkeletonImage
                key={"skeleton-img" + idx}
                height={idx % 2 ? "10rem" : "13rem"}
              />
            ))}
          </>
        )}
      </div>
      <div ref={ref}></div>
    </>
  );
}

export default Images;
