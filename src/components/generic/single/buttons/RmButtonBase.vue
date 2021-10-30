<template>
  <q-btn
    v-bind="{...componentProps, ...attrs}"
  >
    <slot />
  </q-btn>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmButtonBase as componentProps } from '../../../../config/customise/componentProps';

const attrs = useAttrs();
</script>
