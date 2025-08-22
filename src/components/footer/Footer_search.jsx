import { Link } from "react-router";
import "./Footer_search.css";

function Footer_search() {
  return (
    <div className="footer__search__container">

      <div className="footer__top">
        <div>Germany</div>
        <div className="vertical-line"></div>
        <div className="bullet">
          Hamburg
          <span style={{ color: "var(--link-color)" }}>
            &nbsp;- From your IP address - Update location
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottm__left">
          <div>
            <Link>Help</Link>
          </div>
          <div>
            <Link>Send feedback</Link>
          </div>
          <div>
            <Link>Privacy</Link>
          </div>
          <div>
            <Link>Terms</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer_search;
