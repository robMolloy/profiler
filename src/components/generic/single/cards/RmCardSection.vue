<template>
  <q-card-section v-bind="{...componentProps, ...attrs}">
    <slot />
  </q-card-section>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmCardSection as componentProps } from '../../../../config/customise/componentProps';

const attrs = useAttrs();
</script>
