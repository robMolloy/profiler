import { boot } from 'quasar/wrappers';
import { initiateRules, ruleSets } from 'valid9';

const v9 = initiateRules(ruleSets.standard);
const mxn = { data: () => ({ v9 }) };

export default boot(({ app }) => {
  app.mixin(mxn);
});
