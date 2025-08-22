import "./PaginationBox.css";
import G from "../../assets/images/G.svg";
import oRed from "../../assets/images/o_red.svg";
import oYellow from "../../assets/images/o_yellow.svg";
import gle from "../../assets/images/gle.svg";
import arrowForward from "../../assets/images/arrow_forward.svg";
import arrowBackward from "../../assets/images/arrow_backward.svg";

function PaginationBox({ start, setStart, query }) {
  return (
    <div className="paginationContainer">
      <div className="paginationBox">
        <button
          type="submit"
          className="paginationColumn handPointer"
          onClick={() => setStart(query.data.prevPage)}
          style={start > 1 ? { display: "block" } : { display: "none" }}
          disabled={start === 1}
        >
          <div>
            <img
              style={{ height: "15px" }}
              src={arrowBackward}
              alt="left arrow"
            />
          </div>
          <div style={{ marginTop: "20px" }}>Previous</div>
        </button>

        <div className="paginationColumn">
          <div>
            <img className="googleSVG" src={G} alt="G" />
          </div>
          <div>&nbsp;</div>
        </div>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(1)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 1 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 1 ? "" : "pageNum"}
            style={start === 1 ? { color: "red" } : {}}
          >
            1
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(11)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 11 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 11 ? "" : "pageNum"}
            style={start === 11 ? { color: "red" } : {}}
          >
            2
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(21)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 21 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 21 ? "" : "pageNum"}
            style={start === 21 ? { color: "red" } : {}}
          >
            3
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(31)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 31 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 31 ? "" : "pageNum"}
            style={start === 31 ? { color: "red" } : {}}
          >
            4
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(41)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 41 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 41 ? "" : "pageNum"}
            style={start === 41 ? { color: "red" } : {}}
          >
            5
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(51)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 51 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 51 ? "" : "pageNum"}
            style={start === 51 ? { color: "red" } : {}}
          >
            6
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(61)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 61 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 61 ? "" : "pageNum"}
            style={start === 61 ? { color: "red" } : {}}
          >
            7
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(71)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 71 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 71 ? "" : "pageNum"}
            style={start === 71 ? { color: "red" } : {}}
          >
            8
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(81)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 81 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 81 ? "" : "pageNum"}
            style={start === 81 ? { color: "red" } : {}}
          >
            9
          </div>
        </button>

        <button
          className="paginationColumn handPointer"
          onClick={() => setStart(91)}
        >
          <div>
            <img
              className="googleSVG hand"
              src={start === 91 ? oRed : oYellow}
              alt="o"
            />
          </div>
          <div
            className={start === 91 ? "" : "pageNum"}
            style={start === 91 ? { color: "red" } : {}}
          >
            10
          </div>
        </button>

        <div className="paginationColumn">
          <div>
            <img className="googleSVG" src={gle} alt="gle" />
          </div>
          <div>&nbsp;</div>
        </div>
        
        <button
          type="submit"
          className="paginationColumn handPointer"
          onClick={() => setStart(query.data.nextPage)}
          disabled={start === 91}
        >
          <div>
            <img
              style={{ height: "15px" }}
              src={arrowForward}
              alt="right arrow"
            />
          </div>
          <div style={{ marginTop: "20px" }}>Next</div>
        </button>
      </div>
    </div>
  );
}

export default PaginationBox;
