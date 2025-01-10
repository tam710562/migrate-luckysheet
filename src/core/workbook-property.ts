import { IWorkbookData, LocaleType } from '@univerjs/core';

import { localeMap } from '../common/const/locale';
import { ILuckyJson } from '../common/interface/lucky-json';

export function workbookProperty(workbookData: Partial<IWorkbookData>, luckyJson: Partial<ILuckyJson>) {
  if (luckyJson.lang !== undefined) {
    workbookData.locale = localeMap[luckyJson.lang] || LocaleType.EN_US;
  }
}
