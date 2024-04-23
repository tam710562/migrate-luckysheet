import { IluckySheetSelection } from "./selection"



//Border cell interface
export interface IluckySheetborderInfoCell {
    rangeType: string,
    value: IluckySheetborderInfoCellValue,
}
export interface IluckySheetborderInfoCellValue {
    row_index: number,
    col_index: number,
    l?: IluckySheetborderInfoCellValueStyle,
    r?: IluckySheetborderInfoCellValueStyle,
    t?: IluckySheetborderInfoCellValueStyle,
    b?: IluckySheetborderInfoCellValueStyle
}
export interface IluckySheetborderInfoCellValueStyle {
    "style": number,
    "color": string
}

//border range interface
export interface IluckySheetborderInfoRange {
    rangeType: string,
    borderType: string,
    style: string,
    color: string,
    range: IluckySheetSelection[],
}

export type IluckySheetborderInfo = IluckySheetborderInfoCell | IluckySheetborderInfoRange;