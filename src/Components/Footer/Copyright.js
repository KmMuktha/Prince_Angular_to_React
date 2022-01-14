import React from "react";

export default function Copyright() {
  return (
    <div>
      <div id="copyrights">
        <div  className="container">
          <div  className="copyright">
            <a href="http://www.walkinsoftwares.com/">
              {" "}
              &copy; 2020, designed by Walkin Software Technologies{" "}
            </a>
          </div>

          <div  className="footer-social-icons">
            <ul>
              <li>
                <a
                  href=" https://www.facebook.com/PrinceTVKannada/"
                   className="facebook"
                >
                  <i  className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#"  className="twitter">
                  <i  className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCiabAZXnvI5TY-LXNtqC6yg"
                   className="youtube"
                >
                  {" "}
                  <i  className="fa fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href=" https://www.instagram.com/princetvkannada1/"
                   className="instagram"
                >
                  {" "}
                  <i  className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
