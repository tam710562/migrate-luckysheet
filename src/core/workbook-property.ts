import { IWorkbookData, LocaleType } from "@univerjs/core";
import { ILuckyJson } from "../common/interface/lucky-json";
import { localeMap } from "../common/const";

export function workbookProperty(workbookData: Partial<IWorkbookData>, luckyJson: ILuckyJson){
    
    if (luckyJson.lang !== undefined) {
        workbookData.locale = localeMap[luckyJson.lang as string] || LocaleType.EN_US;
    }
}