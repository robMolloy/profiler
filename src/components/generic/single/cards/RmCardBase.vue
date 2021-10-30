<template>
  <q-card v-bind="{...componentProps, ...attrs}">
    <slot />
  </q-card>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmCardBase as componentProps } from '../../../../config/customise/componentProps';

const attrs = useAttrs();

</script>
