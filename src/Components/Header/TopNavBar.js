import React from "react";
import Clock from "../Clock/Clock";
import ClockTime from "../Clock/Clock_Time";
import Time, { Date } from "../Clock/Clock";

export default function TopNavBar() {
  return (
    <div>
      <div className="container">
        <div className="header-logo">
          <a href="index.html">
            <img
              src="./images/logo.png"
              alt="Site Logo"
              className="responsive"
            />
          </a>
        </div>
        <div className="header-add-place">
          <div className="desktop-add">
            <a href="" target="_blank">
              <img src="images/live.png" alt="" />
            </a>
          </div>
        </div>
        <nav className="navbar navbar-default" id="mobile-nav">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              id="sidenav-toggle"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="sidenav-header-logo">
              <a href="index.html">
                <img src="./images/logo.png" alt="Site Logo" />
              </a>
            </div>
          </div>
          <div
            className="sidenav"
            data-sidenav
            data-sidenav-toggle="#sidenav-toggle"
          >
            <button
              type="button"
              className="navbar-toggle active"
              data-toggle="collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="sidenav-brand">
              <div className="sidenav-header-logo">
                <a href="index.html">
                  <img src="./images/logo.png" alt="Site Logo" />
                </a>
              </div>
            </div>
            <ul className="sidenav-menu">
              <li>
                <a href="index.html" className="active">
                  ????????????
                </a>
              </li>
              <li>
                <a href="#!/district" className="active">
                  ??????????????????
                </a>
              </li>
              <li>
                <a href="#!/state" className="active">
                  ???????????????
                </a>
              </li>
              <li>
                <a href="#!/nation" className="active">
                  ???????????????????????????
                </a>
              </li>
              <li>
                <a href="#!/filmy" className="active">
                  ????????????????????????
                </a>
              </li>
              <li>
                <a href="#!/political" className="active">
                  ??????????????????
                </a>
              </li>
              <li>
                <a href="district.html" className="active">
                  ??????????????????????????????
                </a>
              </li>
              <li>
                <a href="district.html" className="active">
                  ??????????????????????????????
                </a>
              </li>
              <li>
                <a href="district.html" className="active">
                  ????????????
                </a>
              </li>
              <li>
                <a href="district.html" className="active">
                  ??????????????????
                </a>
              </li>
              <li>
                <a href="district.html" className="active">
                  ?????????????????????
                </a>
              </li>
              <li>
                <a href="district.html" className="active">
                  ??????????????? ??????????????????
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="navbar" id="fixed-navbar">
        <div className="main-menu nav navbar-collapse collapse">
          <div className="main-menu__wrap">
            <ul className="nav navbar-nav">
              <li>
                <a href="#!/home">????????????</a>
              </li>
              <li>
                <a href="#!/district">??????????????????</a>
              </li>
              <li>
                <a href="#!/state">???????????????</a>
              </li>
              <li>
                <a href="#!/nation">???????????????????????????</a>
              </li>
              <li>
                <a href="#!/filmy">????????????????????????</a>
              </li>
              <li>
                <a href="#!/political">??????????????????</a>
              </li>
              <li>
                <a href="#!/cultural">??????????????????????????????</a>
              </li>
              <li>
                <a href="#!/astrology">??????????????????????????????</a>
              </li>

              <li>
                <a href="#!/agriculture">????????????</a>
              </li>

              <li>
                <a href="#!/sports">??????????????????</a>
              </li>

              <li>
                <a href="#!/science">?????????????????????</a>
              </li>

              <li>
                <a href="#!/specialepisode">??????????????? ??????????????????</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="second-menu navbar" id="nav-below-main">
          <div className="container">
            <div className="collapse navbar-collapse nav-below-main">
              <ul className="nav navbar-nav">
                <li>
                  <a href="">????????? ?????????????????? (Watch Live)</a>
                </li>
              </ul>
            </div>
            <div className="clock">
            <div id="time">
            <ClockTime />
            </div>
              <div id="date">
                <Clock />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
