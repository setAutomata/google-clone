import "./AppsMenu.css";
import GoogleAccount from "../../assets/images/google-logo-account.svg";
import GoogleSearch from "../../assets/images/google-logo-search.svg";
import GoogleMaps from "../../assets/images/google-logo-maps.svg";
import GoogleNews from "../../assets/images/google-logo-news.svg";
import GoogleGmail from "../../assets/images/google-logo-gmail.svg";
import GoogleMeet from "../../assets/images/google-logo-meet.svg";
import GoogleChat from "../../assets/images/google-logo-chat.svg";
import GoogleContacts from "../../assets/images/google-logo-contacts.svg";
import GoogleDrive from "../../assets/images/google-logo-drive.svg";
import GoogleCalendar from "../../assets/images/google-logo-calendar.svg";
import GooglePlay from "../../assets/images/google-logo-play.svg";
import GoogleTranslate from "../../assets/images/google-logo-translate.svg";
import GooglePhotos from "../../assets/images/google-logo-photos.svg";
import GoogleShopping from "../../assets/images/google-logo-shopping.svg";

function AppsMenu({ ref }) {
  return (
    <div className="menu-apps" ref={ref}>
      <div className="menu-apps-internal">
        <div className="menu-apps-row">
          <div className="menu-apps-btn">
            <img
              src={GoogleAccount}
              alt="google account"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Account</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GoogleSearch}
              alt="google search"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Search</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GoogleMaps}
              alt="google maps"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Maps</div>
          </div>
        </div>
        {/* ---2---- */}
        <div className="menu-apps-row">
          <div className="menu-apps-btn">
            <img
              src={GoogleNews}
              alt="google news"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">News</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GoogleGmail}
              alt="google gmail"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Gmail</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GoogleMeet}
              alt="google meet"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Meet</div>
          </div>

        </div>
        {/* ---3--- */}
        <div className="menu-apps-row">
          <div className="menu-apps-btn">
            <img
              src={GoogleChat}
              alt="google chat"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Chat</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GoogleContacts}
              alt="google contacts"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Contacts</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GoogleDrive}
              alt="google drive"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Drive</div>
          </div>
        </div>
        {/* ---4--- */}
        <div className="menu-apps-row">
          <div className="menu-apps-btn">
            <img
              src={GoogleCalendar}
              alt="google calendar"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Calendar</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GooglePlay}
              alt="google play"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Play</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GoogleTranslate}
              alt="google translate"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Translate</div>
          </div>

        </div>
        {/* ---5--- */}
        <div className="menu-apps-row">
          <div className="menu-apps-btn">
            <img
              src={GooglePhotos}
              alt="google photos"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Photos</div>
          </div>

          <div className="menu-apps-btn">
            <img
              src={GoogleShopping}
              alt="google shopping"
              width="35"
              style={{ marginTop: "0.8rem" }}
            />
            <div className="menu-apps-text">Shopping</div>
          </div>

          <div className="menu-apps-btn" style={{ visibility: "hidden" }}></div>
          
        </div>
      </div>
      <div className="moreFromGoogle">More from google</div>
    </div>
  );
}

export default AppsMenu;
