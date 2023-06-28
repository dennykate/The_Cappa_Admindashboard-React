import { reviewListData } from "./reviewListData.js";
import { faker } from "@faker-js/faker";

const newData = reviewListData?.map((data, index) => {
  data.customer = faker.person.fullName();
  data.avatar = faker.internet.avatar();
  data.status = "Reviewing";
  data.id = index + 1;

  return data;
});

console.log(newData);
