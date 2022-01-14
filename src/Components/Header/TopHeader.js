import React from "react";

export default function TopHeader() {
  return (
    <div className="top-menu" wp-site-content>
      <div className="container">
        <ul className="left-top-menu">
          <li>
            <a
              href=" https://www.facebook.com/PrinceTVKannada/"
              className="facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCiabAZXnvI5TY-LXNtqC6yg"
              className="youtube"
            >
              {" "}
              <i className="fa fa-youtube"></i>
            </a>
          </li>

          <li>
            <a
              href=" https://www.instagram.com/princetvkannada1/"
              className="instagram"
            >
              {" "}
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="address">
            <a href="#">
              <i className="fa fa-phone"></i>+91 9611313307
            </a>
          </li>
          <li className="address">
            <a href="#">
              <i className="fa fa-envelope-o"></i> info@princetvkannada.com
            </a>
          </li>
        </ul>
        <ul className="right-top-menu pull-right">
          <li className="contact">
            <a href="https://www.google.com/maps/place/Prince+TV+Kannada/@15.0594542,72.1504966,6z/data=!4m19!1m13!4m12!1m4!2m2!1d77.561856!2d13.0351104!4e1!1m6!1m2!1s0x3bc6550872b3b3a5:0x7f981059f6bb0ddf!2sprincetvkannada!2m2!1d75.7211648!2d16.8214411!3m4!1s0x3bc6550872b3b3a5:0x7f981059f6bb0ddf!8m2!3d16.8214411!4d75.7211648">
              <i className="fa fa-map-marker fa-i"></i>
            </a>
          </li>
          <li className="about">
            <a href="about-us.html">
              <i className="fa fa-user fa-i"></i>
            </a>
          </li>
          <li>
            <div className="search-container">
              <div className="search-icon-btn">
                <span>
                  <i className="fa fa-search"></i>
                </span>
              </div>
              <div className="search-input">
                <input
                  type="search"
                  className="search-bar"
                  placeholder="Search..."
                  title="Search"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
