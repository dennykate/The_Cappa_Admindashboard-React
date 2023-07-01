import { data } from "./testData.js";
import { faker } from "@faker-js/faker";

let status = ["Booked", " Canceled", " Refund"];

const newData = data.map((dt, index) => {
  dt.id = index + 1;
  return dt;
});

console.log(newData);
