<template>
  <RmButtonBase
    v-bind="{...componentProps, ...attrs}"
    type="submit"
  >
    Submit
  </RmButtonBase>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmButtonSubmit as componentProps } from '../../../../config/customise/componentProps';

import RmButtonBase from './RmButtonBase.vue';

const attrs = useAttrs();

</script>
