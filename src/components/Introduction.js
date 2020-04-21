import React from "react";
import { Link } from "react-router-dom";

// import { link } from "react-router-dom";
// import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

function Introduction() {
  function Nextpage(event) {
    event.preventDefault();
    window.location.href = "./Datatypes";
  }
  return (
    <div className="introduction-1">
      <div class="embed-responsive embed-responsive-21by9">
        <iframe
          title="mytitle"
          class="embed-responsive-item"
          title="myframe"
          src="https://www.youtube.com/embed/v64KOxKVLVg"
        ></iframe>
      </div>
      <div className="button">
        <button className="btn btn btn-primary" onClick={Nextpage}>
          <Link to="/Datatypes">Next</Link>
        </button>
      </div>
    </div>
  );
}
export default Introduction;
