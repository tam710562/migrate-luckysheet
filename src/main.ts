import { LocaleType, Univer, UniverInstanceType } from '@univerjs/core';
import { UniverDataValidationPlugin } from '@univerjs/data-validation';
import { defaultTheme } from '@univerjs/design';
import '@univerjs/design/lib/index.css';
import { UniverDocsPlugin } from '@univerjs/docs';
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import '@univerjs/docs-ui/lib/index.css';
import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';
import { UniverSheetsPlugin } from '@univerjs/sheets';
import { UniverSheetsConditionalFormattingUIPlugin } from '@univerjs/sheets-conditional-formatting-ui';
import { UniverSheetsDataValidationPlugin } from '@univerjs/sheets-data-validation';
import '@univerjs/sheets-data-validation/lib/index.css';
import { UniverSheetsFormulaPlugin } from '@univerjs/sheets-formula';
import '@univerjs/sheets-formula/lib/index.css';
import { UniverSheetsUIPlugin } from '@univerjs/sheets-ui';
import '@univerjs/sheets-ui/lib/index.css';
import { UniverUIPlugin } from '@univerjs/ui';
import '@univerjs/ui/lib/index.css';

import { luckyToUniver } from './core/lucky-to-univer';
import { luckyJson } from './data/demo-feature';
import { locales } from './locale';
import './style.css';

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales,
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
  header: true,
  footer: true,
});

univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);

// data validation
univer.registerPlugin(UniverDataValidationPlugin);
univer.registerPlugin(UniverSheetsDataValidationPlugin);

// sheet condition formatting
univer.registerPlugin(UniverSheetsConditionalFormattingUIPlugin);

// create univer sheet instance
const univerData = luckyToUniver(luckyJson);

univer.createUnit(UniverInstanceType.UNIVER_SHEET, univerData);

window.univer = univer;

declare global {
  interface Window {
    univer?: Univer;
  }
}
