<template>
  <RmButtonBase
    v-bind="{...componentProps, ...attrs}"
    type="reset"
  >
    Reset
  </RmButtonBase>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmButtonReset as componentProps } from '../../../../config/customise/componentProps';

import RmButtonBase from './RmButtonBase.vue';

const attrs = useAttrs();

</script>
