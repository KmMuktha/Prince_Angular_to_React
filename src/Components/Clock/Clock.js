import React, { useState } from "react";
//import customParseFormat from 'dayjs/plugin/customParseFormat'
//import dayjs from "dayjs"

export default function Clock() {
  let [cdate, setCDate] = useState();
  let [ctime, setCTime] = useState();
  let date = new Date().toLocaleDateString();
 
  const updateDate = () => {
    //var dayjs =require('dayjs/locale/es')
    var dayjs = require('dayjs');
    //dayjs.extend(customParseFormat)
    //var dayjs =require('dayjs/locale/es')
    //date = new Date().toLocaleDateString(); -->This gives error in Firefox.
    date = new Date().toDateString();//This works  both in Chrome and also in firefox
    setCDate(dayjs(date).format('dddd MMMM DD,YYYY'));
    //  setCDate(date);
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
      <div >{cdate}</div>
      {/* <div>{ctime}</div> */}
      {/* <h3>{cdate}</h3>
      <h3>{ctime}</h3> */}
    </div>
  );
}
