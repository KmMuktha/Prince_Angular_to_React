import React from "react";
import Marquee from "react-fast-marquee";

export default function LiveRunning() {
  return (
    <div>
      <div className="container">
        <div className="outer">
          <div className="breaking-ribbon" >

            <h4  >ಬಿಸಿ ಬಿಸಿ ಸುದ್ದಿ .
            
           </h4>
           
           
           
          </div>
          <div className="newsticker">
<Marquee className="MarqueeClass">This is the project of react done by our team </Marquee>
</div>


          {/* <div className="newsticker">
            <ul>
              <li ng-repeat="b in brkNws.newsFieldDto">
                <h4>
                  <a href="#">District news </a>
                </h4>
              </li>
            </ul>
            <div className="navi">
              <button className="up">
                <i className="fa fa-caret-left"></i>
              </button>
              <button className="down">
                <i className="fa fa-caret-right"></i>
              </button>
            </div>
          </div> */}
        </div>
        {/* Ctrl+KC--> commenting
        Ctrl+KU--> uncommenting
        Ctl+A --> select
        Ctrl+C --> to copy
        Ctrl+V to paste */}

        <div class="module-title"> 
          <h3 class="title">
            <a href="#!/district">  
            <span class="bg-1"><span>ಜಿಲ್ಲೆಗಳ ಸುದ್ದಿ</span>( news)</span>
            </a>
          </h3>
        </div>
        <div class="module-title">
          <h3 class="title">
            <a href="#!/state">  
            <span class="bg-1"><span> ರಾಜ್ಯಗಳ ಸುದ್ದಿ </span>(State news)</span>
            </a>
          </h3>
        </div>
        <div class="module-title">
          <h3 class="title">
            <a href="#!/nation">  
            <span class="bg-1"><span> ರಾಷ್ಟ್ರೀಯಸುದ್ದಿ  </span>(National news)</span>
            </a>
          </h3>
        </div>
        <div class="module-title">
          <h3 class="title">
            <a href="#!/nation">  
            <span class="bg-1"><span>  ರಾಜಕೀಯ ಸುದ್ದಿ   </span>(Political news)</span>
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
