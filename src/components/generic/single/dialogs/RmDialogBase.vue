<template>
  <q-dialog
    v-bind="{...componentProps, ...attrs}"
  >
    <slot />
  </q-dialog>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmDialogBase as componentProps } from '../../../../config/customise/componentProps';

const attrs = useAttrs();
</script>
