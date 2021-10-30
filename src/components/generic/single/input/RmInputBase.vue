<template>
  <q-input v-bind="{ ...componentProps, ...attrs }" />
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmInputBase as componentProps } from '../../../../config/customise/componentProps';

const attrs = useAttrs();
</script>
