import { IWorkbookData, IWorksheetData } from '@univerjs/core';
import { ILuckyJson } from '../common/interface/lucky-json';
import { workbookProperty } from './workbook-property';
import { worksheetProperty } from './worksheet-property';
import { worksheetConfig } from './worksheet-config';
import { cellData } from './cell';


export function luckyToUniver(luckyJson: ILuckyJson): Partial<IWorkbookData> {
    const workbookData: Partial<IWorkbookData> = {};
    workbookData.styles = {};

    workbookProperty(workbookData, luckyJson);

    const sheets = luckyJson.data;

    if (Array.isArray(sheets)) {
        workbookData.sheets = {};
        for (let sheet of sheets) {
            const worksheetData: Partial<IWorksheetData> = {};

            worksheetProperty(workbookData, worksheetData, luckyJson, sheet);
            worksheetConfig(workbookData, worksheetData, luckyJson, sheet);
            cellData(workbookData, worksheetData, luckyJson, sheet);

            workbookData.sheets[worksheetData.id!] = worksheetData;
        }
    }

    return workbookData;
}
