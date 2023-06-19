for (let i = 0; i < data.length; i++) {
  const id = i + 1;
  const avatar = data[i].querySelector("img").src;
  const name = data[i]
    .querySelector(".mat-column-name")
    .textContent.replace("Name:", "");
  const gender = data[i].querySelector(".badge").textContent;
  const mobile = data[i]
    .querySelector(".mat-column-mobile")
    .textContent.replace("Mobile:", "");
  const email = data[i]
    .querySelector(".mat-column-email")
    .textContent.replace("Email:", "");
  const arrive = data[i]
    .querySelector(".mat-column-arriveDate")
    .textContent.replace("Arrive:", "");
  const depart = data[i]
    .querySelector(".mat-column-departDate")
    .textContent.replace("Depart:", "");
  const roomType = data[i]
    .querySelector(".mat-column-roomType")
    .textContent.replace("Room Type:", "");
  const payment = data[i]
    .querySelector(".mat-column-payment")
    .textContent.replace("Payment:", "");

  item.push({
    id,
    avatar,
    name,
    gender,
    mobile,
    email,
    arrive,
    depart,
    roomType,
    payment,
  });
}
