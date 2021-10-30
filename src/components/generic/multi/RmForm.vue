<template>
  <q-form>
    <q-card-section>
      <slot />
    </q-card-section>
    <RmCardActions>
      <RmButtonsSubmitReset />
    </RmCardActions>
  </q-form>
</template>

<script setup>
import RmButtonsSubmitReset from './RmButtonsSubmitReset.vue';
import RmCardActions from '../single/cards/RmCardActions.vue';

</script>
