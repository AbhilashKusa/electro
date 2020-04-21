import React from "react";

import { Link } from "react-router-dom";

function Projects() {
  function Nextpage(event) {
    event.preventDefault();
    window.location.href ="./Classes"
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
      <div className="container">
        <p>
          The topic-support-conclusion model (one variation of which is named
          the Schaffer paragraph, after its developer, Jane Schaffer) is valid
          in that it helps developing writers discipline themselves to craft
          effective persuasive arguments. Opinions easily dissipate if they are
          not backed up by facts or reasoning. But the form is only that — a
          mold that can (and should) be broken once a writer learns how to use
          it.
        </p>
      </div>
      <div className="button">
        <button className="btn btn btn-primary" onClick={Nextpage}>
          <Link to="/Classes">Back</Link>
        </button>
      </div>
    </div>

  );
}
export default Projects;
