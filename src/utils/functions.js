import * as ExcelJS from "exceljs";
import { keys } from "@mantine/utils";

// for except rows
const exceptData = ["id", "image", "avatar"];

// data is an array for export excel file
// name is file name
export const exportExcel = (data, name) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("My Sheet");
  sheet.properties.defaultRowHeight = 30;

  let columns = [];
  keys(data[0]).some((dt) => {
    if (!exceptData.includes(dt)) {
      columns.push({
        header: dt.charAt(0).toUpperCase() + dt.slice(1),
        key: dt,
        width: 15,
      });
    }
  });

  sheet.columns = columns;

  sheet.getRow(1).font = {
    bold: true,
  };

  data?.map((dt) => {
    sheet.addRow(dt);
  });

  workbook.xlsx.writeBuffer().then((data) => {
    const blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${name}.xlsx`;
    anchor.click();
    window.URL.revokeObjectURL(url);
  });
};

export const filterStatus = (data, tab) => {
  const { activeTab, all, type } = tab;
  if (activeTab == all) return data;
  return data[type].toLowerCase() == activeTab.toLowerCase();
};
