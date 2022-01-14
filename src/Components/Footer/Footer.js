import React from "react";
import Copyright from "./Copyright";
import AboutUs from "./AboutUs";
import LinkTags from "./LinkTags";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div id="parallax-section2">
          <div className="bg parallax2 overlay img-overlay2">
            <div className="container">
              <div className="row no-gutter">
                <AboutUs />
                <LinkTags />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </div>
  );
}
