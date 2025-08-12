import "./Skeleton.css";

function SkeletonAll() {
  return (
    <>
      <div className="cardHeader">
        <div className="imgContainer">
          <div
            className="circle"
            style={{ width: "2.1rem", height: "2.1rem" }}
          ></div>
        </div>

        <div className="titleLink">
          <div
            className="rectangle"
            style={{ width: "5rem", height: "0.9rem" }}
          ></div>
          <div
            className="rectangle"
            style={{ width: "8rem", height: "0.7rem" }}
          ></div>
        </div>
      </div>
      {/* ------------------------------------------------------ */}
      <main style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div
            className="rectangle"
            style={{ width: "8rem", height: "1.3rem" }}
          ></div>
        </div>

        <div>
          <div
            className="rectangle"
            style={{ width: "98%", height: "1rem" }}
          ></div>
          <div
            className="rectangle"
            style={{ width: "70%", height: "1rem" }}
          ></div>
        </div>
      </main>
    </>
  );
}

export default SkeletonAll;
