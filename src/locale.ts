import { LocaleType, Tools } from '@univerjs/core';
import DesignEnUS from '@univerjs/design/locale/en-US';
import DocsUIEnUS from '@univerjs/docs-ui/locale/en-US';
import SheetsDataValidationEnUS from '@univerjs/sheets-data-validation/locale/en-US';
import SheetsFormulaEnUS from '@univerjs/sheets-formula/locale/en-US';
import SheetsUIEnUS from '@univerjs/sheets-ui/locale/en-US';
import SheetsEnUS from '@univerjs/sheets/locale/en-US';
import UIEnUS from '@univerjs/ui/locale/en-US';

export const locales = {
  [LocaleType.EN_US]: Tools.deepMerge(
    SheetsEnUS,
    DocsUIEnUS,
    SheetsUIEnUS,
    UIEnUS,
    DesignEnUS,
    SheetsFormulaEnUS,
    SheetsDataValidationEnUS,
  ),
};
