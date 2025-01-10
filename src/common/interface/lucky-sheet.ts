// reference https://github.com/dream-num/Luckyexcel/blob/master/src/ToLuckySheet/ILuck.ts
import { IluckySheetAlternateFormatItem, IluckySheetAlternateFormatSave } from './alternate-format';
import { IluckysheetCalcChain } from './calc-chain';
import { IluckySheetCelldata, IluckySheetCelldataValue } from './cell-data';
import { IluckySheetChart } from './chart';
import { IluckysheetConditionFormat } from './condition-format';
import { IluckysheetDataVerification } from './data-verification';
import { IluckySheetFilter } from './filter';
import { IluckysheetFrozen } from './frozen';
import { IluckysheetHyperlink } from './hyperlink';
import { IluckyImages } from './image';
import { IluckySheetPivotTable } from './pivot-table';
import { IluckySheetSelection } from './selection';
import { IluckySheetConfig } from './sheet-config';

export interface ILuckySheet {
  name: string; // Sheet name, it will show on sheet bar, must be unique
  color: string; // Sheet color, it will show on sheet bar
  config: IluckySheetConfig | null; // Row height, column width, hidden, and so on
  index: string | number; //A sheet uniquely identifies,
  status: string | number; //If 1 , it means current shown sheet, else means hidden
  order: string | number; //Order of sheet
  row: number; // Sheet the number of rows, contain blank cell
  column: number; // Sheet the number of columns, contain blank cell
  // visibledatarow:number[],
  // visibledatacolumn:number[],
  luckysheet_select_save: IluckySheetSelection[]; //selection defines
  scrollLeft: number; //horizon scroll offset
  scrollTop: number; //vertical scroll offset

  celldata: IluckySheetCelldata[] | null; // cells
  chart: IluckySheetChart[] | null;

  isPivotTable: boolean;
  pivotTable: IluckySheetPivotTable | null;

  filter_select: IluckySheetSelection | null; //filter range
  filter: IluckySheetFilter | null; //Filter configuration

  luckysheet_alternateformat_save: IluckySheetAlternateFormatSave[] | null; //Alternating colors
  luckysheet_alternateformat_save_modelCustom: IluckySheetAlternateFormatItem[] | null; //Customize alternating colors

  luckysheet_conditionformat_save: IluckysheetConditionFormat[] | null;
  frozen: IluckysheetFrozen;

  calcChain: IluckysheetCalcChain[] | null;

  zoomRatio: number; //sheet zoom ratio 10%-400%

  showGridLines: string; // show grid lines

  defaultColWidth: number; //column width pixel
  defaultRowHeight: number; //row height pixel

  images: IluckyImages | null; //image list

  dataVerification: IluckysheetDataVerification | null;
  hyperlink: IluckysheetHyperlink | null; // hyperlinks
  hide: number; // sheet hide

  // debugger info
  visibledatarow: number[]; //Positions of all rows
  visibledatacolumn: number[]; //Positions of all columns
  ch_width: number; //The width of a sheet
  rh_height: number; //The heighSt of a sheet
  load: string | number; //Check whether this sheed has been loaded
  luckysheet_selection_range: any[]; // deprecated selection
  jfgird_select_save: any[]; // deprecated selection
  data: Array<Array<Partial<IluckySheetCelldataValue> | string | null>>; // Store and update the cell data
}
