import React, { useState } from "react";

export default function Clock() {
  let [cdate, setCDate] = useState();
  let [ctime, setCTime] = useState();
  let date = new Date().toLocaleDateString();
 
  const updateDate = () => {
    var dayjs = require('dayjs')
    date = new Date().toLocaleDateString();
    setCDate(dayjs(date).format('dddd MMMM DD,YYYY'));
  };
  setInterval(updateDate);

  let time = new Date().toLocaleTimeString();

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <div>
      {/* <div>{cdate}</div> */}
      <div>{ctime}</div>
      {/* <h3>{cdate}</h3>
      <h3>{ctime}</h3> */}
    </div>
  );
}
