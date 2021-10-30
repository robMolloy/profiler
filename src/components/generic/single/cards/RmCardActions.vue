<template>
  <q-card-actions v-bind="{...componentProps}">
    <slot />
  </q-card-actions>
</template>

<script setup>
import { RmCardActions as componentProps } from '../../../../config/customise/componentProps';

</script>

<style lang="scss" scoped>

</style>
