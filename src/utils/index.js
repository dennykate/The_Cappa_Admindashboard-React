import { data } from "./testData.js";

let status = ["Booked", " Canceled", " Refund"];

const newData = data.map((dt) => {
  dt.guestId = "#EMP-000" + Math.floor(Math.random() * 100);
  dt.status = status[Math.floor(Math.random() * 3)];

  return dt;
});

console.log(newData);
