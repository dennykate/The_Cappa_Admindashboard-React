import * as ExcelJS from "exceljs";
import { data } from "./data";

export const exportExcel = () => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("My Sheet");
  sheet.properties.defaultRowHeight = 30;

  sheet.columns = [
    {
      header: "Name",
      key: "name",
      width: 10,
    },
    {
      header: "Gender",
      key: "gender",
      width: 10,
    },
    {
      header: "Mobile",
      key: "mobile",
      width: 15,
    },
    {
      header: "Email",
      key: "email",
      width: 15,
    },
    {
      header: "Arrive",
      key: "arrive",
      width: 15,
    },
    {
      header: "Depart",
      key: "depart",
      width: 15,
    },
    {
      header: "Room Type",
      key: "roomType",
      width: 15,
    },
    {
      header: "Payment",
      key: "payment",
      width: 15,
    },
  ];

  data?.map((dt) => {
    sheet.addRow({
      name: dt.name,
      gender: dt.gender,
      mobile: dt.mobile,
      email: dt.email,
      arrive: dt.arrive,
      depart: dt.depart,
      roomType: dt.roomType,
      payment: dt.payment,
    });
  });

  workbook.xlsx.writeBuffer().then((data) => {
    const blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "booking-data.xlsx";
    anchor.click();
    window.URL.revokeObjectURL(url);
  });
};
