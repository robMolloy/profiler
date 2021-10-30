<template>
  <RmIconBase
    v-bind="componentProps"
    icon="close"
  />
</template>

<script setup>
import { RmIconClose as componentProps } from 'src/config/customise/componentProps';
import RmIconBase from './RmIconBase.vue';

</script>
