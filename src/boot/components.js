import { boot } from 'quasar/wrappers';
import RmCard from '../components/generic/single/cards/RmCardBase.vue';
// import RmBtn from '../components/generic/single/buttons/RmButtonBase.vue';

export default boot(({ app }) => {
  app.component('RmCard', RmCard);
  // app.component('RmBtn', RmBtn);
});
