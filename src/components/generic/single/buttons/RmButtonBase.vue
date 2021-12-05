<template>
  <q-btn v-bind="{...componentProps, ...attrs}">
    <slot>
      {{ label }}
    </slot>
  </q-btn>
</template>

<script setup>
import { useAttrs, defineProps } from 'vue';
import { RmButtonBase as componentProps } from '../../../../config/customise/componentProps';

const attrs = useAttrs();
defineProps({ label: { type: String, default: '' } });
</script>
