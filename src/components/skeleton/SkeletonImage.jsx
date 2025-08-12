import "./Skeleton.css";

function Skeleton_image({ height = "10rem" }) {
  return (
    <>
      <div>
        <div className="imgage-thumb">
          <div
            className="rectangle"
            style={{ width: "auto", height: height }}
          ></div>

          <div
            className="rectangle"
            style={{ width: "40%", height: "0.7rem" }}
          ></div>

          <div
            className="rectangle"
            style={{ width: "auto", height: "0.7rem" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Skeleton_image;
