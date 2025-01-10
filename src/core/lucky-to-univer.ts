import { ISheetDataValidationRule, IWorkbookData, IWorksheetData } from '@univerjs/core';
import { DATA_VALIDATION_PLUGIN_NAME } from '@univerjs/sheets-data-validation';

import { ILuckyJson } from '../common/interface/lucky-json';
import { cellData } from './cell';
import { workbookProperty } from './workbook-property';
import { worksheetConfig } from './worksheet-config';
import { worksheetProperty } from './worksheet-property';

export function luckyToUniver(luckyJson: Partial<ILuckyJson>) {
  const workbookData: Partial<IWorkbookData> = {};
  workbookData.styles = {};

  workbookProperty(workbookData, luckyJson);

  const sheets = luckyJson.data;
  const dataValidationData: Record<string, ISheetDataValidationRule[]> = {};

  if (Array.isArray(sheets)) {
    workbookData.sheets = {};
    for (const sheet of sheets) {
      const worksheetData: Partial<IWorksheetData> = {};

      sheet.images

      const { worksheetDataVerification } = worksheetProperty(workbookData, worksheetData, luckyJson, sheet);

      if (worksheetDataVerification && worksheetDataVerification.length > 0) {
        dataValidationData[worksheetData.id!] = worksheetDataVerification;
      }

      worksheetConfig(workbookData, worksheetData, luckyJson, sheet);
      cellData(workbookData, worksheetData, luckyJson, sheet);

      workbookData.sheets[worksheetData.id!] = worksheetData;
    }
  }

  workbookData.resources = [
    {
      name: DATA_VALIDATION_PLUGIN_NAME,
      data: JSON.stringify(dataValidationData),
    },
  ];

  return workbookData;
}
