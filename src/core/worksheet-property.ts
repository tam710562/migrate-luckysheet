import { IWorkbookData, IWorksheetData, Tools } from '@univerjs/core';

import { ILuckyJson } from '../common/interface/lucky-json';
import { ILuckySheet } from '../common/interface/lucky-sheet';
import { dataVerification } from './data-verification';

export function worksheetProperty(
  workbookData: Partial<IWorkbookData>,
  worksheetData: Partial<IWorksheetData>,
  luckyJson: Partial<ILuckyJson>,
  sheet: Partial<ILuckySheet>,
) {
  //  id
  if (sheet.index !== undefined) {
    worksheetData.id = `${sheet.index}`;
  } else {
    worksheetData.id = Tools.generateRandomId(6);
  }

  // zoom ratio
  if (sheet.zoomRatio !== undefined) {
    worksheetData.zoomRatio = sheet.zoomRatio;
  }

  // max row number
  if (sheet.row !== undefined) {
    worksheetData.rowCount = sheet.row;
  }

  // max column number
  if (sheet.column !== undefined) {
    worksheetData.columnCount = sheet.column;
  }

  // sheet name
  if (sheet.name !== undefined) {
    worksheetData.name = sheet.name;
  }

  // horizontal scroll bar position
  if (sheet.scrollLeft !== undefined) {
    worksheetData.scrollLeft = sheet.scrollLeft;
  }

  // vertical scroll bar position
  if (sheet.scrollTop !== undefined) {
    worksheetData.scrollTop = sheet.scrollTop;
  }

  const worksheetDataVerification = dataVerification(workbookData, worksheetData, luckyJson, sheet);

  return {
    worksheetDataVerification,
  };
}
