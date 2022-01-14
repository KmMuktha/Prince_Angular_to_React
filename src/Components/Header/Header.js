import React from "react";
import TopHeader from "./TopHeader";
import TopNavBar from "./TopNavBar";

export default function Header() {
  return (
    <div>
      <header id="header">
        <TopHeader />
        <TopNavBar />
      </header>
    </div>
  );
}
