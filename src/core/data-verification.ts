import { ISheetDataValidationRule, IWorkbookData, IWorksheetData, Tools } from '@univerjs/core';

import { dataValidationMap, dataValidationOperatorMap } from '../common/const/data-verification';
import { ILuckyJson } from '../common/interface/lucky-json';
import { ILuckySheet } from '../common/interface/lucky-sheet';

export function dataVerification(
  workbookData: Partial<IWorkbookData>,
  worksheetData: Partial<IWorksheetData>,
  luckyJson: Partial<ILuckyJson>,
  sheet: Partial<ILuckySheet>,
) {
  if (sheet.dataVerification) {
    const dataValidation: ISheetDataValidationRule[] = [];

    for (const key in sheet.dataVerification) {
      const cell = sheet.dataVerification[key];

      let originType = '';
      if (cell.type === 'dropdown' && cell.type2 === true) {
        originType = 'dropdown_multiple';
      } else {
        originType = cell.type;
      }

      const type = dataValidationMap[originType];

      if (!type) {
        continue;
      }

      const [rowIndex, columnIndex] = key.split('_');
      const row = parseInt(rowIndex);
      const column = parseInt(columnIndex);

      const validationItem: ISheetDataValidationRule = {
        uid: Tools.generateRandomId(6),
        type,
        ranges: [
          {
            startRow: row,
            endRow: row,
            startColumn: column,
            endColumn: column,
          },
        ],
      };

      switch (originType) {
        case 'number':
        case 'number_integer':
        case 'number_decimal':
        case 'text_length':
        case 'date':
          validationItem.operator = dataValidationOperatorMap['' + cell.type2 || 'eq'];

          if (cell.type2 === 'bw' || cell.type2 === 'nb') {
            validationItem.formula1 = '' + cell.value1;
            validationItem.formula2 = '' + cell.value2;
          } else {
            validationItem.formula1 = '' + cell.value1;
          }

          break;

        case 'dropdown':
        case 'dropdown_multiple':
          validationItem.formula1 = '' + cell.value1;
          break;
      }

      validationItem.prompt = cell.hintText;

      dataValidation.push(validationItem);
    }

    return dataValidation;
  }
}
