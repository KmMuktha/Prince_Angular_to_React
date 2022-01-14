import React from "react";
import TopHeader from "./Header/TopHeader";
import TopNavBar from "./Header/TopNavBar";
import MiddleSection from "./MiddleSection";
import LiveRunning from "./LiveRunning";
import AboutUs from "./Footer/AboutUs";
import LinkTags from "./Footer/LinkTags";
import Copyright from "./Footer/Copyright";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Home() {
  return (
    <div>
      <div id="wrapper" data-color="red">
        <Header />
        <section id="main-section">
          <MiddleSection />
        </section>
        <section className="module">
          <LiveRunning />
        </section>
      </div>
      <Footer />
    </div>
  );
}
